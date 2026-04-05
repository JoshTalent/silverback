import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  X,
  Menu,
  Star,
  Phone,
  Clock,
  Home as HomeIcon,
  Info,
  Calendar,
  Users,
  Newspaper,
  Trophy,
  Mail,
  User,
  Eye,
  Swords,
} from "lucide-react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  // Scroll effect for navbar
  const updateScrollState = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("scroll", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    updateScrollState();
    const timer = setTimeout(() => updateScrollState(), 100);
    return () => clearTimeout(timer);
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenAccordion(null);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("[data-menu-button]")
      ) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    };
  }, [isMobileOpen]);

  // Menu items for Events dropdown
  const eventsMenu = [
    {
      name: "Upcoming Events",
      to: "/events/upcoming",
      icon: Calendar,
      description: "Next fight nights",
    },
    {
      name: "Past Events",
      to: "/events/past",
      icon: Calendar,
      description: "Previous events & results",
    },
    {
      name: "Event Calendar",
      to: "/events/calendar",
      icon: Calendar,
      description: "Full schedule",
    },
  ];

  const isActiveLink = (path) => location.pathname === path;
  const isActiveParent = (paths) =>
    paths.some((path) => location.pathname.startsWith(path));

  return (
    <>
      {/* Main Navbar - Black & White Theme */}
      <nav
        className={`fixed w-full z-[9999] transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-white/10"
            : "bg-black/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo - Silverback Promotions Black & White */}
            <Link
              to="/"
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <div className="w-10 h-10 lg:w-20 lg:h-w-20 flex items-center justify-center">
                  {/* Silverback Gorilla Silhouette */}
                  <img
                    src="https://i.postimg.cc/NFZXpFMc/571078491-17851441500576936-7306652937116194636-n.jpg"
                    alt=""
                  />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-black tracking-tight text-white">
                  SILVERBACK SPORTS
                </span>
                <span className="text-xs text-gray-400 font-semibold tracking-wider">
                  PROMOTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Menu - Black & White */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* 1. Home */}
              <NavLink to="/" isActive={isActiveLink("/")}>
                HOME
              </NavLink>

              {/* 2. About */}
              <NavLink to="/about" isActive={isActiveLink("/about")}>
                ABOUT
              </NavLink>

              {/* 3. Blog */}
              <NavLink to="/blog" isActive={isActiveLink("/blog")}>
                BLOG
              </NavLink>

              {/* 4. ATHLETES - Direct link (no dropdown) */}
              <NavLink to="/athletes" isActive={isActiveLink("/athletes")}>
                ATHLETES
              </NavLink>

              {/* 5. Events - Dropdown */}
              <EnhancedDropdown
                title="EVENTS"
                items={eventsMenu}
                isActive={isActiveParent(["/events"])}
                isOpen={isEventsDropdownOpen}
                setIsOpen={setIsEventsDropdownOpen}
              />

              {/* 6. Brand Intro */}
              <NavLink to="/gallery" isActive={isActiveLink("/gallery")}>
                GALLERY
              </NavLink>

              {/* Contact Button - Black & White */}
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/20">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold text-sm"
                  >
                    Contact
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              data-menu-button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden w-10 h-10 rounded-lg bg-white/10 border border-white/30 flex items-center justify-center text-white backdrop-blur-sm"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Black & White */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9998] lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-black border-l border-white/20 shadow-2xl flex flex-col z-[9999] overflow-y-auto isolate"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10 sticky top-0 bg-black">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">
                      SILVERBACK
                    </h2>
                    <p className="text-xs text-gray-400">PROMOTIONS</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsMobileOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Drawer Links - Black & White */}
              <div className="flex-1 p-6 space-y-2">
                <MobileLink
                  to="/"
                  label="HOME"
                  isActive={isActiveLink("/")}
                  closeMenu={() => setIsMobileOpen(false)}
                />

                <MobileLink
                  to="/about"
                  label="ABOUT"
                  isActive={isActiveLink("/about")}
                  closeMenu={() => setIsMobileOpen(false)}
                />

                <MobileLink
                  to="/blog"
                  label="BLOG"
                  isActive={isActiveLink("/blog")}
                  closeMenu={() => setIsMobileOpen(false)}
                />

                {/* ATHLETES - Direct link (no dropdown) */}
                <MobileLink
                  to="/athletes"
                  label="ATHLETES"
                  isActive={isActiveLink("/athletes")}
                  closeMenu={() => setIsMobileOpen(false)}
                />

                {/* Events - Accordion */}
                <EnhancedMobileAccordion
                  title="EVENTS"
                  menu={eventsMenu}
                  openAccordion={openAccordion}
                  setOpenAccordion={setOpenAccordion}
                  closeMenu={() => setIsMobileOpen(false)}
                  isActive={isActiveParent(["/events"])}
                />

                <MobileLink
                  to="/gallery"
                  label="GALLERY"
                  isActive={isActiveLink("/gallery")}
                  closeMenu={() => setIsMobileOpen(false)}
                />

                {/* Contact CTA */}
                <div className="pt-6 space-y-3">
                  <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
                    >
                      📞 Contact Silverback
                    </motion.button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-white/10">
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-white" />
                      <span>Call: (555) 234-5678</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-white" />
                      <span>Mon-Fri: 9AM-6PM | Fight Nights: 6PM-11PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <div className="text-center text-gray-400 text-sm space-y-2">
                  <div className="flex justify-center items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-white" />
                      <span>Premier Boxing Promotions</span>
                    </div>
                  </div>
                  <p className="pt-2 text-xs">
                    © 2024 Silverback Promotions. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* Desktop Nav Link - Black & White */
const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`relative px-3 py-2 font-semibold text-sm transition-all duration-300 group ${
      isActive ? "text-white" : "text-gray-400 hover:text-white"
    }`}
  >
    {children}
    {isActive && (
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
        layoutId="navbar-indicator"
      />
    )}
    <div
      className={`absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ${
        isActive ? "scale-100" : ""
      }`}
    />
  </Link>
);

/* Desktop Dropdown - Black & White */
const EnhancedDropdown = ({ title, items, isActive, isOpen, setIsOpen }) => {
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center px-3 py-2 font-semibold text-sm transition-all duration-300 group ${
          isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`}
      >
        {title}
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
            layoutId="navbar-indicator"
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-3 w-64 z-[10000]"
          >
            <div className="space-y-1">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 hover:border-white/30 border border-transparent transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white group-hover:text-gray-300 transition-colors text-sm truncate">
                      {item.name}
                    </div>
                    {item.description && (
                      <div className="text-xs text-gray-500 mt-0.5 truncate">
                        {item.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* Mobile Link - Black & White */
const MobileLink = ({ to, label, isActive, closeMenu }) => (
  <Link
    to={to}
    onClick={closeMenu}
    className={`block py-3 px-4 rounded-xl text-base font-semibold transition-all duration-300 border ${
      isActive
        ? "bg-white/10 border-white/30 text-white"
        : "text-gray-400 hover:bg-white/5 hover:text-white border-transparent"
    }`}
  >
    {label}
  </Link>
);

/* Mobile Accordion - Black & White */
const EnhancedMobileAccordion = ({
  title,
  menu,
  openAccordion,
  setOpenAccordion,
  closeMenu,
  isActive,
}) => {
  const isOpen = openAccordion === title;

  return (
    <div
      className={`rounded-xl overflow-hidden border ${
        isActive ? "bg-white/5 border-white/20" : "border-transparent"
      }`}
    >
      <button
        onClick={() => setOpenAccordion(isOpen ? null : title)}
        className={`flex items-center justify-between w-full py-3 px-4 text-base font-semibold transition-all duration-300 ${
          isOpen ? "text-white" : "text-gray-400 hover:text-white"
        }`}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-2 px-2 space-y-1">
              {menu.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  onClick={closeMenu}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-200 group"
                >
                  {item.icon && (
                    <item.icon className="w-4 h-4 text-white flex-shrink-0" />
                  )}
                  <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

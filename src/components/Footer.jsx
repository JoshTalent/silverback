import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Trophy,
  Users,
  Heart,
  ArrowRight,
  Shield,
  Zap,
  Calendar,
  Ticket,
  Award,
  ChevronRight,
  Globe,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "EXPLORE",
      links: [
        { name: "Home", to: "/" },
        { name: "About Silverback", to: "/about" },
        { name: "Brand Intro", to: "/brand-intro" },
        { name: "Athletes", to: "/athletes" },
        { name: "Blog", to: "/blog" },
      ],
    },
    {
      title: "EVENTS",
      links: [
        { name: "Upcoming Events", to: "/events/upcoming" },
        { name: "Past Events", to: "/events/past" },
        { name: "Event Calendar", to: "/events/calendar" },
        { name: "Get Tickets", to: "/events" },
        { name: "Fight Card Archive", to: "/events/past" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Contact Us", to: "/contact" },
        { name: "FAQs", to: "/contact" },
        { name: "Partnerships", to: "/contact" },
        { name: "Media Inquiries", to: "/contact" },
        { name: "Privacy Policy", to: "/privacy" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "Silverback Promotions HQ",
      subtext: "KG 456 St, Kigali, Rwanda",
    },
    {
      icon: Phone,
      text: "+250 788 123 456",
      subtext: "Mon-Fri 9AM-6PM",
    },
    {
      icon: Mail,
      text: "info@silverbackpromotions.com",
      subtext: "Response within 24h",
    },
    {
      icon: Clock,
      text: "Mon-Fri: 9AM-6PM",
      subtext: "Sat: 10AM-4PM | Sun: Closed",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-[#1877f2]" },
    { icon: Instagram, href: "#", color: "hover:bg-[#e4405f]" },
    { icon: Twitter, href: "#", color: "hover:bg-[#1da1f2]" },
    { icon: Youtube, href: "#", color: "hover:bg-[#ff0000]" },
    { icon: Linkedin, href: "#", color: "hover:bg-[#0077b5]" },
  ];

  const quickStats = [
    { value: "25+", label: "Pro Fighters", icon: Users },
    { value: "20+", label: "Events Hosted", icon: Calendar },
    { value: "8", label: "Champions", icon: Award },
    { value: "78%", label: "KO Rate", icon: Zap },
  ];

  return (
    <footer className="relative bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-2xl">🦍</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">
                  SILVERBACK
                </span>
                <span className="text-xs text-gray-400 font-semibold tracking-wider">
                  PROMOTIONS
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 text-base">
              Africa's premier boxing promotion company. We discover, develop,
              and showcase elite talent through world-class events that
              captivate audiences across the continent and beyond.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <stat.icon className="w-5 h-5 text-white/40 mx-auto mb-1" />
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 transition-all duration-300 text-gray-400 ${social.color} hover:text-white hover:border-transparent`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10"
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                <contact.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-base">
                  {contact.text}
                </p>
                <p className="text-gray-500 text-sm mt-1">{contact.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-3">
                <Ticket className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">
                  Never Miss a Fight!
                </h3>
              </div>
              <p className="text-gray-400 text-base">
                Subscribe to get exclusive updates on upcoming events, ticket
                releases, and behind-the-scenes content.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm flex items-center gap-2">
              <span>
                © {currentYear} Silverback Promotions. All rights reserved.
              </span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>

            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-white/40" />
                Official Boxing Promoter
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-white/40" />
                Rwanda
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 translate-y-32 blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-24 -translate-y-24 blur-3xl pointer-events-none"></div>

      {/* Gorilla Silhouette Decoration */}
      <div className="absolute bottom-20 right-20 opacity-5 pointer-events-none hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="white" />
          <circle cx="70" cy="80" r="15" fill="black" />
          <circle cx="130" cy="80" r="15" fill="black" />
          <ellipse cx="100" cy="120" rx="25" ry="15" fill="black" />
          <path
            d="M50 70 Q80 40 100 45 Q120 40 150 70"
            stroke="white"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;

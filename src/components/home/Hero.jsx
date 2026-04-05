import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Star,
  Users,
  Target,
  ArrowRight,
  Award,
  Shield,
  Clock,
  MapPin,
  Trophy,
  Zap,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Featured upcoming events
  const upcomingEvents = [
    {
      name: "Silverback Showdown",
      date: "April 15, 2024",
      location: "Kigali Arena",
      ticketStatus: "On Sale Now",
      price: "$25 - $150",
      mainEvent: "Kagame vs. Niyomugabo",
    },
    {
      name: "Rumble in Rwanda",
      date: "May 20, 2024",
      location: "BK Arena",
      ticketStatus: "Coming Soon",
      price: "$30 - $200",
      mainEvent: "Uwase vs. Mukamana",
    },
    {
      name: "Gorilla Warfare",
      date: "June 10, 2024",
      location: "Camp Kigali",
      ticketStatus: "Pre-sale",
      price: "$20 - $120",
      mainEvent: "Habimana vs. Rukundo",
    },
  ];

  // Champion stats
  const championStats = [
    { label: "Pro Fighters", value: "25+", icon: Users },
    { label: "Championships", value: "8", icon: Trophy },
    { label: "KO Rate", value: "78%", icon: Zap },
    { label: "Events/Year", value: "12+", icon: Calendar },
  ];

  // Auto-advance event carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % upcomingEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [upcomingEvents.length]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-20">
      {/* Pure Black Background - No gradients, no images */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle grid pattern for texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="min-h-screen flex flex-col justify-between py-12">
          {/* Main Hero Content */}
          <div className="flex-1 flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white/80">
                    Next Fight: April 15
                  </span>
                </motion.div>

                {/* Main Title */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl lg:text-7xl xl:text-8xl font-black leading-tight"
                  >
                    <span className="text-white">SILVERBACK</span>
                    <span className="block text-white/60 mt-2">PROMOTIONS</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg text-white/60 leading-relaxed max-w-lg"
                  >
                    Africa's premier boxing promotion company. World-class
                    events, elite athletes, and unforgettable fight nights in
                    the heart of Rwanda.
                  </motion.p>
                </div>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                >
                  {championStats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="text-center"
                    >
                      <stat.icon className="w-5 h-5 text-white/40 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/40">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/events">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-black font-bold rounded-lg flex items-center gap-2 group"
                    >
                      Buy Tickets
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link to="/fighters">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg flex items-center gap-2 hover:bg-white/5 transition-all"
                    >
                      Meet Fighters
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Content - Event Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-white/60" />
                      <h3 className="text-white font-bold text-lg">
                        Next Event
                      </h3>
                    </div>
                    <div className="flex gap-1">
                      {upcomingEvents.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentEvent(idx)}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            currentEvent === idx
                              ? "bg-white w-6"
                              : "bg-white/20 w-3"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Event Details Carousel */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentEvent}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <h2 className="text-2xl font-bold text-white">
                        {upcomingEvents[currentEvent].name}
                      </h2>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span>{upcomingEvents[currentEvent].date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60">
                          <MapPin className="w-4 h-4" />
                          <span>{upcomingEvents[currentEvent].location}</span>
                        </div>
                      </div>

                      {/* Main Event */}
                      <div className="pt-2">
                        <p className="text-white/40 text-sm">Main Event</p>
                        <p className="text-white font-semibold">
                          {upcomingEvents[currentEvent].mainEvent}
                        </p>
                      </div>

                      {/* Ticket Info */}
                      <div className="flex justify-between items-center pt-4 border-t border-white/10">
                        <div>
                          <p className="text-white/40 text-sm">Ticket Price</p>
                          <p className="text-white font-bold">
                            {upcomingEvents[currentEvent].price}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/40 text-sm">Status</p>
                          <p className="text-green-400 font-semibold text-sm">
                            {upcomingEvents[currentEvent].ticketStatus}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Buy Button */}
                  <Link
                    to={`/events/${upcomingEvents[currentEvent].name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full mt-6 py-3 bg-white/10 text-white font-bold rounded-lg flex items-center justify-center gap-2 group hover:bg-white/20 transition-all"
                    >
                      Get Tickets
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>

                {/* Silverback Icon */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <span className="text-2xl">🦍</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-between items-center gap-4">
              {/* Trust Badges */}
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-white/40" />
                  <span className="text-white/40 text-sm">
                    Rwanda Boxing Commission
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-white/40" />
                  <span className="text-white/40 text-sm">4.9/5 Rating</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white/30 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-white/30 hover:text-white transition-colors text-sm"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-white/30 hover:text-white transition-colors text-sm"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-white/30 hover:text-white transition-colors text-sm"
                >
                  YouTube
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs">Scroll to explore</span>
          <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/30 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <span className="text-3xl">🦍</span>
                  </div>
                  <p className="text-xl font-bold">Silverback Promotions</p>
                  <p className="text-sm text-white/40 mt-2">
                    Promo Video Coming Soon
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;

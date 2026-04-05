import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Users,
  Trophy,
  Calendar,
  Star,
  ArrowRight,
  User,
  Briefcase,
  FileText,
  Globe,
  Shield,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+250 788 123 456", "+250 788 123 457"],
      description: "Mon-Fri: 9AM - 6PM",
      color: "white",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@silverback.com", "bookings@silverback.com"],
      description: "Response within 24 hours",
      color: "white",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Silverback Promotions HQ", "KG 456 St, Kigali, Rwanda"],
      description: "View on Google Maps",
      color: "white",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      description: "Sunday: Closed",
      color: "white",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageCircle },
    { value: "booking", label: "Event Booking", icon: Calendar },
    { value: "fighter", label: "Fighter Application", icon: Users },
    { value: "sponsorship", label: "Sponsorship", icon: Trophy },
    { value: "media", label: "Media/Press", icon: Globe },
    { value: "partnership", label: "Partnership", icon: HandshakeIcon },
  ];

  const socialLinks = [
    {
      platform: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "hover:bg-[#1877f2]",
    },
    {
      platform: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      color: "hover:bg-[#1da1f2]",
    },
    {
      platform: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:bg-[#e4405f]",
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:bg-[#0077b5]",
    },
    {
      platform: "YouTube",
      icon: Youtube,
      url: "https://youtube.com",
      color: "hover:bg-[#ff0000]",
    },
  ];

  const faqs = [
    {
      question: "How can I become a Silverback fighter?",
      answer:
        "Interested fighters can fill out the fighter application form or email us at fighters@silverback.com with your amateur/professional record, weight class, and a highlight video if available.",
    },
    {
      question: "How do I purchase event tickets?",
      answer:
        "Tickets can be purchased directly through our website's events page, or at authorized ticketing partners including Kigali Arena box office and Ticket Rwanda.",
    },
    {
      question: "Does Silverback offer sponsorship opportunities?",
      answer:
        "Yes! We offer various sponsorship packages for events, individual fighters, and our promotional brand. Contact our partnerships team for more information.",
    },
    {
      question: "How can I book Silverback for an event?",
      answer:
        "For event booking inquiries, please fill out the contact form with 'Event Booking' selected as the inquiry type, and our events team will respond within 48 hours.",
    },
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-black flex items-center pt-20">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Contact <span className="text-white/60">Silverback</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Have questions about events, partnerships, or fighter
              opportunities? We're here to help. Reach out to our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-white/60 text-sm mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-white/40 text-xs mt-2">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-white/60 text-sm">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="+250 788 123 456"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                  >
                    {inquiryTypes.map((type) => (
                      <option
                        key={type.value}
                        value={type.value}
                        className="bg-black"
                      >
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Success/Error Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Map & Social Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                <div className="p-6 pb-0">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Our Location
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Silverback Promotions Headquarters, Kigali, Rwanda
                  </p>
                </div>
                <div className="h-64 bg-white/5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.234567890123!2d30.0588!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e597%3A0xf9b6e7e8f7b6e7e8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Silverback Promotions Location"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Social Links Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ${social.color} hover:text-white`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="bg-gradient-to-r from-white/10 to-transparent rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      Quick Response
                    </h3>
                    <p className="text-white/60 text-sm">
                      We aim to respond to all inquiries within 24 hours. For
                      urgent matters, please call our office directly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-white/60">Questions</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Find quick answers to common questions about Silverback
              Promotions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="text-white font-bold text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-white/10 to-transparent rounded-3xl p-12 border border-white/10"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join the Silverback Family?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Whether you're a fighter, sponsor, or fan, there's a place for you
              in the Silverback Promotions family. Get in touch today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/athletes">
                <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all flex items-center gap-2">
                  Become a Fighter
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/events">
                <button className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Upcoming Events
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Handshake Icon component (since it's not in lucide-react)
const HandshakeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 15h3v-3H2v3zM19 12h3v3h-3v-3z" />
    <path d="M5 12h14v3H5z" />
    <path d="M12 3v3" />
    <path d="M9 6h6" />
    <path d="M9 9h6" />
    <path d="M9 12h6" />
    <path d="M12 15v6" />
    <path d="M9 21h6" />
    <path d="M7 12v3" />
    <path d="M17 12v3" />
  </svg>
);

export default Contact;

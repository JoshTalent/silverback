import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Award,
  Users,
  Target,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
  Twitter,
  Trophy,
  Calendar,
  Heart,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Instagram,
  Linkedin,
  User,
  Globe,
  Facebook,
  Download,
  Share2,
  Shield,
  Zap,
  TrendingUp,
  Crown,
  Sparkles,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const testimonials = [
    {
      name: "Emmanuel Kagame",
      role: "Heavyweight Champion",
      content:
        "Silverback Promotions gave me the platform to showcase my talent. The team's dedication to athlete development is unmatched in Africa.",
      image: "https://i.postimg.cc/268gB9Nn/valentin3.jpg",
      record: "12-0-0 (10 KOs)",
    },
    {
      name: "Grace Uwase",
      role: "Women's Middleweight Champion",
      content:
        "The best promotion company in East Africa. They treat fighters like family and deliver world-class events every single time.",
      image: "https://i.postimg.cc/7h5cKC6w/Heros3.jpg",
      record: "10-0-0 (8 KOs)",
    },
    {
      name: "Jean Niyomugabo",
      role: "Light Heavyweight Contender",
      content:
        "Silverback changed my life. From a local fighter to international recognition - they made it all possible.",
      image: "https://i.postimg.cc/SsT3LLmf/boxing.jpg",
      record: "8-1-0 (6 KOs)",
    },
  ];

  const partners = [
    {
      name: "Rwanda Boxing Federation",
      logo: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&auto=format&fit=crop",
      description: "Official governing body partner",
      category: "Governing Body",
      since: "2020",
    },
    {
      name: "Kigali Arena",
      logo: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&auto=format&fit=crop",
      description: "Premier event venue partner",
      category: "Venue",
      since: "2021",
    },
    {
      name: "MTN Rwanda",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&auto=format&fit=crop",
      description: "Broadcasting & connectivity partner",
      category: "Technology",
      since: "2022",
    },
  ];

  const executiveTeam = [
    {
      name: "MRJBurke",
      role: "Founder & CEO",
      bio: "Former professional boxer turned promoter. Built Silverback from ground up with a vision to elevate African boxing to global stage.",
      email: "mrJBurke@silverback.com",
      phone: "+250 788 123 456",
      experience: 15,
      expertise: ["Promotion", "Strategy", "Athlete Development"],
      achievements: [
        "Promoted 20+ Championship Events",
        "Developed 5 National Champions",
        "African Promoter of the Year 2023",
      ],
      image: "https://i.postimg.cc/wjpFhqGQ/447944659_339464739179561_4484790459815388033_n.jpg",
    },
  ];

  const stats = [
    { value: "25+", label: "Pro Fighters", icon: Users, color: "white" },
    { value: "20+", label: "Events Hosted", icon: Calendar, color: "white" },
    { value: "8", label: "Champions", icon: Crown, color: "white" },
    { value: "78%", label: "KO Rate", icon: Zap, color: "white" },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Silverback Founded",
      description: "Began with vision to transform African boxing",
      longDescription:
        "Founded by former champion Ezikiel ISHIMWE with a mission to elevate African boxing to global standards.",
      icon: Crown,
      impact: "Foundation",
      color: "from-yellow-600/20 to-yellow-400/20",
      number: "01",
    },
    {
      year: "2021",
      title: "First Championship Event",
      description: "Sold-out debut event at Kigali Arena",
      longDescription:
        "Made history with our first sold-out event at Kigali Arena, drawing 5,000+ passionate fans.",
      icon: Trophy,
      impact: "5,000+ Attendees",
      color: "from-blue-600/20 to-blue-400/20",
      number: "02",
    },
    {
      year: "2022",
      title: "First Champion Crowned",
      description: "Emmanuel Kagame wins heavyweight title",
      longDescription:
        "Emmanuel Kagame becomes Silverback's first heavyweight champion, inspiring a new generation.",
      icon: Crown,
      impact: "8 Champions",
      color: "from-purple-600/20 to-purple-400/20",
      number: "03",
    },
    {
      year: "2023",
      title: "International Recognition",
      description: "Featured in global boxing media",
      longDescription:
        "Silverback gains international recognition, featured in major boxing publications worldwide.",
      icon: Globe,
      impact: "Global Reach",
      color: "from-green-600/20 to-green-400/20",
      number: "04",
    },
    {
      year: "2024",
      title: "Pan-African Expansion",
      description: "Events across East Africa",
      longDescription:
        "Expanding our reach across East Africa, bringing world-class boxing to new territories.",
      icon: TrendingUp,
      impact: "Growing Fast",
      color: "from-red-600/20 to-red-400/20",
      number: "05",
    },
  ];

  return (
    <>
      {/* Hero Section - Split Screen Black & White */}
      <section className="min-h-screen bg-black flex pt-20">
        {/* Left Side - Content */}
        <div className="flex-1 flex items-center justify-center p-12">
          <motion.div
            className="max-w-2xl space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-10 bg-white rounded-full"></div>
                <span className="text-white/60 font-semibold tracking-wider uppercase text-sm">
                  EST. 2020
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="text-white">SILVERBACK</span>
                <br />
                <span className="text-white/60">PROMOTIONS</span>
              </h1>

              <p className="text-xl text-white/60 leading-relaxed">
                Africa's premier boxing promotion company. We discover, develop,
                and showcase elite talent through world-class events that
                captivate audiences across the continent and beyond.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-2xl"
                >
                  Upcoming Events
                </motion.button>
              </Link>
              <Link to="/fighters">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Meet Fighters
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="w-5 h-5 text-white/40 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Full Height Image */}
        <div className="flex-1 relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-10" />
          <img
            src="https://i.postimg.cc/7PdhfbW8/Screenshot-2026-04-05-141320.png"
            alt="Silverback Promotions"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 right-8 z-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
              <span className="text-4xl">🦍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Black & White */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-white/60" />
              <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                OUR STORY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              The <span className="text-white/60">Silverback</span> Legacy
            </h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mb-6"></div>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              From a bold vision to Africa's most exciting boxing promotion
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Born in Rwanda, Built for Champions
              </h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                In 2020, former boxing champion MRJBurke founded Silverback
                Promotions with a singular mission: to put African boxing on the
                global map. What started as a small promotional outfit has grown
                into the continent's most respected boxing promotion company.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Today, Silverback Promotions represents over 25 elite fighters,
                has produced 8 champions, and delivers world-class events that
                sell out arenas across East Africa.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://i.postimg.cc/W4Cm35GC/Screenshot_2026_04_05_114601.png"
                  alt="Silverback History"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-white/60" />
                  <div>
                    <div className="text-2xl font-bold text-white">8</div>
                    <div className="text-xs text-white/40">Champions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Modern Timeline Section - Fully Responsive */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                  Our <span className="text-white/60">Journey</span>
                </h3>
                <div className="w-24 h-1 bg-white/20 mx-auto mb-6"></div>
                <p className="text-white/40 text-lg max-w-2xl mx-auto">
                  The milestones that shaped Silverback Promotions into Africa's
                  premier boxing promotion
                </p>
              </motion.div>
            </div>

            <div className="relative">
              {/* Vertical Line - Hidden on mobile, visible on tablet/desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20" />

              <div className="space-y-12 md:space-y-0">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center mb-0 md:mb-12`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: 360 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-white to-white/80 text-black flex items-center justify-center shadow-2xl"
                      >
                        <milestone.icon className="w-5 h-5 md:w-6 md:h-6" />
                        <div className="absolute -inset-1 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className={`w-full md:w-5/12 ${
                        idx % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:text-left"
                      } mb-8 md:mb-0 ml-8 md:ml-0`}
                    >
                      <div className="group relative">
                        {/* Background Gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                        />

                        {/* Card Content */}
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                          {/* Year Badge */}
                          <div
                            className={`inline-flex items-center gap-2 mb-4 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-start`}
                          >
                            <div className="px-4 py-1.5 bg-white/10 rounded-full">
                              <span className="text-white/60 text-sm font-bold">
                                {milestone.year}
                              </span>
                            </div>
                            <div className="px-3 py-1.5 bg-gradient-to-r from-white/20 to-white/5 rounded-full">
                              <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                                {milestone.impact}
                              </span>
                            </div>
                          </div>

                          {/* Title with Number */}
                          <div className="mb-4">
                            <div
                              className={`text-5xl md:text-6xl font-black text-white/5 mb-2 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} text-left`}
                            >
                              {milestone.number}
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                              {milestone.title}
                            </h4>
                          </div>

                          {/* Description */}
                          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-3">
                            {milestone.description}
                          </p>
                          <p className="text-white/40 text-xs md:text-sm leading-relaxed">
                            {milestone.longDescription}
                          </p>

                          {/* Decorative Line */}
                          <div
                            className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-r ${
                              idx % 2 === 0
                                ? "right-0 from-white/40 to-transparent"
                                : "left-0 from-white/40 to-transparent"
                            }`}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Empty spacer for desktop */}
                    <div className="hidden md:block w-5/12" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline Indicator */}
            <div className="md:hidden flex justify-center mt-8">
              <div className="flex gap-2">
                {milestones.map((_, idx) => (
                  <div key={idx} className="w-2 h-2 rounded-full bg-white/20" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Side by Side */}
      <section className="py-24 bg-black border-t border-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white/60" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/60 leading-relaxed">
                To discover, develop, and showcase elite African boxing talent
                through world-class events, professional management, and
                unwavering commitment to athlete success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white/60" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/60 leading-relaxed">
                To establish African boxing as a global force, producing world
                champions and hosting international mega-events that showcase
                the continent's extraordinary talent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team - With Profile Pictures */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-white/60" />
              <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                LEADERSHIP
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              The Team Behind <span className="text-white/60">Silverback</span>
            </h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mb-6"></div>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Visionary leaders driving the future of African boxing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="p-8 text-center">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-white/20"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                      <span className="text-white text-xs font-semibold">
                        View Profile
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/40 text-sm mb-4">{member.role}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Experience Badge */}
                  <div className="inline-block mb-4 px-3 py-1 bg-white/10 rounded-full">
                    <span className="text-white/60 text-xs">
                      {member.experience}+ Years Experience
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 text-white/60 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-white/60" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white/60" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white/60" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-white/60" />
              <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                PARTNERS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Strategic <span className="text-white/60">Partners</span>
            </h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-white/40 text-sm mb-3">{partner.category}</p>
                <p className="text-white/60 text-sm">{partner.description}</p>
                <div className="mt-4 text-white/30 text-xs">
                  Since {partner.since}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-white/60" />
              <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Fighter <span className="text-white/60">Voices</span>
            </h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all"
              >
                <Quote className="w-10 h-10 text-white/20 mb-4" />
                <p className="text-white/60 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-white/40 text-sm">{testimonial.role}</p>
                    <p className="text-white/30 text-xs">
                      {testimonial.record}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-4xl">🦍</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience Silverback?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join us at our next event and witness world-class boxing featuring
              Africa's finest talent.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg"
                >
                  Get Tickets
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

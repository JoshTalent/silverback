import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Ticket,
  Users,
  Trophy,
  Award,
  Star,
  ChevronRight,
  X,
  Phone,
  Mail,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Bell,
  CheckCircle,
  AlertCircle,
  User,
  Weight,
  Activity,
  Sparkles,
  Flame,
  Crown,
  Medal,
  Eye,
  Heart,
  MessageCircle,
  DollarSign,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Instagram,
  Youtube,
  Tv,
  Wifi,
  Armchair,
  Coffee,
  Music,
  ParkingCircle,
  Accessibility,
  CreditCard,
  Smartphone,
  Headphones,
  Info,
  CircleDot,
  Maximize2,
  Minimize2,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Menu,
  Grid,
  List,
  Settings,
  HelpCircle,
  Send,
  Gift,
  Sparkle,
} from "lucide-react";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [selectedTicketTier, setSelectedTicketTier] = useState("vip");
  const [activeModalTab, setActiveModalTab] = useState("overview");

  // Upcoming Events Data
  const events = [
    {
      id: 1,
      title: "SILVERBACK SHOWDOWN 2024",
      subtitle: "The Battle for Supremacy",
      tagline: "Witness history in the making",
      date: "2024-05-20",
      time: "7:00 PM",
      venue: "Kigali Arena",
      address: "KG 17 Ave, Kigali, Rwanda",
      description:
        "The most anticipated boxing event of the year returns to Kigali Arena. Witness Africa's finest fighters battle for championship glory in an unforgettable night of world-class boxing. This event marks the biggest production in Silverback history with international broadcast coverage and a stacked fight card featuring champions from across the continent.",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&auto=format&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&auto=format&fit=crop",
      status: "on-sale",
      ticketTiers: [
        {
          id: "vip",
          name: "VIP Ringside",
          price: "$150",
          benefits: [
            "Front Row Seat",
            "Meet & Greet",
            "Complimentary Drinks",
            "Signed Glove",
            "VIP Parking",
          ],
          available: true,
          color: "from-yellow-500 to-amber-600",
        },
        {
          id: "premium",
          name: "Premium",
          price: "$75",
          benefits: [
            "Premium View",
            "Fast Entry",
            "Event Program",
            "Free Drink",
          ],
          available: true,
          color: "from-blue-500 to-cyan-600",
        },
        {
          id: "standard",
          name: "Standard",
          price: "$45",
          benefits: ["Standard Seat", "Event Access"],
          available: true,
          color: "from-gray-500 to-gray-600",
        },
        {
          id: "general",
          name: "General Admission",
          price: "$25",
          benefits: ["General Access", "Standing Area"],
          available: true,
          color: "from-gray-600 to-gray-700",
        },
      ],
      ticketLink: "/tickets/silverback-showdown-2024",
      featuredFighters: ["Emmanuel Kagame", "Grace Uwase", "Jean Niyomugabo"],
      mainEvent: {
        fighter1: {
          name: "Emmanuel 'Silverback' Kagame",
          record: "12-0-0 (10 KOs)",
          country: "Rwanda",
          height: "6'3\"",
          reach: '78"',
          stance: "Orthodox",
          image: "https://i.postimg.cc/268gB9Nn/valentin3.jpg",
          bio: "Undisputed African Heavyweight Champion. Known for devastating knockout power.",
        },
        fighter2: {
          name: "John 'The Beast' Okoth",
          record: "14-1-0 (11 KOs)",
          country: "Kenya",
          height: "6'2\"",
          reach: '76"',
          stance: "Orthodox",
          image:
            "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&auto=format&fit=crop",
          bio: "Kenyan powerhouse with 11 knockouts. Former national champion.",
        },
        title: "African Heavyweight Championship",
        rounds: 12,
        weightLimit: "200 lbs",
      },
      coMainEvent: {
        fighter1: {
          name: "Grace 'Iron Fist' Uwase",
          record: "10-0-0 (8 KOs)",
          country: "Rwanda",
        },
        fighter2: {
          name: "Sarah 'The Storm' Mukamana",
          record: "9-1-0 (6 KOs)",
          country: "Kenya",
        },
        title: "Women's African Middleweight Championship",
        rounds: 10,
      },
      undercard: [
        {
          name: "Jean 'The Panther' Niyomugabo",
          record: "8-1-0 (6 KOs)",
          vs: "David Nsengimana",
          record2: "6-2-0 (4 KOs)",
          weight: "Light Heavyweight",
        },
        {
          name: "Claude 'The Doctor' Habimana",
          record: "15-2-0 (9 KOs)",
          vs: "Eric Mugisha",
          record2: "4-0-0 (3 KOs)",
          weight: "Welterweight",
        },
        {
          name: "Kevin Nshimiyimana",
          record: "Pro Debut",
          vs: "Jean Paul Hitimana",
          record2: "1-1-0 (0 KOs)",
          weight: "Lightweight",
        },
        {
          name: "Aline Uwimana",
          record: "15-2-1 (10 KOs)",
          vs: "Grace Umuhoza",
          record2: "5-3-0 (2 KOs)",
          weight: "Featherweight",
        },
      ],
      schedule: [
        { time: "5:00 PM", event: "Doors Open", icon: Clock },
        { time: "6:00 PM", event: "First Bout", icon: Activity },
        { time: "8:00 PM", event: "Co-Main Event", icon: Trophy },
        { time: "9:30 PM", event: "Main Event", icon: Crown },
      ],
      amenities: [
        "Free Parking",
        "Food Court",
        "VIP Lounge",
        "Merchandise Store",
        "First Aid",
        "Security",
        "ATM Available",
        "Wheelchair Access",
      ],
      broadcast: {
        channels: ["Silverback TV", "RBA", "SuperSport"],
        streaming: "Silverback Promotions YouTube",
      },
    },
    {
      id: 2,
      title: "RUMBLE IN RWANDA",
      subtitle: "East Africa's Finest Collide",
      tagline: "Regional supremacy on the line",
      date: "2024-06-15",
      time: "6:30 PM",
      venue: "BK Arena",
      address: "Kimihurura, Kigali, Rwanda",
      description:
        "The ultimate East African boxing showdown featuring top fighters from Rwanda, Kenya, Uganda, and Tanzania. A night of intense rivalries and championship battles as regional pride hangs in the balance.",
      image:
        "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1200&auto=format&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1920&auto=format&fit=crop",
      status: "coming-soon",
      ticketTiers: [
        {
          id: "vip",
          name: "VIP Ringside",
          price: "$120",
          benefits: ["Front Row Seat", "Meet & Greet", "Complimentary Drinks"],
          available: false,
          color: "from-yellow-500 to-amber-600",
        },
        {
          id: "premium",
          name: "Premium",
          price: "$60",
          benefits: ["Premium View", "Fast Entry"],
          available: false,
          color: "from-blue-500 to-cyan-600",
        },
        {
          id: "standard",
          name: "Standard",
          price: "$35",
          benefits: ["Standard Seat"],
          available: false,
          color: "from-gray-500 to-gray-600",
        },
        {
          id: "general",
          name: "General Admission",
          price: "$20",
          benefits: ["General Access"],
          available: false,
          color: "from-gray-600 to-gray-700",
        },
      ],
      ticketLink: "/tickets/rumble-in-rwanda",
      featuredFighters: ["Jean Niyomugabo", "Aline Uwimana", "Eric Mugisha"],
      mainEvent: {
        fighter1: {
          name: "Jean 'The Panther' Niyomugabo",
          record: "8-1-0 (6 KOs)",
          country: "Rwanda",
          height: "6'0\"",
          reach: '74"',
          stance: "Orthodox",
          image: "https://i.postimg.cc/SsT3LLmf/boxing.jpg",
          bio: "Rising star with 4 consecutive KOs. Known for explosive power.",
        },
        fighter2: {
          name: "Michael 'The Lion' Otieno",
          record: "10-2-0 (7 KOs)",
          country: "Kenya",
          height: "5'11\"",
          reach: '73"',
          stance: "Southpaw",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
          bio: "Veteran contender. Former East African champion.",
        },
        title: "East African Light Heavyweight Championship",
        rounds: 10,
        weightLimit: "175 lbs",
      },
      coMainEvent: {
        fighter1: {
          name: "Aline Uwimana",
          record: "15-2-1 (10 KOs)",
          country: "Rwanda",
        },
        fighter2: {
          name: "Fatuma Hassan",
          record: "12-3-0 (8 KOs)",
          country: "Tanzania",
        },
        title: "Women's Featherweight Championship",
        rounds: 8,
      },
      undercard: [
        {
          name: "Eric Mugisha",
          record: "4-0-0 (3 KOs)",
          vs: "James Omondi",
          record2: "5-1-0 (2 KOs)",
          weight: "Middleweight",
        },
        {
          name: "Diane Iradukunda",
          record: "10-4-0 (4 KOs)",
          vs: "Rehema Nassoro",
          record2: "7-2-0 (3 KOs)",
          weight: "Bantamweight",
        },
      ],
      schedule: [
        { time: "5:00 PM", event: "Doors Open", icon: Clock },
        { time: "6:00 PM", event: "First Bout", icon: Activity },
        { time: "7:30 PM", event: "Co-Main Event", icon: Trophy },
        { time: "9:00 PM", event: "Main Event", icon: Crown },
      ],
      amenities: [
        "Free Parking",
        "Food Court",
        "Merchandise Store",
        "Security",
        "ATM Available",
      ],
      broadcast: {
        channels: ["Silverback TV", "Citizen TV"],
        streaming: "Silverback Promotions YouTube",
      },
    },
    {
      id: 3,
      title: "GORILLA WARFARE III",
      subtitle: "The Trilogy Continues",
      tagline: "The biggest rematch in African history",
      date: "2024-07-10",
      time: "7:30 PM",
      venue: "Camp Kigali",
      address: "KN 5 Rd, Kigali, Rwanda",
      description:
        "The highly anticipated trilogy event returns! After two epic encounters, the rivalry reaches its climax in what promises to be the biggest event in Rwandan boxing history. The world will be watching as these two warriors settle the score once and for all.",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&auto=format&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&auto=format&fit=crop",
      status: "coming-soon",
      ticketTiers: [
        {
          id: "vip",
          name: "VIP Ringside",
          price: "$200",
          benefits: [
            "Front Row Seat",
            "Meet & Greet",
            "Complimentary Drinks",
            "Hotel Package",
          ],
          available: false,
          color: "from-yellow-500 to-amber-600",
        },
        {
          id: "premium",
          name: "Premium",
          price: "$100",
          benefits: ["Premium View", "Fast Entry", "Event Program"],
          available: false,
          color: "from-blue-500 to-cyan-600",
        },
        {
          id: "standard",
          name: "Standard",
          price: "$50",
          benefits: ["Standard Seat"],
          available: false,
          color: "from-gray-500 to-gray-600",
        },
        {
          id: "general",
          name: "General Admission",
          price: "$30",
          benefits: ["General Access"],
          available: false,
          color: "from-gray-600 to-gray-700",
        },
      ],
      ticketLink: "/tickets/gorilla-warfare-iii",
      featuredFighters: ["Emmanuel Kagame", "Grace Uwase", "Claude Habimana"],
      mainEvent: {
        fighter1: {
          name: "Emmanuel 'Silverback' Kagame",
          record: "12-0-0 (10 KOs)",
          country: "Rwanda",
          height: "6'3\"",
          reach: '78"',
          stance: "Orthodox",
          image: "https://i.postimg.cc/268gB9Nn/valentin3.jpg",
          bio: "Undisputed African Heavyweight Champion. 12-0 with 10 KOs.",
        },
        fighter2: {
          name: "Moses 'The Rock' Ndlovu",
          record: "16-0-0 (14 KOs)",
          country: "Zimbabwe",
          height: "6'4\"",
          reach: '80"',
          stance: "Orthodox",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
          bio: "Undefeated Zimbabwean champion. 87% KO rate.",
        },
        title: "Unified African Heavyweight Championship",
        rounds: 12,
        weightLimit: "200 lbs",
      },
      coMainEvent: {
        fighter1: {
          name: "Grace 'Iron Fist' Uwase",
          record: "10-0-0 (8 KOs)",
          country: "Rwanda",
        },
        fighter2: {
          name: "Zainab 'The Queen' Abdi",
          record: "13-1-0 (9 KOs)",
          country: "Nigeria",
        },
        title: "African Women's Middleweight Championship",
        rounds: 10,
      },
      undercard: [
        {
          name: "Claude Habimana",
          record: "15-2-0 (9 KOs)",
          vs: "Peter Waweru",
          record2: "11-3-0 (7 KOs)",
          weight: "Welterweight",
        },
        {
          name: "Kevin Nshimiyimana",
          record: "1-0-0 (1 KO)",
          vs: "Joseph Mwangi",
          record2: "2-1-0 (1 KO)",
          weight: "Lightweight",
        },
      ],
      schedule: [
        { time: "5:30 PM", event: "Doors Open", icon: Clock },
        { time: "6:30 PM", event: "First Bout", icon: Activity },
        { time: "8:00 PM", event: "Co-Main Event", icon: Trophy },
        { time: "9:30 PM", event: "Main Event", icon: Crown },
      ],
      amenities: [
        "VIP Parking",
        "Food Court",
        "Merchandise Store",
        "First Aid",
        "Security",
        "VIP Lounge",
      ],
      broadcast: {
        channels: ["Silverback TV", "SuperSport", "ESPN Africa"],
        streaming: "Silverback Promotions YouTube",
      },
    },
  ];

  // Event Card Component
  const EventCard = ({ event, index }) => {
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
      >
        <div className="relative h-72 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute top-4 right-4">
            <span
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                event.status === "on-sale"
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                  : "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
              }`}
            >
              {event.status === "on-sale" ? "Tickets On Sale" : "Coming Soon"}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="mb-2">
              <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {event.title}
            </h3>
            <p className="text-white/60 text-sm">{event.subtitle}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>{event.venue}</span>
          </div>

          <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/40 text-xs mb-3 flex items-center gap-2">
              <Trophy className="w-3 h-3 text-yellow-500" />
              <span className="uppercase tracking-wider">Main Event</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>{event.mainEvent.title}</span>
            </p>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <p className="text-white font-bold text-base">
                  {event.mainEvent.fighter1.name.split(" ")[0]}
                </p>
                <p className="text-white/40 text-xs">
                  {event.mainEvent.fighter1.record}
                </p>
              </div>
              <div className="text-white/40 text-sm font-bold px-4">VS</div>
              <div className="text-center flex-1">
                <p className="text-white font-bold text-base">
                  {event.mainEvent.fighter2.name.split(" ")[0]}
                </p>
                <p className="text-white/40 text-xs">
                  {event.mainEvent.fighter2.record}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/40 text-xs">Starting from</p>
              <p className="text-white font-bold text-2xl">
                {event.ticketTiers[event.ticketTiers.length - 1].price}
              </p>
            </div>
            <button
              onClick={() => setSelectedEvent(event)}
              className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-white/90 transition-all duration-300 flex items-center gap-2 group/btn shadow-lg shadow-white/10"
            >
              Explore More
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  // Premium Full-Screen Event Modal
  const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Prevent body scroll when modal is open
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }, []);

    const selectedTier =
      event.ticketTiers.find((t) => t.id === selectedTicketTier) ||
      event.ticketTiers[0];

    const modalTabs = [
      { id: "overview", label: "Overview", icon: Info },
      { id: "fight-card", label: "Fight Card", icon: Trophy },
      { id: "tickets", label: "Tickets", icon: Ticket },
      { id: "venue", label: "Venue", icon: MapPin },
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/98 z-[20000] overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, type: "spring", damping: 25 }}
          className="relative min-h-screen"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated Background with Particles Effect */}
          <div className="fixed inset-0 -z-10">
            <img
              src={event.backgroundImage || event.image}
              alt={event.title}
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{ y: [null, -100], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 3 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                  style={{ left: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </div>

          {/* Premium Header Bar */}
          <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">
                      Silverback Promotions
                    </p>
                    <p className="text-white font-bold text-sm">
                      Premium Event Experience
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Section with 3D Effect */}
          <div className="relative">
            <div className="h-[70vh] relative overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-12">
                <div className="container mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center gap-3 mb-4"
                  >
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg ${
                        event.status === "on-sale"
                          ? "bg-green-500 text-white shadow-green-500/30 animate-pulse"
                          : "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                      }`}
                    >
                      {event.status === "on-sale"
                        ? "✓ Tickets On Sale"
                        : "⌛ Coming Soon"}
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
                      🏆 Featured Event
                    </span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight leading-tight"
                  >
                    {event.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/80 text-xl md:text-2xl max-w-3xl"
                  >
                    {event.tagline}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 py-12">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
              {modalTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveModalTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeModalTab === tab.id
                      ? "bg-white text-black shadow-lg"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {/* Overview Tab */}
              {activeModalTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-3 gap-8"
                >
                  <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                          <Sparkle className="w-5 h-5 text-yellow-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">
                          About the Event
                        </h2>
                      </div>
                      <p className="text-white/70 leading-relaxed text-lg">
                        {event.description}
                      </p>
                    </div>

                    {/* Schedule */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                          <Clock className="w-5 h-5 text-blue-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">
                          Event Schedule
                        </h2>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {event.schedule.map((item, idx) => (
                          <div
                            key={idx}
                            className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10"
                          >
                            <p className="text-yellow-500 font-bold text-xl">
                              {item.time}
                            </p>
                            <p className="text-white/60 text-sm mt-1">
                              {item.event}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                          <Shield className="w-5 h-5 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">
                          Venue Amenities
                        </h2>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {event.amenities.map((amenity, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-3 bg-white/5 rounded-lg"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-white/60 text-sm">
                              {amenity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar - Quick Info */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 sticky top-24">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          Event Date
                        </h3>
                        <p className="text-yellow-500 font-bold text-lg mt-1">
                          {formattedDate}
                        </p>
                        <p className="text-white/60">{event.time}</p>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3 text-white/70">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm">
                            Main Event: {event.mainEvent.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <Globe className="w-4 h-4" />
                          <span className="text-sm">
                            Live on {event.broadcast.channels.join(", ")}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveModalTab("tickets")}
                        className="w-full mt-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl font-bold text-white hover:scale-105 transition-transform duration-300"
                      >
                        Get Tickets →
                      </button>
                    </div>

                    {/* Broadcast */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="text-white font-bold text-lg mb-3">
                        Watch Live
                      </h3>
                      <div className="space-y-2">
                        <p className="text-white/60 text-sm">
                          TV: {event.broadcast.channels.join(", ")}
                        </p>
                        <p className="text-white/60 text-sm">
                          Streaming: {event.broadcast.streaming}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Fight Card Tab */}
              {activeModalTab === "fight-card" && (
                <motion.div
                  key="fight-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Main Event */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl p-8 border border-yellow-500/20">
                    <div className="flex items-center gap-3 mb-6">
                      <Crown className="w-6 h-6 text-yellow-500" />
                      <span className="text-yellow-500 font-bold text-xl">
                        MAIN EVENT
                      </span>
                      <span className="text-white/40 text-sm ml-auto">
                        {event.mainEvent.rounds} Rounds •{" "}
                        {event.mainEvent.weightLimit}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="text-center group">
                        <div className="relative w-40 h-40 mx-auto mb-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellow-500/50 group-hover:border-yellow-500 transition-all">
                            <img
                              src={event.mainEvent.fighter1.image}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {event.mainEvent.fighter1.name}
                        </h3>
                        <p className="text-yellow-500 text-sm mb-2">
                          {event.mainEvent.fighter1.record}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-white/50 text-xs">
                          <span className="px-2 py-1 bg-white/10 rounded-lg">
                            📍 {event.mainEvent.fighter1.country}
                          </span>
                          <span className="px-2 py-1 bg-white/10 rounded-lg">
                            📏 {event.mainEvent.fighter1.height}
                          </span>
                          <span className="px-2 py-1 bg-white/10 rounded-lg">
                            🥊 {event.mainEvent.fighter1.stance}
                          </span>
                        </div>
                        <p className="text-white/40 text-sm mt-3 max-w-xs mx-auto">
                          {event.mainEvent.fighter1.bio}
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <div className="text-7xl font-black text-white/20 mb-4">
                          VS
                        </div>
                        <div className="text-center px-6 py-3 bg-white/10 rounded-xl">
                          <p className="text-yellow-500 font-bold">
                            {event.mainEvent.title}
                          </p>
                        </div>
                      </div>

                      <div className="text-center group">
                        <div className="relative w-40 h-40 mx-auto mb-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellow-500/50 group-hover:border-yellow-500 transition-all">
                            <img
                              src={event.mainEvent.fighter2.image}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {event.mainEvent.fighter2.name}
                        </h3>
                        <p className="text-yellow-500 text-sm mb-2">
                          {event.mainEvent.fighter2.record}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-white/50 text-xs">
                          <span className="px-2 py-1 bg-white/10 rounded-lg">
                            📍 {event.mainEvent.fighter2.country}
                          </span>
                          <span className="px-2 py-1 bg-white/10 rounded-lg">
                            📏 {event.mainEvent.fighter2.height}
                          </span>
                          <span className="px-2 py-1 bg-white/10 rounded-lg">
                            🥊 {event.mainEvent.fighter2.stance}
                          </span>
                        </div>
                        <p className="text-white/40 text-sm mt-3 max-w-xs mx-auto">
                          {event.mainEvent.fighter2.bio}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Co-Main Event */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-white/60" />
                      <span className="text-white font-bold text-lg">
                        Co-Main Event
                      </span>
                      <span className="text-white/40 text-sm ml-auto">
                        {event.coMainEvent.rounds} Rounds
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <p className="text-white font-bold text-xl">
                          {event.coMainEvent.fighter1.name}
                        </p>
                        <p className="text-white/40">
                          {event.coMainEvent.fighter1.record}
                        </p>
                      </div>
                      <div className="text-white/40 text-2xl font-bold px-8">
                        VS
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-white font-bold text-xl">
                          {event.coMainEvent.fighter2.name}
                        </p>
                        <p className="text-white/40">
                          {event.coMainEvent.fighter2.record}
                        </p>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <p className="text-white/50 text-sm">
                        {event.coMainEvent.title}
                      </p>
                    </div>
                  </div>

                  {/* Undercard */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <Activity className="w-5 h-5 text-white/60" />
                      <span className="text-white font-bold text-lg">
                        Undercard Fights
                      </span>
                    </div>
                    <div className="space-y-3">
                      {event.undercard.map((fight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                        >
                          <div className="flex-1">
                            <p className="text-white font-semibold">
                              {fight.name}
                            </p>
                            <p className="text-white/30 text-xs">
                              {fight.record}
                            </p>
                          </div>
                          <div className="text-white/40 text-sm font-bold px-4">
                            VS
                          </div>
                          <div className="flex-1 text-right">
                            <p className="text-white font-semibold">
                              {fight.vs}
                            </p>
                            <p className="text-white/30 text-xs">
                              {fight.record2}
                            </p>
                          </div>
                          <div className="ml-3">
                            <span className="px-2 py-1 bg-white/10 rounded-md text-white/40 text-xs">
                              {fight.weight}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tickets Tab */}
              {activeModalTab === "tickets" && (
                <motion.div
                  key="tickets"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-8"
                >
                  {/* Ticket Selection */}
                  <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Ticket className="w-6 h-6 text-yellow-500" />
                        Select Your Ticket
                      </h2>
                      <div className="space-y-3">
                        {event.ticketTiers.map((tier) => (
                          <button
                            key={tier.id}
                            onClick={() => setSelectedTicketTier(tier.id)}
                            disabled={!tier.available}
                            className={`w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 ${
                              selectedTicketTier === tier.id
                                ? `bg-gradient-to-r ${tier.color} text-white shadow-lg`
                                : "bg-white/5 border border-white/10 hover:bg-white/10"
                            } ${!tier.available && "opacity-50 cursor-not-allowed"}`}
                          >
                            <div className="text-left">
                              <p
                                className={`font-bold text-lg ${selectedTicketTier === tier.id ? "text-white" : "text-white"}`}
                              >
                                {tier.name}
                              </p>
                              <p
                                className={`text-sm ${selectedTicketTier === tier.id ? "text-white/80" : "text-white/40"}`}
                              >
                                {tier.benefits[0]}
                              </p>
                            </div>
                            <div className="text-right">
                              <p
                                className={`font-bold text-2xl ${selectedTicketTier === tier.id ? "text-white" : "text-white"}`}
                              >
                                {tier.price}
                              </p>
                              {!tier.available && (
                                <p className="text-white/30 text-xs">
                                  Sold Out
                                </p>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="text-white font-bold text-lg mb-3">
                        Your Benefits
                      </h3>
                      <div className="space-y-2">
                        {selectedTier.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-white/60"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Checkout */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 sticky top-24">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <CreditCard className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Complete Your Purchase
                      </h3>
                      <p className="text-white/50 mt-1">
                        Secure & Instant Delivery
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-white/60">Ticket Type</span>
                        <span className="text-white font-bold">
                          {selectedTier.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-white/60">Price</span>
                        <span className="text-white font-bold">
                          {selectedTier.price}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-white/60">Quantity</span>
                        <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-white font-bold text-lg">
                          Total
                        </span>
                        <span className="text-white font-bold text-2xl">
                          {selectedTier.price}
                        </span>
                      </div>
                    </div>

                    {event.status === "on-sale" ? (
                      <Link to={event.ticketLink}>
                        <button className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-bold text-white text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                          <Ticket className="w-5 h-5" />
                          Proceed to Checkout
                        </button>
                      </Link>
                    ) : (
                      <button className="w-full py-4 bg-white/10 rounded-xl font-bold text-white/50 cursor-not-allowed flex items-center justify-center gap-2">
                        <Bell className="w-5 h-5" />
                        Tickets Coming Soon
                      </button>
                    )}

                    <div className="mt-4 flex items-center justify-center gap-2 text-white/30 text-xs">
                      <Shield className="w-3 h-3" />
                      <span>Secure Checkout</span>
                      <span>•</span>
                      <span>Instant Delivery</span>
                      <span>•</span>
                      <span>Best Price Guarantee</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Venue Tab */}
              {activeModalTab === "venue" && (
                <motion.div
                  key="venue"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-8"
                >
                  <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-yellow-500" />
                        Venue Information
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <p className="text-white/50 text-sm">Venue Name</p>
                          <p className="text-white font-bold text-xl">
                            {event.venue}
                          </p>
                        </div>
                        <div>
                          <p className="text-white/50 text-sm">Address</p>
                          <p className="text-white">{event.address}</p>
                        </div>
                        <div>
                          <p className="text-white/50 text-sm">Capacity</p>
                          <p className="text-white">10,000+ seats</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="text-white font-bold text-lg mb-3">
                        Getting There
                      </h3>
                      <div className="space-y-2 text-white/60">
                        <p>🚗 Ample parking available on-site</p>
                        <p>
                          🚌 Public transport: Bus routes 101, 102 stop nearby
                        </p>
                        <p>
                          🚕 Taxi and ride-sharing drop-off zone at main
                          entrance
                        </p>
                        <p>♿ Wheelchair accessible venue</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="text-white font-bold text-lg mb-3">
                        Venue Rules
                      </h3>
                      <div className="space-y-2 text-white/60">
                        <p>✓ No outside food or beverages</p>
                        <p>✓ Professional cameras prohibited</p>
                        <p>✓ No large bags or backpacks</p>
                        <p>✓ Smoking only in designated areas</p>
                        <p>
                          ✓ Children under 12 must be accompanied by an adult
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl p-6 border border-blue-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <HelpCircle className="w-5 h-5 text-blue-500" />
                        <h3 className="text-white font-bold text-lg">
                          Need Assistance?
                        </h3>
                      </div>
                      <p className="text-white/60 text-sm mb-3">
                        For venue-related inquiries, please contact our support
                        team
                      </p>
                      <button className="text-blue-500 font-semibold text-sm flex items-center gap-1">
                        Contact Support <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-white/10 text-center">
              <p className="text-white/30 text-sm">
                © 2024 Silverback Promotions. All rights reserved. Event details
                subject to change.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                MARK YOUR CALENDAR
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
              Upcoming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Events
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Experience the thrill of world-class boxing. Get your tickets now
              for the most anticipated fights of the year.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
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
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-white/10 to-white/5 rounded-full flex items-center justify-center border border-white/20">
              <Bell className="w-12 h-12 text-white/60" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Never Miss a Fight
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about upcoming events, ticket releases,
              and exclusive pre-sale offers before anyone else.
            </p>
            {!notifySubmitted ? (
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors text-lg"
                />
                <button
                  onClick={() => {
                    if (notifyEmail) {
                      setNotifySubmitted(true);
                      setTimeout(() => setNotifySubmitted(false), 3000);
                    }
                  }}
                  className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  Notify Me
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 text-green-400 bg-green-500/10 rounded-xl p-4 max-w-md mx-auto"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">
                  Thanks! We'll notify you about upcoming events.
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default UpcomingEvents;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Trophy,
  Award,
  Star,
  ChevronRight,
  X,
  Users,
  Activity,
  Crown,
  Medal,
  Eye,
  Heart,
  MessageCircle,
  CheckCircle,
  Video,
  Image as ImageIcon,
  TrendingUp,
  ThumbsUp,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Search,
  Filter,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const PastEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterYear, setFilterYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Past Events Data
  const pastEvents = [
    {
      id: 1,
      title: "GORILLA WARFARE II",
      subtitle: "The Rematch",
      date: "2024-03-15",
      venue: "Kigali Arena",
      address: "KG 17 Ave, Kigali, Rwanda",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&auto=format&fit=crop",
      attendance: 5200,
      soldOut: true,
      mainEvent: {
        winner: "Emmanuel 'Silverback' Kagame",
        loser: "Moses 'The Rock' Ndlovu",
        result: "KO (Round 8, 2:34)",
        title: "Unified African Heavyweight Championship",
        method: "Knockout",
        round: 8,
        time: "2:34",
      },
      coMainEvent: {
        winner: "Grace 'Iron Fist' Uwase",
        loser: "Zainab 'The Queen' Abdi",
        result: "UD (Unanimous Decision)",
        title: "African Women's Middleweight Championship",
        method: "Unanimous Decision",
        rounds: 10,
      },
      results: [
        {
          winner: "Jean 'The Panther' Niyomugabo",
          loser: "David Nsengimana",
          result: "KO (Round 3, 1:45)",
          weight: "Light Heavyweight",
        },
        {
          winner: "Claude 'The Doctor' Habimana",
          loser: "Peter Waweru",
          result: "UD (Unanimous Decision)",
          weight: "Welterweight",
        },
        {
          winner: "Kevin Nshimiyimana",
          loser: "Joseph Mwangi",
          result: "TKO (Round 2, 2:15)",
          weight: "Lightweight",
        },
        {
          winner: "Aline Uwimana",
          loser: "Grace Umuhoza",
          result: "SD (Split Decision)",
          weight: "Featherweight",
        },
      ],
      fightOfTheNight: "Jean Niyomugabo vs David Nsengimana",
      performanceOfTheNight: "Emmanuel Kagame",
      highlights: "https://youtube.com/watch?v=example1",
      photoGallery: "/gallery?event=gorilla-warfare-ii",
      stats: {
        totalFights: 10,
        knockouts: 4,
        decisions: 6,
        avgFightTime: "22:30",
      },
    },
    {
      id: 2,
      title: "SILVERBACK SHOWDOWN 2023",
      subtitle: "The Inaugural Event",
      date: "2023-11-20",
      venue: "BK Arena",
      address: "Kimihurura, Kigali, Rwanda",
      image:
        "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&auto=format&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1920&auto=format&fit=crop",
      attendance: 4800,
      soldOut: true,
      mainEvent: {
        winner: "Emmanuel 'Silverback' Kagame",
        loser: "John 'The Beast' Okoth",
        result: "TKO (Round 10, 1:12)",
        title: "African Heavyweight Championship",
        method: "Technical Knockout",
        round: 10,
        time: "1:12",
      },
      coMainEvent: {
        winner: "Grace 'Iron Fist' Uwase",
        loser: "Sarah 'The Storm' Mukamana",
        result: "KO (Round 6, 2:58)",
        title: "Women's African Middleweight Championship",
        method: "Knockout",
        round: 6,
        time: "2:58",
      },
      results: [
        {
          winner: "Jean 'The Panther' Niyomugabo",
          loser: "James Omondi",
          result: "KO (Round 1, 2:30)",
          weight: "Light Heavyweight",
        },
        {
          winner: "Claude 'The Doctor' Habimana",
          loser: "Eric Mugisha",
          result: "UD (Unanimous Decision)",
          weight: "Welterweight",
        },
        {
          winner: "Aline Uwimana",
          loser: "Fatuma Hassan",
          result: "SD (Split Decision)",
          weight: "Featherweight",
        },
        {
          winner: "Kevin Nshimiyimana",
          loser: "Jean Paul Hitimana",
          result: "TKO (Round 3, 1:45)",
          weight: "Lightweight",
        },
        {
          winner: "Diane Iradukunda",
          loser: "Rehema Nassoro",
          result: "UD (Unanimous Decision)",
          weight: "Bantamweight",
        },
      ],
      fightOfTheNight: "Grace Uwase vs Sarah Mukamana",
      performanceOfTheNight: "Jean Niyomugabo",
      highlights: "https://youtube.com/watch?v=example2",
      photoGallery: "/gallery?event=silverback-showdown-2023",
      stats: {
        totalFights: 12,
        knockouts: 6,
        decisions: 6,
        avgFightTime: "24:15",
      },
    },
    {
      id: 3,
      title: "RUMBLE IN RWANDA 2023",
      subtitle: "East Africa Rising",
      date: "2023-08-10",
      venue: "Camp Kigali",
      address: "KN 5 Rd, Kigali, Rwanda",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&auto=format&fit=crop",
      attendance: 3500,
      soldOut: true,
      mainEvent: {
        winner: "Jean 'The Panther' Niyomugabo",
        loser: "Michael 'The Lion' Otieno",
        result: "KO (Round 4, 1:58)",
        title: "East African Light Heavyweight Championship",
        method: "Knockout",
        round: 4,
        time: "1:58",
      },
      coMainEvent: {
        winner: "Aline Uwimana",
        loser: "Fatuma Hassan",
        result: "UD (Unanimous Decision)",
        title: "Women's Featherweight Championship",
        method: "Unanimous Decision",
        rounds: 8,
      },
      results: [
        {
          winner: "Claude 'The Doctor' Habimana",
          loser: "James Omondi",
          result: "TKO (Round 5, 2:10)",
          weight: "Welterweight",
        },
        {
          winner: "Eric Mugisha",
          loser: "Joseph Mwangi",
          result: "UD (Unanimous Decision)",
          weight: "Middleweight",
        },
        {
          winner: "Diane Iradukunda",
          loser: "Grace Umuhoza",
          result: "SD (Split Decision)",
          weight: "Bantamweight",
        },
      ],
      fightOfTheNight: "Jean Niyomugabo vs Michael Otieno",
      performanceOfTheNight: "Claude Habimana",
      highlights: "https://youtube.com/watch?v=example3",
      photoGallery: "/gallery?event=rumble-in-rwanda-2023",
      stats: {
        totalFights: 8,
        knockouts: 3,
        decisions: 5,
        avgFightTime: "20:45",
      },
    },
    {
      id: 4,
      title: "KIGALI BOXING CLASSIC",
      subtitle: "International Invitational",
      date: "2023-05-25",
      venue: "Kigali Arena",
      address: "KG 17 Ave, Kigali, Rwanda",
      image:
        "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&auto=format&fit=crop",
      backgroundImage:
        "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1920&auto=format&fit=crop",
      attendance: 4200,
      soldOut: true,
      mainEvent: {
        winner: "Emmanuel 'Silverback' Kagame",
        loser: "Thomas 'The Tank' Mbeki",
        result: "KO (Round 2, 1:45)",
        title: "International Heavyweight Showdown",
        method: "Knockout",
        round: 2,
        time: "1:45",
      },
      coMainEvent: {
        winner: "Grace 'Iron Fist' Uwase",
        loser: "Maria 'La Reina' Santos",
        result: "TKO (Round 4, 2:30)",
        title: "Women's International Bout",
        method: "Technical Knockout",
        round: 4,
        time: "2:30",
      },
      results: [
        {
          winner: "Jean 'The Panther' Niyomugabo",
          loser: "Robert Kipchoge",
          result: "UD (Unanimous Decision)",
          weight: "Light Heavyweight",
        },
        {
          winner: "Claude Habimana",
          loser: "John Waweru",
          result: "KO (Round 3, 2:15)",
          weight: "Welterweight",
        },
        {
          winner: "Kevin Nshimiyimana",
          loser: "Patrick Mugenzi",
          result: "TKO (Round 2, 1:30)",
          weight: "Lightweight",
        },
        {
          winner: "Aline Uwimana",
          loser: "Mercy Achieng",
          result: "UD (Unanimous Decision)",
          weight: "Featherweight",
        },
      ],
      fightOfTheNight: "Claude Habimana vs John Waweru",
      performanceOfTheNight: "Emmanuel Kagame",
      highlights: "https://youtube.com/watch?v=example4",
      photoGallery: "/gallery?event=kigali-boxing-classic",
      stats: {
        totalFights: 9,
        knockouts: 5,
        decisions: 4,
        avgFightTime: "21:30",
      },
    },
  ];

  // Filter events by year
  const filteredEvents = pastEvents.filter((event) => {
    const eventYear = new Date(event.date).getFullYear().toString();
    const matchesYear = filterYear === "all" || eventYear === filterYear;
    const matchesSearch =
      searchQuery === "" ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.mainEvent.winner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  const years = [
    "all",
    ...new Set(
      pastEvents.map((e) => new Date(e.date).getFullYear().toString()),
    ),
  ];

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
        whileHover={{ y: -5 }}
        className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer"
        onClick={() => setSelectedEvent(event)}
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Sold Out Badge */}
          {event.soldOut && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-xs font-bold text-white shadow-lg">
                SOLD OUT
              </span>
            </div>
          )}

          {/* Attendance Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center gap-1">
              <Users className="w-3 h-3" />
              {event.attendance.toLocaleString()} Attendees
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2 text-white/60 text-xs mb-2">
              <Calendar className="w-3 h-3" />
              <span>{formattedDate}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <MapPin className="w-3 h-3" />
              <span>{event.venue}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
            <p className="text-white/50 text-sm">{event.subtitle}</p>
          </div>
        </div>

        <div className="p-5">
          {/* Main Event Result */}
          <div className="mb-4 p-3 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/40 text-xs mb-2 flex items-center gap-1">
              <Trophy className="w-3 h-3 text-yellow-500" />
              MAIN EVENT RESULT
            </p>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-green-400 font-bold text-sm">
                  {event.mainEvent.winner.split(" ")[0]}
                </p>
                <p className="text-white/30 text-xs">Winner</p>
              </div>
              <div className="text-white/40 text-xs px-3">def.</div>
              <div className="flex-1 text-right">
                <p className="text-white/70 font-semibold text-sm">
                  {event.mainEvent.loser.split(" ")[0]}
                </p>
                <p className="text-white/30 text-xs">Loser</p>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-white/50 text-xs">
                {event.mainEvent.result}
              </span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-between text-center">
            <div className="flex-1">
              <p className="text-white font-bold text-lg">
                {event.stats.totalFights}
              </p>
              <p className="text-white/30 text-xs">Total Fights</p>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-lg">
                {event.stats.knockouts}
              </p>
              <p className="text-white/30 text-xs">KOs</p>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-lg">
                {event.stats.decisions}
              </p>
              <p className="text-white/30 text-xs">Decisions</p>
            </div>
          </div>

          <button className="w-full mt-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2">
            View Full Results
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    );
  };

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
    React.useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }, []);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/98 backdrop-blur-xl z-[20000] overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, type: "spring", damping: 30 }}
          className="relative min-h-screen"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background Image */}
          <div className="fixed inset-0 -z-10">
            <img
              src={event.backgroundImage || event.image}
              alt={event.title}
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/20 group"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="container mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden mb-12">
              <div className="h-[50vh] relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-2 bg-green-500 rounded-full text-sm font-bold text-white">
                      COMPLETED
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                      {formattedDate}
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                    {event.title}
                  </h1>
                  <p className="text-white/80 text-xl">{event.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Results */}
              <div className="lg:col-span-2 space-y-8">
                {/* Event Summary */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    Event Summary
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-white">
                        {event.attendance.toLocaleString()}
                      </p>
                      <p className="text-white/40 text-sm">Attendance</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-white">
                        {event.stats.totalFights}
                      </p>
                      <p className="text-white/40 text-sm">Total Fights</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-white">
                        {event.stats.knockouts}
                      </p>
                      <p className="text-white/40 text-sm">Knockouts</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-white">
                        {event.stats.decisions}
                      </p>
                      <p className="text-white/40 text-sm">Decisions</p>
                    </div>
                  </div>
                  {event.soldOut && (
                    <div className="flex items-center justify-center gap-2 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span>SOLD OUT - Record attendance!</span>
                    </div>
                  )}
                </div>

                {/* Main Event Result */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-transparent rounded-2xl p-8 border border-yellow-500/20">
                  <div className="flex items-center gap-2 mb-6">
                    <Crown className="w-6 h-6 text-yellow-500" />
                    <span className="text-yellow-500 font-bold text-xl">
                      MAIN EVENT RESULT
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="text-center">
                      <div className="text-green-400 text-3xl font-bold mb-2">
                        WINNER
                      </div>
                      <p className="text-white text-xl font-bold">
                        {event.mainEvent.winner}
                      </p>
                      <p className="text-white/50 text-sm">
                        {event.mainEvent.title}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-black text-white/30 mb-2">
                        VS
                      </div>
                      <div className="bg-yellow-500/20 rounded-lg p-3">
                        <p className="text-yellow-400 font-bold">
                          {event.mainEvent.result}
                        </p>
                        <p className="text-white/40 text-xs">
                          Method: {event.mainEvent.method}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-400 text-3xl font-bold mb-2">
                        LOSER
                      </div>
                      <p className="text-white text-xl font-bold">
                        {event.mainEvent.loser}
                      </p>
                      <p className="text-white/50 text-sm">Runner Up</p>
                    </div>
                  </div>
                </div>

                {/* Co-Main Event */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-5 h-5 text-white/60" />
                    <span className="text-white/80 font-bold text-lg">
                      CO-MAIN EVENT RESULT
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <p className="text-green-400 font-bold text-lg">
                        {event.coMainEvent.winner}
                      </p>
                      <p className="text-white/40 text-sm">Winner</p>
                    </div>
                    <div className="text-white/40 text-xl font-bold px-8">
                      def.
                    </div>
                    <div className="text-center flex-1">
                      <p className="text-white/70 font-bold text-lg">
                        {event.coMainEvent.loser}
                      </p>
                      <p className="text-white/40 text-sm">Loser</p>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-yellow-500 font-semibold">
                      {event.coMainEvent.result}
                    </p>
                    <p className="text-white/40 text-sm">
                      {event.coMainEvent.title}
                    </p>
                  </div>
                </div>

                {/* Full Results Table */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-2 mb-6">
                    <Trophy className="w-5 h-5 text-white/60" />
                    <span className="text-white/80 font-bold text-lg">
                      FULL FIGHT RESULTS
                    </span>
                  </div>
                  <div className="space-y-3">
                    {event.results.map((fight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                      >
                        <div className="flex-1">
                          <p className="text-green-400 font-semibold">
                            {fight.winner}
                          </p>
                          <p className="text-white/30 text-xs">
                            {fight.weight}
                          </p>
                        </div>
                        <div className="text-white/40 text-sm px-4">def.</div>
                        <div className="flex-1 text-right">
                          <p className="text-white/70 font-semibold">
                            {fight.loser}
                          </p>
                        </div>
                        <div className="ml-4">
                          <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-400 text-xs">
                            {fight.result}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bonuses */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    Performance Bonuses
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <p className="text-yellow-500 font-bold mb-1">
                        Fight of the Night
                      </p>
                      <p className="text-white font-semibold">
                        {event.fightOfTheNight}
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <p className="text-yellow-500 font-bold mb-1">
                        Performance of the Night
                      </p>
                      <p className="text-white font-semibold">
                        {event.performanceOfTheNight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Media & Info */}
              <div className="space-y-6">
                {/* Watch Highlights */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 sticky top-24">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <Video className="w-5 h-5 text-red-500" />
                    Watch Highlights
                  </h3>
                  <a
                    href={event.highlights}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative rounded-xl overflow-hidden mb-4 group/video">
                      <img
                        src={event.image}
                        alt="Highlights thumbnail"
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover/video:bg-black/60 transition-all">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform">
                          <PlayIcon className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                  <Link to={event.photoGallery}>
                    <button className="w-full mt-2 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold transition-colors flex items-center justify-center gap-2">
                      <ImageIcon className="w-4 h-4" />
                      View Photo Gallery
                    </button>
                  </Link>
                </div>

                {/* Event Details */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-white/60" />
                    Event Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-white/40 mt-0.5" />
                      <div>
                        <p className="text-white/60 text-sm">Date</p>
                        <p className="text-white font-semibold">
                          {formattedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-white/40 mt-0.5" />
                      <div>
                        <p className="text-white/60 text-sm">Venue</p>
                        <p className="text-white font-semibold">
                          {event.venue}
                        </p>
                        <p className="text-white/30 text-xs">{event.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-4 h-4 text-white/40 mt-0.5" />
                      <div>
                        <p className="text-white/60 text-sm">Attendance</p>
                        <p className="text-white font-semibold">
                          {event.attendance.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-bold text-lg mb-4 text-center">
                    Share This Event
                  </h3>
                  <div className="flex gap-4 justify-center">
                    <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300">
                      <Facebook className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-sky-500 transition-all duration-300">
                      <Twitter className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-center text-white/30 text-sm py-8 border-t border-white/10">
              <p>© 2024 Silverback Promotions. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Play Icon Component
  const PlayIcon = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-black flex items-center pt-20 overflow-hidden">
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
              <Trophy className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                HISTORY BOOK
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
              Past{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Events
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Relive the greatest moments in Silverback Promotions history. From
              knockout victories to championship coronations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-white/40" />
              <span className="text-white/60 text-sm">Filter by year:</span>
              <div className="flex gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setFilterYear(year)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      filterYear === year
                        ? "bg-white text-black"
                        : "bg-white/10 text-white/60 hover:bg-white/20"
                    }`}
                  >
                    {year === "all" ? "All" : year}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search events or fighters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-8 bg-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">
                {pastEvents.length}
              </div>
              <div className="text-white/40 text-sm">Total Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                {pastEvents.reduce((sum, e) => sum + e.stats.totalFights, 0)}
              </div>
              <div className="text-white/40 text-sm">Total Fights</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                {pastEvents.reduce((sum, e) => sum + e.stats.knockouts, 0)}
              </div>
              <div className="text-white/40 text-sm">Total KOs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                {pastEvents
                  .reduce((sum, e) => sum + e.attendance, 0)
                  .toLocaleString()}
              </div>
              <div className="text-white/40 text-sm">Total Attendance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-white/40" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                No events found
              </h3>
              <p className="text-white/60">
                Try adjusting your search or filter
              </p>
            </div>
          )}
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

export default PastEvents;

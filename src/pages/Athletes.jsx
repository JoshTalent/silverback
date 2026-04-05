import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Trophy,
  Calendar,
  MapPin,
  Activity,
  Award,
  Star,
  TrendingUp,
  Shield,
  Heart,
  Target,
  Zap,
  Crown,
  Medal,
  Clock,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Facebook,
  ChevronRight,
  X,
  Flag,
  BarChart3,
  Briefcase,
  Weight,
  Ruler,
  Scale,
  HeartPulse,
  DollarSign,
  Globe,
  Verified,
  Sparkles,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Athletes = () => {
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [activeTab, setActiveTab] = useState("professional");

  // Professional Athletes Data - Full Detailed Profiles
  const professionalAthletes = [
    {
      id: 1,
      name: "JERRY 'Simba' KABANGO",
      nickname: "SIMBA",
      weightClass: "WALTER WEIGHT",
      record: { wins: 12, losses: 0, draws: 0, kos: 10, nc: 0 },
      height: "6'3\" (191 cm)",
      reach: '78" (198 cm)',
      stance: "Orthodox",
      age: 26,
      birthDate: "March 15, 2000",
      nationality: "DR CONGO",
      birthplace: "GOMA, DR CONGO",
      residence: "Kigali, Rwanda",
      image: "https://i.postimg.cc/W1N9ZYQY/Screenshot-2026-04-05-112132.png",
      bio: "Reigning African Walter weight Champion with an undefeated record. Known for devastating knockout power and relentless pressure. Started boxing at age 12 under Coach Ezikiel ISHIMWE and has dominated the heavyweight division since turning pro in 2018. Emmanuel is known for his iron chin and ability to finish fights in devastating fashion.",

      careerStats: {
        totalRounds: 48,
        roundsPerFight: 4.0,
        knockdowns: 14,
        knockdownsAgainst: 0,
        significantStrikesLanded: 487,
        significantStrikesAttempted: 785,
        strikingAccuracy: "62%",
        strikesLandedPerMin: 4.8,
        strikesAbsorbedPerMin: 2.1,
        takedownDefense: "85%",
        clinchControl: "78%",
      },

      titles: [
        {
          name: "African Heavyweight Champion",
          period: "2022-Present",
          defenses: 3,
        },
        {
          name: "WBA Africa Heavyweight Title",
          period: "2021-2022",
          defenses: 1,
        },
        {
          name: "East African Heavyweight Champion",
          period: "2019-2021",
          defenses: 2,
        },
      ],

      achievements: [
        "Undefeated Professional Record (12-0)",
        "10 Knockouts - 83% KO Rate",
        "KO of the Year 2023 vs. John Okoth",
        "Fighter of the Year 2022, 2023",
        "Fastest KO in Silverback History (23 seconds)",
        "3x Performance of the Night",
      ],

      fightHistory: [
        {
          opponent: "John Okoth",
          result: "Win",
          method: "KO (Punch)",
          round: 3,
          time: "1:23",
          date: "2023-12-10",
          event: "Silverback Showdown",
        },
        {
          opponent: "Michael Omondi",
          result: "Win",
          method: "TKO (Punches)",
          round: 2,
          time: "2:45",
          date: "2023-08-15",
          event: "Rumble in Rwanda",
        },
        {
          opponent: "David Nsengimana",
          result: "Win",
          method: "UD",
          round: 10,
          time: "10:00",
          date: "2023-04-20",
          event: "Gorilla Warfare",
        },
        {
          opponent: "James Mwangi",
          result: "Win",
          method: "KO (Hook)",
          round: 1,
          time: "0:23",
          date: "2023-01-25",
          event: "New Year Knockout",
        },
        {
          opponent: "Peter Onyango",
          result: "Win",
          method: "TKO (Corner Stoppage)",
          round: 4,
          time: "3:00",
          date: "2022-10-08",
          event: "Battle for Glory",
        },
        {
          opponent: "George Odhiambo",
          result: "Win",
          method: "KO (Overhand Right)",
          round: 2,
          time: "1:15",
          date: "2022-06-12",
          event: "African Supremacy",
        },
        {
          opponent: "Francis Kipchoge",
          result: "Win",
          method: "UD",
          round: 8,
          time: "10:00",
          date: "2022-02-18",
          event: "Rising Stars",
        },
        {
          opponent: "Samson Mbuvi",
          result: "Win",
          method: "TKO (Punches)",
          round: 5,
          time: "2:30",
          date: "2021-11-05",
          event: "Heavyweight Clash",
        },
        {
          opponent: "Joseph Njoroge",
          result: "Win",
          method: "KO (Uppercut)",
          round: 1,
          time: "1:45",
          date: "2021-08-22",
          event: "Pro Debut",
        },
      ],

      physical: {
        weight: "120 lbs (61 kg)",
        chest: "48 inches",
        bicep: "17 inches",
        fist: "12 inches",
      },

      team: {
        headCoach: "Coach sampson",
        assistantCoach: "Coach lee",
        manager: "Bashir NTWARI",
        cutman: "Jean Paul Mugisha",
        nutritionist: "Dr. Alice Uwimana",
      },

      social: {
        instagram: "@silverback_kagame",
        twitter: "@emmanuel_kagame",
        facebook: "Emmanuel Kagame",
      }
    }
  ];

  // Amateur Athletes Data - Simplified
  const amateurAthletes = [
    {
      id: 5,
      name: "Kevin Nshimiyimana",
      weightClass: "Lightweight",
      record: { wins: 12, losses: 3, draws: 0 },
      age: 20,
      nationality: "Rwandan",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      bio: "Promising young prospect. National Junior Champion 2023. Known for exceptional footwork and combinations.",
      achievements: [
        "National Junior Champion 2023",
        "East Africa Youth Silver Medalist",
      ],
      nextTournament: "National Championships - June 2024",
    }
  ];

  // Professional Athlete Modal Component
  const ProAthleteModal = ({ athlete, onClose }) => {
    const [activeInfoTab, setActiveInfoTab] = useState("overview");

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-md z-[10000] flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-black rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Section */}
          <div className="relative h-[500px]">
            <img
              src={athlete.image}
              alt={athlete.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

            {/* Badges */}
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/20">
                PROFESSIONAL ATHLETE
              </span>
              <span className="bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-yellow-400 border border-yellow-500/20">
                {athlete.record.wins}-{athlete.record.losses}-
                {athlete.record.draws}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Athlete Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <Verified className="w-6 h-6 text-blue-400" />
                <span className="text-white/80 text-sm">Verified Athlete</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-2">
                {athlete.name}
              </h2>
              <p className="text-white/60 text-xl mb-4">"{athlete.nickname}"</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-white">{athlete.weightClass}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flag className="w-5 h-5 text-white/60" />
                  <span className="text-white/80">{athlete.nationality}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-white/60" />
                  <span className="text-white/80">Age {athlete.age}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="border-b border-white/10 sticky top-0 bg-black z-10">
            <div className="flex gap-1 px-8 overflow-x-auto">
              {[
                "overview",
                "stats",
                "fight-history",
                "achievements",
                "team",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveInfoTab(tab)}
                  className={`px-6 py-4 font-semibold text-sm transition-all duration-300 ${
                    activeInfoTab === tab
                      ? "text-white border-b-2 border-white"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {tab
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {activeInfoTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid lg:grid-cols-3 gap-8"
                >
                  {/* Left - Bio */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
                        <User className="w-5 h-5 text-white/60" />
                        Biography
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {athlete.bio}
                      </p>
                    </div>

                    {/* Personal Details */}
                    <div>
                      <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
                        <HeartPulse className="w-5 h-5 text-white/60" />
                        Personal Details
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-white/40 text-sm">
                            Birth Date
                          </div>
                          <div className="text-white font-semibold">
                            {athlete.birthDate}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-white/40 text-sm">
                            Birthplace
                          </div>
                          <div className="text-white font-semibold">
                            {athlete.birthplace}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-white/40 text-sm">Residence</div>
                          <div className="text-white font-semibold">
                            {athlete.residence}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-white/40 text-sm">
                            Nationality
                          </div>
                          <div className="text-white font-semibold">
                            {athlete.nationality}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Quick Info */}
                  <div className="space-y-6">
                    {/* Social Links */}
                    <div className="bg-white/5 rounded-2xl p-6">
                      <h3 className="text-white font-bold mb-3">Connect</h3>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Instagram className="w-4 h-4 text-white" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Facebook className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>
                    {/* Physical Attributes */}
                    <div>
                      <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
                        <Weight className="w-5 h-5 text-white/60" />
                        Physical Attributes
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                          <div className="text-white/40 text-xs">Height</div>
                          <div className="text-white font-bold text-sm">
                            {athlete.height}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                          <div className="text-white/40 text-xs">Reach</div>
                          <div className="text-white font-bold text-sm">
                            {athlete.reach}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                          <div className="text-white/40 text-xs">Weight</div>
                          <div className="text-white font-bold text-sm">
                            {athlete.physical.weight}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                          <div className="text-white/40 text-xs">Stance</div>
                          <div className="text-white font-bold text-sm">
                            {athlete.stance}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeInfoTab === "stats" && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-white font-bold text-2xl mb-6">
                    Career Statistics
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-white/40 text-sm mb-1">
                        Total Rounds
                      </div>
                      <div className="text-white text-3xl font-bold">
                        {athlete.careerStats.totalRounds}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-white/40 text-sm mb-1">
                        Knockdowns (For/Against)
                      </div>
                      <div className="text-white text-3xl font-bold">
                        {athlete.careerStats.knockdowns} /{" "}
                        {athlete.careerStats.knockdownsAgainst}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-white/40 text-sm mb-1">
                        Striking Accuracy
                      </div>
                      <div className="text-white text-3xl font-bold">
                        {athlete.careerStats.strikingAccuracy}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-white/40 text-sm mb-1">
                        Strikes Landed/Min
                      </div>
                      <div className="text-white text-3xl font-bold">
                        {athlete.careerStats.strikesLandedPerMin}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-white/40 text-sm mb-1">
                        Strikes Absorbed/Min
                      </div>
                      <div className="text-white text-3xl font-bold">
                        {athlete.careerStats.strikesAbsorbedPerMin}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-white/40 text-sm mb-1">
                        Takedown Defense
                      </div>
                      <div className="text-white text-3xl font-bold">
                        {athlete.careerStats.takedownDefense}
                      </div>
                    </div>
                  </div>

                  {/* Significant Strikes Chart */}
                  <div className="bg-white/5 rounded-2xl p-6 mt-6">
                    <h4 className="text-white font-bold mb-4">
                      Significant Strikes
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white/60">Landed</span>
                          <span className="text-white">
                            {athlete.careerStats.significantStrikesLanded}
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{
                              width: `${Math.min(100, (athlete.careerStats.significantStrikesLanded / 1000) * 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white/60">Attempted</span>
                          <span className="text-white">
                            {athlete.careerStats.significantStrikesAttempted}
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-500 rounded-full"
                            style={{
                              width: `${Math.min(100, (athlete.careerStats.significantStrikesAttempted / 1800) * 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeInfoTab === "fight-history" && (
                <motion.div
                  key="fight-history"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="text-white font-bold text-2xl mb-6">
                    Fight History
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-white/10">
                        <tr className="text-left text-white/40 text-sm">
                          <th className="pb-3">Opponent</th>
                          <th className="pb-3">Result</th>
                          <th className="pb-3">Method</th>
                          <th className="pb-3">Round</th>
                          <th className="pb-3">Time</th>
                          <th className="pb-3">Date</th>
                          <th className="pb-3">Event</th>
                        </tr>
                      </thead>
                      <tbody>
                        {athlete.fightHistory.map((fight, idx) => (
                          <tr key={idx} className="border-b border-white/5">
                            <td className="py-3 text-white font-medium">
                              {fight.opponent}
                            </td>
                            <td className="py-3">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  fight.result === "Win"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {fight.result}
                              </span>
                            </td>
                            <td className="py-3 text-white/60 text-sm">
                              {fight.method}
                            </td>
                            <td className="py-3 text-white/60">
                              {fight.round}
                            </td>
                            <td className="py-3 text-white/60">{fight.time}</td>
                            <td className="py-3 text-white/60">{fight.date}</td>
                            <td className="py-3 text-white/60 text-sm">
                              {fight.event}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeInfoTab === "achievements" && (
                <motion.div
                  key="achievements"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {/* Titles */}
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
                      <Crown className="w-6 h-6 text-yellow-500" />
                      Championships & Titles
                    </h3>
                    <div className="grid gap-4">
                      {athlete.titles.map((title, idx) => (
                        <div key={idx} className="bg-white/5 rounded-2xl p-5">
                          <div className="flex justify-between items-center flex-wrap gap-2">
                            <div>
                              <h4 className="text-white font-bold text-lg">
                                {title.name}
                              </h4>
                              <p className="text-white/40 text-sm">
                                {title.period}
                              </p>
                            </div>
                            <div className="bg-white/10 px-3 py-1 rounded-full">
                              <span className="text-white/60 text-sm">
                                {title.defenses} Defenses
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-white/60" />
                      Career Highlights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {athlete.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
                        >
                          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                          <span className="text-white/80 text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeInfoTab === "team" && (
                <motion.div
                  key="team"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="text-white font-bold text-2xl mb-6">
                    Team & Management
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-2xl p-6">
                      <h4 className="text-white font-bold mb-4">
                        Coaching Staff
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-white/60">Head Coach</span>
                          <span className="text-white">
                            {athlete.team.headCoach}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Assistant Coach</span>
                          <span className="text-white">
                            {athlete.team.assistantCoach}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Cutman</span>
                          <span className="text-white">
                            {athlete.team.cutman}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <h4 className="text-white font-bold mb-4">Management</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-white/60">Manager</span>
                          <span className="text-white">
                            {athlete.team.manager}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Nutritionist</span>
                          <span className="text-white">
                            {athlete.team.nutritionist}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Amateur Athlete Modal Component (Simplified)
  const AmateurAthleteModal = ({ athlete, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 backdrop-blur-md z-[10000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-black rounded-3xl max-w-2xl w-full border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={athlete.image}
              alt={athlete.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">{athlete.name}</h2>
              <p className="text-white/60">{athlete.weightClass}</p>
              <div className="flex items-center gap-2 mt-1">
                <Flag className="w-3 h-3 text-white/40" />
                <span className="text-white/40 text-sm">
                  {athlete.nationality}
                </span>
                <Clock className="w-3 h-3 text-white/40 ml-2" />
                <span className="text-white/40 text-sm">Age {athlete.age}</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <div className="text-white text-2xl font-bold">
                  {athlete.record.wins}
                </div>
                <div className="text-white/40 text-xs">Wins</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <div className="text-white text-2xl font-bold">
                  {athlete.record.losses}
                </div>
                <div className="text-white/40 text-xs">Losses</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-xl">
                <div className="text-white text-2xl font-bold">
                  {athlete.record.draws}
                </div>
                <div className="text-white/40 text-xs">Draws</div>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-4">{athlete.bio}</p>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="text-white font-bold mb-2">Achievements</h3>
              {athlete.achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-white/60 text-sm mb-1"
                >
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  {ach}
                </div>
              ))}
            </div>
            <div className="mt-4 bg-gradient-to-r from-white/10 to-transparent rounded-xl p-4">
              <h3 className="text-white/60 text-sm mb-1">Next Tournament</h3>
              <p className="text-white font-semibold">
                {athlete.nextTournament}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const AthleteCard = ({ athlete, type }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
      onClick={() => setSelectedAthlete({ ...athlete, type })}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={athlete.image}
          alt={athlete.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        {type === "professional" && (
          <>
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
              <span className="text-xs text-white font-semibold">PRO</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-white/80 text-sm">
                  {athlete.record.wins}-{athlete.record.losses}-
                  {athlete.record.draws}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg">{athlete.name}</h3>
              <p className="text-white/60 text-sm">{athlete.weightClass}</p>
            </div>
          </>
        )}
        {type === "amateur" && (
          <>
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
              <span className="text-xs text-white font-semibold">AMATEUR</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-2">
                <Medal className="w-4 h-4 text-blue-400" />
                <span className="text-white/80 text-sm">
                  {athlete.record.wins}-{athlete.record.losses}-
                  {athlete.record.draws}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg">{athlete.name}</h3>
              <p className="text-white/60 text-sm">{athlete.weightClass}</p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );

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
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                OUR ROSTER
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Meet Our <span className="text-white/60">Athletes</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Discover the elite fighters and rising stars of Silverback
              Promotions. From world champions to promising prospects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("professional")}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === "professional"
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              Professional Athletes
            </button>
            <button
              onClick={() => setActiveTab("amateur")}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === "amateur"
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              Amateur Athletes
            </button>
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {activeTab === "professional" && (
              <motion.div
                key="professional"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {professionalAthletes.map((athlete) => (
                  <AthleteCard
                    key={athlete.id}
                    athlete={athlete}
                    type="professional"
                  />
                ))}
              </motion.div>
            )}

            {activeTab === "amateur" && (
              <motion.div
                key="amateur"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {amateurAthletes.map((athlete) => (
                  <AthleteCard
                    key={athlete.id}
                    athlete={athlete}
                    type="amateur"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <Crown className="w-10 h-10 text-white/60" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Join Silverback?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              We're always looking for talented fighters to join our roster.
              Whether you're a professional or amateur, Silverback Promotions is
              the place to elevate your career.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2"
              >
                Join Our Team
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Athlete Modal */}
      <AnimatePresence>
        {selectedAthlete && selectedAthlete.type === "professional" && (
          <ProAthleteModal
            athlete={selectedAthlete}
            onClose={() => setSelectedAthlete(null)}
          />
        )}
        {selectedAthlete && selectedAthlete.type === "amateur" && (
          <AmateurAthleteModal
            athlete={selectedAthlete}
            onClose={() => setSelectedAthlete(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Athletes;

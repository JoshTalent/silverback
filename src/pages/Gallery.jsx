import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Camera,
  Video,
  Image,
  Heart,
  Share2,
  Download,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  Grid3x3 as GridIcon,
  List,
  Filter,
  Eye,
  Clock,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  // Helper function to convert YouTube URLs to embed format
  const getYouTubeEmbedUrl = (url) => {
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/live\/)([^&\n?#]+)/,
      /youtube\.com\/shorts\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}?autoplay=0&rel=0&modestbranding=1`;
      }
    }

    return url; // Return original if no pattern matches
  };

  // Photo Gallery Data
  const photoCategories = [
    { id: "all", name: "All Photos", count: 24 },
    { id: "fight-night", name: "Fight Night", count: 12 },
    { id: "training", name: "Training Sessions", count: 6 },
    { id: "events", name: "Events & Press", count: 6 },
  ];

  const photos = [
    {
      id: 1,
      title: "Kagame Lands Devastating Right Hook",
      category: "fight-night",
      image: "https://i.postimg.cc/8C9d5ZRL/Screenshot_2026_04_05_114543.png",
      thumbnail:
        "https://i.postimg.cc/8C9d5ZRL/Screenshot_2026_04_05_114543.png",
      date: "April 15, 2024",
      event: "Silverback Showdown",
      photographer: "Jean Pierre",
      likes: 234,
      views: 1240,
    },
    {
      id: 2,
      title: "Championship Belt Presentation",
      category: "fight-night",
      image: "https://i.postimg.cc/W4Cm35GC/Screenshot_2026_04_05_114601.png",
      thumbnail:
        "https://i.postimg.cc/W4Cm35GC/Screenshot_2026_04_05_114601.png",
      date: "April 15, 2024",
      event: "Silverback Showdown",
      photographer: "Marie Claire",
      likes: 189,
      views: 890,
    },
    {
      id: 3,
      title: "Intense Training Session",
      category: "training",
      image: "https://i.postimg.cc/tJHhd7m1/Screenshot_2026_04_05_114756.png",
      thumbnail:
        "https://i.postimg.cc/tJHhd7m1/Screenshot_2026_04_05_114756.png",
      date: "April 10, 2024",
      event: "Media Day",
      photographer: "Olivier N.",
      likes: 156,
      views: 567,
    },
    {
      id: 4,
      title: "Weigh-In Faceoff",
      category: "events",
      image: "https://i.postimg.cc/d1C2TGnL/Screenshot_2026_04_05_115018.png",
      thumbnail:
        "https://i.postimg.cc/d1C2TGnL/Screenshot_2026_04_05_115018.png",
      date: "April 14, 2024",
      event: "Silverback Showdown Weigh-In",
      photographer: "Jean Pierre",
      likes: 312,
      views: 2100,
    },
    {
      id: 5,
      title: "Team Silverback Group Photo",
      category: "events",
      image: "https://i.postimg.cc/d0pR15RP/Screenshot_2026_04_05_114613.png",
      thumbnail:
        "https://i.postimg.cc/d0pR15RP/Screenshot_2026_04_05_114613.png",
      date: "April 5, 2024",
      event: "Team Building",
      photographer: "Staff",
      likes: 98,
      views: 432,
    },
    {
      id: 6,
      title: "Heavy Bag Training",
      category: "training",
      image: "https://i.postimg.cc/26WQBnTR/Screenshot_2026_04_05_114656.png",
      thumbnail:
        "https://i.postimg.cc/26WQBnTR/Screenshot_2026_04_05_114656.png",
      date: "April 8, 2024",
      event: "Morning Session",
      photographer: "Coach Olivier",
      likes: 145,
      views: 678,
    },
    {
      id: 7,
      title: "Knockout Celebration",
      category: "fight-night",
      image: "https://i.postimg.cc/QtSXmyfw/Screenshot_2026_04_05_120313.png",
      thumbnail:
        "https://i.postimg.cc/QtSXmyfw/Screenshot_2026_04_05_120313.png",
      date: "March 20, 2024",
      event: "Rumble in Rwanda",
      photographer: "Jean Pierre",
      likes: 423,
      views: 2450,
    },
    {
      id: 8,
      title: "Corner Advice",
      category: "fight-night",
      image: "https://i.postimg.cc/mDVbj5mX/Screenshot_2026_04_05_120219.png",
      thumbnail:
        "https://i.postimg.cc/mDVbj5mX/Screenshot_2026_04_05_120219.png",
      date: "March 20, 2024",
      event: "Rumble in Rwanda",
      photographer: "Marie Claire",
      likes: 267,
      views: 1100,
    },
    {
      id: 9,
      title: "Morning Run",
      category: "training",
      image: "https://i.postimg.cc/RFGMdDgn/Screenshot_2026_04_05_120102.png",
      thumbnail:
        "https://i.postimg.cc/RFGMdDgn/Screenshot_2026_04_05_120102.png",
      date: "April 1, 2024",
      event: "Training Camp",
      photographer: "Staff",
      likes: 89,
      views: 345,
    },
    {
      id: 10,
      title: "Press Conference",
      category: "events",
      image: "https://i.postimg.cc/wvF62GwV/Screenshot_2026_04_05_120345.png",
      thumbnail:
        "https://i.postimg.cc/wvF62GwV/Screenshot_2026_04_05_120345.png",
      date: "April 12, 2024",
      event: "Pre-Fight Presser",
      photographer: "Jean Pierre",
      likes: 178,
      views: 890,
    },
  ];

  // Video Gallery Data - Fixed with proper embed URLs
  const videos = [
    {
      id: 1,
      title: "KIGALI FIGHT NIGHT FULL EVENT VIDEO - March 2026",
      thumbnail:
        "https://i.postimg.cc/q7xhfQmk/Screenshot_2026_04_05_121503.png",
      videoUrl: "https://www.youtube.com/live/Q2nllK499h8?si=KIWsuUQhAE8CFr3J",
      originalUrl: "https://www.youtube.com/live/Q2nllK499h8?si=KIWsuUQhAE8CFr3J",
      duration: "5:10:23",
      date: "March 28, 2026",
      views: 15400,
      category: "fight-highlights",
      description:
        "Full event coverage of the exciting Kigali Fight Night featuring top African fighters.",
    },
    {
      id: 2,
      title: "KIGALI FIGHT NIGHT FULL EVENT VIDEO - November 2026",
      thumbnail:
        "https://i.postimg.cc/rpN06ghV/Screenshot_2026_04_05_121554.png",
      videoUrl: "https://www.youtube.com/embed/MOXgS7Bb0xs",
      originalUrl: "https://www.youtube.com/live/MOXgS7Bb0xs",
      duration: "6:10:50",
      date: "November 08, 2026",
      views: 8900,
      category: "behind-scenes",
      description:
        "Behind the scenes and exclusive interviews from the November fight night.",
    },
  ];

  const filteredPhotos = photos.filter((photo) => {
    return filter === "all" || photo.category === filter;
  });

  const PhotoCard = ({ photo, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white/5 border border-white/10 hover:border-white/20 transition-all"
      onClick={() => setSelectedMedia({ type: "photo", data: photo })}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={photo.thumbnail}
          alt={photo.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-white font-semibold text-sm mb-1 line-clamp-1">
            {photo.title}
          </h4>
          <div className="flex items-center gap-3 text-white/60 text-xs">
            <span>{photo.date}</span>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{photo.views}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
        <Camera className="w-3 h-3" />
      </div>
    </motion.div>
  );

  const VideoCard = ({ video, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white/5 border border-white/10 hover:border-white/20 transition-all"
      onClick={() => setSelectedMedia({ type: "video", data: video })}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm rounded-md px-2 py-1 text-xs text-white font-mono">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-white font-semibold text-sm mb-1 line-clamp-1">
          {video.title}
        </h4>
        <div className="flex items-center justify-between text-white/40 text-xs">
          <span>{video.date}</span>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{video.views.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const LightboxModal = () => {
    if (!selectedMedia) return null;

    const isVideo = selectedMedia.type === "video";
    const media = selectedMedia.data;
    const embedUrl = isVideo ? getYouTubeEmbedUrl(media.videoUrl) : null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-md z-[10000] flex items-center justify-center p-4"
        onClick={() => setSelectedMedia(null)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-6xl w-full max-h-[90vh] bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20 hover:scale-110 transition-transform"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Media Content */}
          <div className="relative bg-black/90">
            {isVideo ? (
              <div className="aspect-video">
                <iframe
                  src={embedUrl}
                  title={media.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={media.image}
                alt={media.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </div>

          {/* Info Panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-bold mb-2">{media.title}</h3>
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              {!isVideo && (
                <>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{media.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Camera className="w-4 h-4" />
                    <span>{media.photographer}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{media.likes} likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{media.views.toLocaleString()} views</span>
                  </div>
                </>
              )}
              {isVideo && (
                <>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{media.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{media.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{media.duration}</span>
                  </div>
                  {media.description && (
                    <div className="w-full mt-2 text-white/40 text-sm">
                      {media.description}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

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
              <Camera className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                MOMENTS THAT MATTER
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Silverback <span className="text-white/60">Gallery</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Relive the greatest moments in Silverback Promotions history. From
              knockout victories to behind-the-scenes action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-8 bg-black border-b border-white/10 sticky top-0 z-50 backdrop-blur-md bg-black/90">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActiveTab("photos");
                  setFilter("all");
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "photos"
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/60 hover:bg-white/20"
                }`}
              >
                <Image className="w-4 h-4" />
                Photos
                <span className="ml-1 text-xs opacity-60">{photos.length}</span>
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "videos"
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/60 hover:bg-white/20"
                }`}
              >
                <Video className="w-4 h-4" />
                Videos
                <span className="ml-1 text-xs opacity-60">{videos.length}</span>
              </button>
            </div>

            {activeTab === "photos" && (
              <div className="flex items-center gap-4 overflow-x-auto pb-2 sm:pb-0">
                <div className="flex gap-2">
                  {photoCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilter(cat.id)}
                      className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 whitespace-nowrap ${
                        filter === cat.id
                          ? "bg-white/20 text-white"
                          : "text-white/40 hover:text-white/60"
                      }`}
                    >
                      {cat.name}
                      <span className="ml-1 text-xs opacity-60">
                        ({cat.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl font-bold text-white">
                {photos.length}+
              </div>
              <div className="text-white/40 text-sm">Photos Captured</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-2xl font-bold text-white">
                {videos.length}+
              </div>
              <div className="text-white/40 text-sm">Videos Produced</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-white/40 text-sm">Events Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-white/40 text-sm">Total Views</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {activeTab === "photos" ? (
              <motion.div
                key="photos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {filteredPhotos.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredPhotos.map((photo, index) => (
                      <PhotoCard key={photo.id} photo={photo} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                      <Camera className="w-12 h-12 text-white/40" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      No photos found
                    </h3>
                    <p className="text-white/60">Try a different category</p>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {videos.map((video, index) => (
                    <VideoCard key={video.id} video={video} index={index} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Instagram Feed Section */}
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
              <InstagramIcon className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                FOLLOW US
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              @SilverbackPromotions
            </h2>
            <p className="text-white/60 text-lg">
              Follow us on Instagram for exclusive content and behind-the-scenes
              access
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border border-white/20 rounded-xl px-8 py-4 transition-all duration-300 hover:scale-105"
            >
              <InstagramIcon className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">
                Follow on Instagram
              </span>
              <ArrowRight className="w-5 h-5 text-white" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>{selectedMedia && <LightboxModal />}</AnimatePresence>
    </>
  );
};

// Instagram Icon component
const InstagramIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// ArrowRight Icon component
const ArrowRight = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Gallery;

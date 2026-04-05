import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  Tag,
  Heart,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  ArrowRight,
  Search,
  X,
  Clock,
  TrendingUp,
  Award,
  Trophy,
  FileText,
  Video,
  Image,
  Quote,
  ChevronLeft,
  ChevronRight,
  Filter,
  ThumbsUp,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Play,
  Mail,
  Newspaper,
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  // Blog Categories
  const categories = [
    { id: "all", name: "All Posts", count: 12, icon: FileText },
    { id: "fight-recap", name: "Fight Recaps", count: 4, icon: Trophy },
    {
      id: "fighter-spotlight",
      name: "Fighter Spotlight",
      count: 3,
      icon: Award,
    },
    { id: "event-news", name: "Event News", count: 3, icon: Calendar },
    { id: "training-tips", name: "Training Tips", count: 2, icon: TrendingUp },
  ];

  // Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "Emmanuel Kagame Defends Heavyweight Title with First-Round KO",
      slug: "kagame-defends-title-first-round-ko",
      excerpt:
        "The Silverback lived up to his nickname with a devastating first-round knockout to retain his African Heavyweight Championship.",
      content: `
        <p>In front of a sold-out crowd at Kigali Arena, Emmanuel "Silverback" Kagame delivered yet another spectacular performance, defending his African Heavyweight Championship with a first-round knockout against challenger John Okoth.</p>
        
        <h2>A Dominant Performance</h2>
        <p>From the opening bell, Kagame showcased why he's considered Africa's most feared heavyweight. The champion immediately pressured Okoth, cutting off the ring and landing heavy shots to the body. Just 2 minutes and 34 seconds into the first round, Kagame connected with a devastating right hook that sent Okoth to the canvas. The challenger was unable to beat the referee's count.</p>
        
        <p>"I came here to make a statement," Kagame said in his post-fight interview. "This is just the beginning. Silverback Promotions is taking over."</p>
        
        <h2>What's Next for the Champion?</h2>
        <p>With this victory, Kagame improves to 12-0 with 11 KOs. Rumors are swirling about a potential showdown with Nigerian heavyweight champion in what would be a massive unification bout later this year.</p>
        
        <p>The event, promoted by Silverback Promotions, marked the company's largest gate to date and further cements their position as Africa's premier boxing promotion.</p>
      `,
      featuredImage: "https://i.postimg.cc/268gB9Nn/valentin3.jpg",
      author: {
        name: "Ezikiel ISHIMWE",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
        role: "Founder & CEO",
      },
      date: "April 16, 2024",
      readTime: "4 min read",
      category: "fight-recap",
      views: 2540,
      likes: 342,
      comments: 28,
      tags: ["Heavyweight", "Championship", "KO"],
    },
    {
      id: 2,
      title: "Grace Uwase: The Rise of Rwanda's First Female Boxing Champion",
      slug: "grace-uwase-rise-of-first-female-champion",
      excerpt:
        "From humble beginnings to becoming Rwanda's first female professional boxing champion, Grace 'Iron Fist' Uwase's journey is an inspiration to aspiring fighters across Africa.",
      content: `
        <p>Grace Uwase never imagined she would become a champion. Growing up in a small village outside Kigali, boxing was the furthest thing from her mind. But today, she stands as Rwanda's first female professional boxing champion, a trailblazer who has inspired a generation.</p>
        
        <h2>The Early Years</h2>
        <p>"I started boxing because I wanted to defend myself," Uwase recalls. "I never thought it would become my profession." Her natural talent was discovered by Coach Ezikiel ISHIMWE during a local tournament, and she's been with Silverback Promotions ever since.</p>
        
        <h2>Making History</h2>
        <p>In March 2024, Uwase captured the Women's African Middleweight Championship with a unanimous decision victory. The win made her the first Rwandan female boxer to win a professional title.</p>
        
        <h2>Looking Ahead</h2>
        <p>With a perfect 10-0 record and 8 KOs, Uwase has her sights set on international competition. "I want to prove that African fighters can compete with anyone in the world," she says.</p>
      `,
      featuredImage: "https://i.postimg.cc/7h5cKC6w/Heros3.jpg",
      author: {
        name: "Olivier NIYIGENA",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop",
        role: "Head Coach",
      },
      date: "April 10, 2024",
      readTime: "5 min read",
      category: "fighter-spotlight",
      views: 1870,
      likes: 423,
      comments: 45,
      tags: ["Women in Boxing", "Champion", "Inspiration"],
    },
    {
      id: 3,
      title: "Silverback Showdown 2024: Full Fight Card Announced",
      slug: "silverback-showdown-2024-full-fight-card",
      excerpt:
        "The most anticipated boxing event of the year is almost here. Check out the complete fight card for Silverback Showdown 2024 at Kigali Arena.",
      content: `
        <p>Silverback Promotions has announced the full fight card for Silverback Showdown 2024, set to take place on May 20th at Kigali Arena. The event features a stacked lineup of both professional and amateur bouts.</p>
        
        <h2>Main Event</h2>
        <p>The main event will feature Grace Uwase defending her Middleweight Championship against Kenyan challenger Sarah Mukamana in what promises to be an explosive matchup.</p>
        
        <h2>Co-Main Event</h2>
        <p>In the co-main event, Jean "The Panther" Niyomugabo takes on David Nsengimana in a Light Heavyweight contender bout that could determine the next title challenger.</p>
        
        <h2>Preliminary Card</h2>
        <p>The preliminary card will showcase up-and-coming talent from the Silverback stable, including amateur standout Kevin Nshimiyimana making his professional debut.</p>
        
        <p>Tickets are selling fast! Don't miss your chance to witness history live.</p>
      `,
      featuredImage:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop",
      author: {
        name: "Josue NTWARI",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop",
        role: "Executive Secretary",
      },
      date: "April 5, 2024",
      readTime: "3 min read",
      category: "event-news",
      views: 3210,
      likes: 567,
      comments: 89,
      tags: ["Event", "Fight Card", "Silverback Showdown"],
    },
    {
      id: 4,
      title: "5 Essential Boxing Drills for Beginners",
      slug: "essential-boxing-drills-for-beginners",
      excerpt:
        "Start your boxing journey right with these fundamental drills that will build your technique, stamina, and confidence in the ring.",
      content: `
        <p>Whether you're training for fitness or dreaming of stepping into the ring, mastering the fundamentals is crucial. Here are five essential drills every beginner should practice.</p>
        
        <h2>1. Shadow Boxing</h2>
        <p>Shadow boxing helps develop proper form, footwork, and muscle memory. Focus on combinations, defense, and movement around the space.</p>
        
        <h2>2. Heavy Bag Work</h2>
        <p>The heavy bag builds power and endurance. Practice your combinations with proper technique, focusing on rotating your hips and shoulders.</p>
        
        <h2>3. Jump Rope</h2>
        <p>Essential for footwork, rhythm, and cardio conditioning. Start with basic jumps and progress to more complex patterns.</p>
        
        <h2>4. Mitt Work</h2>
        <p>Working with a coach on focus mitts develops accuracy, timing, and combination flow.</p>
        
        <h2>5. Core Training</h2>
        <p>A strong core is essential for power generation and absorbing body shots. Include planks, Russian twists, and leg raises in your routine.</p>
        
        <p>Remember: consistency is key. Practice these drills regularly, and you'll see rapid improvement.</p>
      `,
      featuredImage:
        "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&auto=format&fit=crop",
      author: {
        name: "Olivier NIYIGENA",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop",
        role: "Head Coach",
      },
      date: "March 28, 2024",
      readTime: "6 min read",
      category: "training-tips",
      views: 892,
      likes: 156,
      comments: 12,
      tags: ["Training", "Beginners", "Technique"],
    },
    {
      id: 5,
      title: "Jean 'The Panther' Niyomugabo: 4 Fights, 4 KOs",
      slug: "jean-niyomugabo-four-fights-four-kos",
      excerpt:
        "The Light Heavyweight prospect is on a tear, finishing all four of his professional opponents inside the distance.",
      content: `
        <p>At just 25 years old, Jean "The Panther" Niyomugabo is already being called the future of African boxing. With a perfect 8-1 record and 6 KOs, including 4 consecutive knockout victories, the hype is real.</p>
        
        <h2>A Natural Born Fighter</h2>
        <p>Niyomugabo's boxing journey began at age 10, inspired by his father who was an amateur boxer. His explosive power and speed caught the attention of Silverback Promotions, who signed him as a professional in 2021.</p>
        
        <h2>Recent Success</h2>
        <p>His last four fights have all ended in spectacular fashion. Most recently, he dismantled veteran fighter in just two rounds, landing a devastating body shot that left his opponent unable to continue.</p>
        
        <h2>Championship Dreams</h2>
        <p>"I'm ready for a title shot," Niyomugabo declared. "Give me anyone in the top 5. I'll knock them out too."</p>
        
        <p>With his combination of power, speed, and charisma, Niyomugabo is quickly becoming a fan favorite and one of Silverback's most marketable stars.</p>
      `,
      featuredImage: "https://i.postimg.cc/SsT3LLmf/boxing.jpg",
      author: {
        name: "Ezikiel ISHIMWE",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
        role: "Founder & CEO",
      },
      date: "March 20, 2024",
      readTime: "4 min read",
      category: "fighter-spotlight",
      views: 1450,
      likes: 234,
      comments: 31,
      tags: ["Light Heavyweight", "Rising Star", "KO Artist"],
    },
    {
      id: 6,
      title: "Behind the Scenes: Producing a Silverback Event",
      slug: "behind-the-scenes-silverback-event",
      excerpt:
        "Ever wondered what goes into creating a world-class boxing event? Take a look behind the curtain at Silverback Promotions.",
      content: `
        <p>Producing a professional boxing event requires months of planning, coordination, and execution. From securing venues to coordinating broadcast partnerships, every detail matters.</p>
        
        <h2>Planning Phase</h2>
        <p>Months before fight night, our team begins identifying potential matchups, securing venues, and developing marketing strategies. Each event is designed to maximize entertainment value while ensuring athlete safety.</p>
        
        <h2>Production Week</h2>
        <p>The week leading up to the event is chaos in the best possible way. Ring construction, lighting installation, sound checks, and broadcast setup all happen simultaneously.</p>
        
        <h2>Fight Night</h2>
        <p>On event day, dozens of staff members work tirelessly to ensure everything runs smoothly. From medical personnel to security, referees to broadcast crews, it takes a village.</p>
        
        <p>The result? An unforgettable experience for fans and fighters alike.</p>
      `,
      featuredImage:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&auto=format&fit=crop",
      author: {
        name: "Josue NTWARI",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop",
        role: "Executive Secretary",
      },
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "event-news",
      views: 1100,
      likes: 189,
      comments: 15,
      tags: ["Behind the Scenes", "Production", "Events"],
    },
  ];

  // Filtered Posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const BlogPostCard = ({ post, index }) => (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
      onClick={() => setSelectedPost(post)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
            {categories.find((c) => c.id === post.category)?.name ||
              post.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-4 text-white/60 text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-white/80 transition-colors">
          {post.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-white text-xs font-semibold">
                {post.author.name}
              </p>
              <p className="text-white/30 text-xs">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-white/40 text-xs">
              <Eye className="w-3 h-3" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center gap-1 text-white/40 text-xs">
              <Heart className="w-3 h-3" />
              <span>{post.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );

  const BlogPostModal = ({ post, onClose }) => {
    if (!post) return null;

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
          className="relative bg-black rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Hero Section */}
          <div className="relative h-96">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                  {categories.find((c) => c.id === post.category)?.name}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-white/40" />
                <span className="text-white/60 text-sm">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 rounded-full text-white/60 text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                    <Bookmark className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Facebook className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Twitter className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Featured Post (latest)
  const featuredPost = blogPosts[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black flex items-center pt-20">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <Newspaper className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                LATEST NEWS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Silverback <span className="text-white/60">Blog</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Latest news, fight recaps, fighter features, and insights from
              Africa's premier boxing promotion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-black border-b border-white/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-r from-white/10 to-transparent rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => setSelectedPost(featuredPost)}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-80 md:h-full">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                      FEATURED STORY
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/60 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-white/40 text-xs">
                          {featuredPost.author.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="text-white border border-white/30 px-6 py-2 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Search */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <X className="w-4 h-4 text-white/40 hover:text-white" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                          selectedCategory === category.id
                            ? "bg-white/20 text-white"
                            : "text-white/60 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <category.icon className="w-4 h-4" />
                          {category.name}
                        </span>
                        <span className="text-xs">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Popular Posts
                  </h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <button
                        key={post.id}
                        onClick={() => setSelectedPost(post)}
                        className="flex gap-3 text-left hover:bg-white/10 p-2 rounded-xl transition-colors w-full"
                      >
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="text-white text-sm font-semibold line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-white/40 text-xs mt-1">
                            {post.date}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <BlogPostCard key={post.id} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                    <Search className="w-12 h-12 text-white/40" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    No posts found
                  </h3>
                  <p className="text-white/60">
                    Try adjusting your search or filter to find what you're
                    looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <Mail className="w-10 h-10 text-white/60" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Get the latest fight announcements, exclusive interviews, and
              behind-the-scenes content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <BlogPostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;

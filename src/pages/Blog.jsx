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
      title: "KIGALI FIGHT NIGHT SECOND EDITION",
      slug: "kigali-fight-night-second-edition",
      excerpt:
        "The Silverback Heavyweight Champion Emmanuel 'Silverback' Kagame successfully defended his title with a first-round knockout in front of a sold-out crowd at Kigali Arena.",
      content: `
        <p>In a night filled with electrifying action, Emmanuel "Silverback" Kagame retained his heavyweight title with a devastating first-round knockout. The atmosphere at Kigali Arena was electric as fans witnessed one of the most dominant performances in recent boxing history.</p>
      `,
      featuredImage:
        "https://i.postimg.cc/q7xhfQmk/Screenshot_2026_04_05_121503.png",
      author: {
        name: "Ezikiel ISHIMWE",
        avatar:
          "https://i.postimg.cc/q7xhfQmk/Screenshot_2026_04_05_121503.png",
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
      title: "KIGALI FIGHT NIGHT FIRST EDITION",
      slug: "kigali-fight-night-first-edition",
      excerpt:
        "The inaugural Kigali Fight Night delivered an unforgettable evening of high-octane action, showcasing the best of African boxing.",
      content: `
        <p>The inaugural Kigali Fight Night delivered an unforgettable evening of high-octane action, showcasing the best of African boxing.</p>
        
        <h2>The Early Years</h2>
        <p>"I started boxing because I wanted to defend myself," Uwase recalls. "I never thought it would become my profession." Her natural talent was discovered by Coach Ezikiel ISHIMWE during a local tournament, and she's been with Silverback Promotions ever since.</p>
        
        <h2>Making History</h2>
        <p>In March 2024, Uwase captured the Women's African Middleweight Championship with a unanimous decision victory. The win made her the first Rwandan female boxer to win a professional title.</p>
        
        <h2>Looking Ahead</h2>
        <p>With a perfect 10-0 record and 8 KOs, Uwase has her sights set on international competition. "I want to prove that African fighters can compete with anyone in the world," she says.</p>
      `,
      featuredImage:
        "https://i.postimg.cc/rpN06ghV/Screenshot_2026_04_05_121554.png",
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

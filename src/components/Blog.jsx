import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Star,
  Filter,
  Eye,
  Bookmark,
  ChevronRight,
  X,
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const cardInnerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const hoverVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 360 },
  tap: { scale: 0.9 },
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const categories = ['All', 'Fashion', 'Technology', 'Lifestyle', 'Travel', 'Health', 'Business'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Fashion: What You Need to Know",
      excerpt: "Discover how sustainable fashion is reshaping the industry and what it means for conscious consumers in 2024.",
      content: "The fashion industry is undergoing a revolutionary transformation as sustainability takes center stage...",
      category: "Fashion",
      author: "Sarah Johnson",
      authorImage: "https://imgs.search.brave.com/rz1rLGxmEbnyeiH1fDbkOsJMDmuUkUW8lxjqnQruJ2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waHlz/aWNhbGVkdWNhdGlv/bmFuZHdlbGxuZXNz/Lm1pdC5lZHUvd3At/Y29udGVudC91cGxv/YWRzL1VudGl0bGVk/LTEucG5n",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      tags: ["Sustainability", "Fashion", "Eco-friendly"],
      likes: 245,
      comments: 32,
      views: 1250,
      featured: true,
    },
    {
      id: 2,
      title: "10 Tech Gadgets That Will Transform Your Daily Routine",
      excerpt: "From smart home devices to productivity tools, these innovative gadgets will revolutionize how you live and work.",
      content: "Technology continues to evolve at breakneck speed, bringing us gadgets that seemed impossible just a few years ago...",
      category: "Technology",
      author: "Michael Chen",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=600&fit=crop",
      tags: ["Technology", "Gadgets", "Innovation"],
      likes: 189,
      comments: 28,
      views: 890,
      featured: false,
    },
    {
      id: 3,
      title: "Minimalist Living: Creating Space for What Matters Most",
      excerpt: "Learn how minimalism can improve your mental health, productivity, and overall quality of life.",
      content: "Minimalism isn't just about having fewer possessions; it's about making room for the experiences and relationships that truly matter...",
      category: "Lifestyle",
      author: "Emily Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      date: "2024-01-10",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      tags: ["Minimalism", "Lifestyle", "Wellness"],
      likes: 167,
      comments: 19,
      views: 720,
      featured: true,
    },
    {
      id: 4,
      title: "Hidden Gems: 7 Underrated Travel Destinations for 2024",
      excerpt: "Skip the crowded tourist spots and discover these breathtaking destinations that offer authentic cultural experiences.",
      content: "While everyone's heading to the same popular destinations, savvy travelers are discovering incredible places off the beaten path...",
      category: "Travel",
      author: "David Kim",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      tags: ["Travel", "Adventure", "Culture"],
      likes: 298,
      comments: 45,
      views: 1580,
      featured: false,
    },
    {
      id: 5,
      title: "The Science of Sleep: Optimizing Your Rest for Peak Performance",
      excerpt: "Discover evidence-based strategies to improve your sleep quality and wake up feeling refreshed and energized.",
      content: "Sleep is one of the most crucial factors affecting our health, productivity, and overall well-being...",
      category: "Health",
      author: "Dr. Lisa Wang",
      authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face",
      date: "2024-01-05",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop",
      tags: ["Health", "Sleep", "Wellness"],
      likes: 156,
      comments: 23,
      views: 650,
      featured: true,
    },
    {
      id: 6,
      title: "Remote Work Revolution: Building a Thriving Business from Anywhere",
      excerpt: "Learn how successful entrepreneurs are leveraging remote work to build global teams and scalable businesses.",
      content: "The remote work revolution has opened unprecedented opportunities for businesses to access global talent...",
      category: "Business",
      author: "Alex Thompson",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face",
      date: "2024-01-03",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      tags: ["Business", "Remote Work", "Entrepreneurship"],
      likes: 203,
      comments: 31,
      views: 980,
      featured: false,
    },
    {
      id: 7,
      title: "Street Style Spotlight: Fashion Trends Straight from the Sidewalk",
      excerpt: "Take a look at the most inspiring street style looks and learn how to incorporate these trends into your wardrobe.",
      content: "Street style continues to be one of the most authentic sources of fashion inspiration...",
      category: "Fashion",
      author: "Sophia Martinez",
      authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
      date: "2024-01-01",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
      tags: ["Fashion", "Style", "Trends"],
      likes: 178,
      comments: 26,
      views: 750,
      featured: false,
    },
    {
      id: 8,
      title: "Digital Detox: Reclaiming Your Mental Space in a Connected World",
      excerpt: "Practical strategies to reduce screen time, improve focus, and reconnect with what truly matters.",
      content: "In our hyperconnected world, taking time to unplug has become more important than ever...",
      category: "Lifestyle",
      author: "James Wilson",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      date: "2023-12-28",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      tags: ["Digital Detox", "Mental Health", "Productivity"],
      likes: 234,
      comments: 38,
      views: 1100,
      featured: false,
    },
  ];

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery]);

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden"
        variants={containerVariants}
      >
        <motion.div
          className="absolute top-6 sm:top-8 md:top-12 lg:top-20 left-6 sm:left-8 md:left-12 lg:left-20 w-32 sm:w-40 md:w-48 lg:w-72 h-32 sm:h-40 md:h-48 lg:h-72 bg-white/10 rounded-full blur-3xl animate-pulse"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-20 right-6 sm:right-8 md:right-12 lg:right-20 w-40 sm:w-48 md:w-64 lg:w-96 h-40 sm:h-48 md:h-64 lg:h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        ></motion.div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
          <motion.div className="text-center max-w-4xl mx-auto" variants={containerVariants}>
            <motion.div className="inline-block mb-3 sm:mb-4 md:mb-6" variants={itemVariants}>
              <span className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-xs sm:text-sm md:text-base">
                📝 Latest Stories
              </span>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight"
              variants={itemVariants}
            >
              Insights &
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                Inspiration
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 px-4"
              variants={itemVariants}
            >
              Discover stories that matter, trends that inspire, and ideas that transform
            </motion.p>

            {/* Search Bar */}
            <motion.div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-4" variants={itemVariants}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-orange-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="relative w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 pl-10 sm:pl-12 md:pl-14 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl text-sm sm:text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                />
                <Search className="absolute left-3 sm:left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 sm:right-4 md:right-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Posts */}
      <motion.div
        className="py-10 sm:py-12 md:py-16 bg-white"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <motion.div
            className="flex flex-col md:flex-row md:items-center justify-between mb-6 sm:mb-8 md:mb-12 gap-3 sm:gap-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                Featured Stories
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Hand-picked articles from our editorial team
              </p>
            </motion.div>
            <motion.div
              className="hidden md:block"
              variants={itemVariants}
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold">
                <Star className="w-3 sm:w-4 h-3 sm:h-4 fill-current" />
                Editor's Choice
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            layout
          >
            <AnimatePresence>
              {featuredPosts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className={`group relative ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                  whileHover="hover"
                  whileTap="tap"
                  variants={hoverVariants}
                >
                  <article className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                    <div
                      className={`relative ${
                        index === 0 ? 'h-48 sm:h-64 md:h-80 lg:h-96' : 'h-36 sm:h-48 md:h-64'
                      } overflow-hidden`}
                    >
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>

                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-3 sm:top-4 left-3 sm:left-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <motion.span 
                          className="bg-orange-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold"
                          variants={itemVariants}
                          whileHover={{ scale: 1.1 }}
                        >
                          {post.category}
                        </motion.span>
                      </motion.div>

                      {/* Quick Actions */}
                      <motion.div
                        className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-1.5 sm:gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, staggerChildren: 0.1 }}
                      >
                        <motion.button
                          className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 bg-white/90 hover:bg-orange-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          variants={iconVariants}
                        >
                          <Bookmark className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                        </motion.button>
                        <motion.button
                          className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 bg-white/90 hover:bg-orange-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          variants={iconVariants}
                        >
                          <Share2 className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                        </motion.button>
                      </motion.div>
                    </div>

                    <motion.div 
                      className="p-3 sm:p-4 md:p-6 lg:p-8"
                      variants={cardInnerVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ staggerChildren: 0.1 }}
                    >
                      <motion.div
                        className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 text-[11px] sm:text-xs md:text-sm text-gray-500 mb-3 sm:mb-4"
                        variants={itemVariants}
                      >
                        <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                          <motion.img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 rounded-full"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          />
                          <motion.span 
                            className="truncate"
                            whileHover={{ color: '#f97316' }}
                          >{post.author}</motion.span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <motion.div variants={iconVariants}>
                            <Calendar className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 flex-shrink-0" />
                          </motion.div>
                          <span className="truncate">{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <motion.div variants={iconVariants}>
                            <Clock className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 flex-shrink-0" />
                          </motion.div>
                          <span>{post.readTime}</span>
                        </div>
                      </motion.div>

                      <motion.h3
                        className={`font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-orange-600 transition-colors line-clamp-3 ${
                          index === 0 ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' : 'text-base sm:text-lg md:text-xl'
                        }`}
                        variants={itemVariants}
                        whileHover={{ y: -2, color: '#f97316' }}
                      >
                        {post.title}
                      </motion.h3>

                      <motion.p
                        className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed line-clamp-3 text-xs sm:text-sm md:text-base"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                      >
                        {post.excerpt}
                      </motion.p>

                      <motion.div
                        className="flex items-center justify-between gap-3 sm:gap-4"
                        variants={itemVariants}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[11px] sm:text-xs md:text-sm text-gray-500 min-w-0">
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.1 }}
                          >
                            <motion.div variants={iconVariants}>
                              <Heart className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 flex-shrink-0" />
                            </motion.div>
                            <span>{post.likes}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.1 }}
                          >
                            <motion.div variants={iconVariants}>
                              <MessageCircle className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 flex-shrink-0" />
                            </motion.div>
                            <span>{post.comments}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.1 }}
                          >
                            <motion.div variants={iconVariants}>
                              <Eye className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 flex-shrink-0" />
                            </motion.div>
                            <span>{post.views}</span>
                          </motion.div>
                        </div>

                        <motion.button
                          className="group/btn flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors text-xs sm:text-sm whitespace-nowrap"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          variants={itemVariants}
                        >
                          Read More
                          <motion.div 
                            className="w-3 sm:w-4 h-3 sm:h-4 group-hover/btn:translate-x-1 transition-transform"
                            variants={iconVariants}
                          >
                            <ArrowRight />
                          </motion.div>
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </article>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Category Filter & All Posts */}
      <motion.div className="py-10 sm:py-12 md:py-16" variants={containerVariants}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          {/* Category Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-4 mb-6 sm:mb-8 md:mb-12"
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                custom={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-2 sm:px-3 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-600 shadow-md'
                }`}
              >
                <span className="whitespace-nowrap">{category}</span>
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs opacity-75">
                  ({category === 'All' ? blogPosts.length : blogPosts.filter((p) => p.category === category).length})
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <AnimatePresence>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
              variants={containerVariants}
              layout
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  whileHover="hover"
                  whileTap="tap"
                  variants={hoverVariants}
                >
                  <div className="relative h-36 sm:h-48 md:h-48 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>

                    <motion.div
                      className="absolute top-3 sm:top-4 left-3 sm:left-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <motion.span 
                        className="bg-orange-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                      >
                        {post.category}
                      </motion.span>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="p-3 sm:p-4 md:p-6"
                    variants={cardInnerVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1 }}
                  >
                    <motion.div
                      className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 text-[11px] sm:text-xs md:text-sm text-gray-500 mb-2 sm:mb-3"
                      variants={itemVariants}
                    >
                      <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                        <motion.img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-5 sm:w-6 md:w-6 h-5 sm:h-6 md:h-6 rounded-full"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        />
                        <motion.span 
                          className="truncate"
                          whileHover={{ color: '#f97316' }}
                        >{post.author}</motion.span>
                      </div>
                      <span className="hidden md:inline">•</span>
                      <motion.span 
                        className="truncate"
                        whileHover={{ color: '#f97316' }}
                      >{formatDate(post.date)}</motion.span>
                    </motion.div>

                    <motion.h3
                      className="font-bold text-base sm:text-lg md:text-xl text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors line-clamp-2"
                      variants={itemVariants}
                      whileHover={{ y: -2, color: '#f97316' }}
                    >
                      {post.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3 text-xs sm:text-sm md:text-base"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      {post.excerpt}
                    </motion.p>

                    <AnimatePresence>
                      <motion.div 
                        className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4" 
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        as={motion.div}
                        transition={{ staggerChildren: 0.05 }}
                      >
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            custom={tagIndex}
                            variants={tagVariants}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 text-[10px] sm:text-xs rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer truncate"
                            whileHover={{ scale: 1.1, x: 5 }}
                          >
                            #{tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </AnimatePresence>

                    <motion.div className="flex items-center justify-between gap-3 sm:gap-4" variants={itemVariants}>
                      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-[11px] sm:text-xs md:text-sm text-gray-500 min-w-0">
                        <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                          <motion.div variants={iconVariants}>
                            <Clock className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 flex-shrink-0" />
                          </motion.div>
                          <span className="truncate">{post.readTime}</span>
                        </motion.span>
                        <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                          <motion.div variants={iconVariants}>
                            <Heart className="w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 flex-shrink-0" />
                          </motion.div>
                          <span>{post.likes}</span>
                        </motion.span>
                      </div>

                      <motion.button
                        className="group/btn flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors text-xs sm:text-sm whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                      >
                        Read
                        <motion.div 
                          className="w-3 sm:w-4 h-3 sm:h-4 group-hover/btn:translate-x-1 transition-transform"
                          variants={iconVariants}
                        >
                          <ChevronRight />
                        </motion.div>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          <AnimatePresence>
            {filteredPosts.length === 0 && (
              <motion.div
                className="text-center py-12 sm:py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">📝</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 px-4 text-sm sm:text-base">
                  Try adjusting your search or browse different categories
                </p>
                <motion.button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-2xl font-bold hover:bg-orange-600 transition-colors text-xs sm:text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show All Articles
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div
        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-10 sm:py-12 md:py-16 overflow-hidden"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <motion.div className="max-w-4xl mx-auto text-center" variants={containerVariants}>
            <motion.div className="inline-block mb-3 sm:mb-4 md:mb-6" variants={itemVariants}>
              <span className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-xs sm:text-sm md:text-base">
                📬 Stay Informed
              </span>
            </motion.div>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6"
              variants={itemVariants}
            >
              Never Miss a Story
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 px-4"
              variants={itemVariants}
            >
              Get our latest articles and insights delivered straight to your inbox
            </motion.p>

            <motion.div
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 sm:gap-3 px-4 mb-4 sm:mb-6 md:mb-8"
              variants={itemVariants}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/30 bg-gray-100 font-semibold text-xs sm:text-sm"
              />
              <motion.button
                className="bg-gray-100 text-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8 text-white/80"
              variants={containerVariants}
            >
              <motion.div className="flex items-center gap-1.5 sm:gap-2" variants={itemVariants}>
                <TrendingUp className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">Weekly insights</span>
              </motion.div>
              <motion.div className="flex items-center gap-1.5 sm:gap-2" variants={itemVariants}>
                <Star className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">Exclusive content</span>
              </motion.div>
              <motion.div className="flex items-center gap-1.5 sm:gap-2" variants={itemVariants}>
                <Filter className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">Curated picks</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
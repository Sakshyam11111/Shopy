import React, { useState, useEffect } from 'react';
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
  ChevronRight
} from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Initialize AOS
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 100,
      });
    }
  }, []);

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
      featured: true
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
      featured: false
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
      featured: true
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
      featured: false
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
      featured: true
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
      featured: false
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
      featured: false
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
      featured: false
    }
  ];

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-24" data-aos="fade">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" data-aos="zoom-in" data-aos-delay="100"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" data-aos="zoom-in" data-aos-delay="200"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6" data-aos="fade-down" data-aos-delay="300">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">
                📝 Latest Stories
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
              Insights & 
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                Inspiration
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="500">
              Discover stories that matter, trends that inspire, and ideas that transform
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="600">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-16 bg-white" data-aos="fade">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div data-aos="fade-right" data-aos-delay="100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Stories
              </h2>
              <p className="text-gray-600">Hand-picked articles from our editorial team</p>
            </div>
            <div className="hidden md:block" data-aos="fade-left" data-aos-delay="200">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                Editor's Choice
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post, index) => (
              <div
                key={post.id}
                className={`group relative ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                data-aos={index === 0 ? "fade-up" : "fade-up"}
                data-aos-delay={`${300 + index * 100}`}
              >
                <article className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  <div className={`relative ${
                    index === 0 ? 'h-80 lg:h-96' : 'h-64'
                  } overflow-hidden`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4" data-aos="fade-down" data-aos-delay={`${400 + index * 100}`}>
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="w-10 h-10 bg-white/90 hover:bg-orange-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg" data-aos="fade-left" data-aos-delay={`${500 + index * 100}`}>
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-white/90 hover:bg-orange-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 shadow-lg" data-aos="fade-left" data-aos-delay={`${550 + index * 100}`}>
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8" data-aos="fade-up" data-aos-delay={`${600 + index * 100}`}>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className={`font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors ${
                      index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>

                      <button className="group/btn flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter & All Posts */}
      <div className="py-16" data-aos="fade">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-600 shadow-md'
                }`}
                data-aos="fade-up"
                data-aos-delay={`${200 + index * 50}`}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'All' ? blogPosts.length : blogPosts.filter(p => p.category === category).length})
                </span>
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4" data-aos="fade-down" data-aos-delay={`${400 + index * 100}`}>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6" data-aos="fade-up" data-aos-delay={`${500 + index * 100}`}>
                  {/* Author & Date */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{formatDate(post.date)}</span>
                  </div>

                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    </div>

                    <button className="group/btn flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                      Read
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16" data-aos="fade-up" data-aos-delay="700">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or browse different categories</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-colors"
              >
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16" data-aos="fade">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6" data-aos="fade-down" data-aos-delay="100">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">
                📬 Stay Informed
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-delay="200">
              Never Miss a Story
            </h2>
            <p className="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="300">
              Get our latest articles and insights delivered straight to your inbox
            </p>
            
            <div className="max-w-md mx-auto flex gap-3" data-aos="fade-up" data-aos-delay="400">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/30 bg-gray-100"
              />
              <button className="bg-gray-100 text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 text-white/80" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Exclusive content</span>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                <span>Curated picks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
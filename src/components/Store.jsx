import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  Heart,
  ShoppingBag,
  Eye,
  Grid,
  List,
  SlidersHorizontal,
  TrendingUp,
  Award,
  Zap,
  ChevronDown,
  X,
  ArrowRight,
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
  hidden: { opacity: 0, scale: 0.9, rotate: 2, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut', type: 'spring', stiffness: 80 },
  }),
  exit: { opacity: 0, scale: 0.9, rotate: -2, y: 30, transition: { duration: 0.3, ease: 'easeIn' } },
};

const cardHoverVariants = {
  hover: {
    scale: 1.03,
    rotate: 0.5,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const Store = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = [
    'All', 'Electronics', 'Fashion', 'Home & Living', 'Sports', 'Books', 'Beauty'
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const products = [
    {
      id: 1,
      name: "Earphone",
      category: "Electronics",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 2847,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=240&fit=crop&crop=center",
      badge: "Best Seller",
      isNew: false,
      isSale: true,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      category: "Electronics",
      price: 249.99,
      originalPrice: 329.99,
      rating: 4.9,
      reviews: 1923,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      badge: "New",
      isNew: true,
      isSale: true,
    },
    {
      id: 3,
      name: "Designer Summer Dress",
      category: "Fashion",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 856,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop",
      badge: "Trending",
      isNew: false,
      isSale: true,
    },
    {
      id: 4,
      name: "Minimalist Coffee Table",
      category: "Home & Living",
      price: 199.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 432,
      image: "https://imgs.search.brave.com/fQNnVuyvqEuLAuate4T6MB9-5PJPDaBgANMBmgjDu5w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWF0aGlzaG9tZS5j/b20vZHcvaW1hZ2Uv/djIvQUFZUV9QUkQv/b24vZGVtYW5kd2Fy/ZS5zdGF0aWMvLS9T/aXRlcy1tYXRoaXNi/cm90aGVycy1tYXN0/ZXIvZGVmYXVsdC9k/d2QxOTk1NzU4L2hp/cmVzLzNlZGVmZWJj/ODUzNTQyMTdhOGU5/ODBiNjc3NGIyZGJl/LmpwZz9zdz0xMjAw/JnNoPTcyMCZzbT1m/aXQ",
      badge: "Popular",
      isNew: false,
      isSale: false,
    },
    {
      id: 5,
      name: "Professional Running Shoes",
      category: "Sports",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.5,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      badge: "Sale",
      isNew: false,
      isSale: true,
    },
    {
      id: 6,
      name: "Organic Skincare Set",
      category: "Beauty",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.9,
      reviews: 634,
      image: "https://imgs.search.brave.com/WTdGQPkgY3xjkyD_ZEF5eHa2IMMBe92HMwCTHOgI_60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/LnNpbXBseW9yZ2Fu/aWNiZWF1dHkuY29t/L2Nkbi9zaG9wL2Nv/bGxlY3Rpb25zL29y/Z2FuaWMtc2tpbmNh/cmUtcHJvZHVjdC1r/aXRzXzU1Y2RiOWNl/LTcyMjMtNDQxMi04/YTdjLTE4NzA5NDcz/MjRhYy5qcGc_dj0x/NzI3MjEyNTU5Jndp/ZHRoPTI0MDA",
      badge: "Eco-Friendly",
      isNew: true,
      isSale: true,
    },
    {
      id: 7,
      name: "Casual Denim Jacket",
      category: "Fashion",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.4,
      reviews: 298,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      badge: "Classic",
      isNew: false,
      isSale: true,
    },
    {
      id: 8,
      name: "Modern Table Lamp",
      category: "Home & Living",
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.3,
      reviews: 187,
      image: "https://imgs.search.brave.com/dKAS1doDt11W89oRxL_kqgEHp2IVadjB3442qgFkN9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE1R21OMHFqNEwu/anBn",
      badge: "Design Award",
      isNew: false,
      isSale: true,
    },
    {
      id: 9,
      name: "Gaming Mechanical Keyboard",
      category: "Electronics",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.7,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
      badge: "Gaming",
      isNew: true,
      isSale: true,
    },
    {
      id: 10,
      name: "Yoga Mat Premium",
      category: "Sports",
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.6,
      reviews: 573,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
      badge: "Wellness",
      isNew: false,
      isSale: true,
    },
    {
      id: 11,
      name: "Leather Handbag",
      category: "Fashion",
      price: 189.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 421,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      badge: "Luxury",
      isNew: false,
      isSale: true,
    },
    {
      id: 12,
      name: "Smart Home Speaker",
      category: "Electronics",
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviews: 756,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      badge: "Smart Home",
      isNew: true,
      isSale: true,
    },
  ];

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    switch (selectedSort) {
      case 'newest':
        filtered = filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, priceRange, selectedSort]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'Best Seller': 'bg-orange-500',
      'New': 'bg-green-500',
      'Trending': 'bg-pink-500',
      'Popular': 'bg-blue-500',
      'Sale': 'bg-red-500',
      'Eco-Friendly': 'bg-emerald-500',
      'Classic': 'bg-gray-600',
      'Design Award': 'bg-purple-500',
      'Gaming': 'bg-indigo-500',
      'Wellness': 'bg-teal-500',
      'Luxury': 'bg-amber-600',
      'Smart Home': 'bg-cyan-500',
    };
    return colors[badge] || 'bg-gray-500';
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
            <motion.div variants={itemVariants} className="inline-block mb-3 sm:mb-4 md:mb-6">
              <span className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-xs sm:text-sm md:text-base">
                🛍️ Premium Collection
              </span>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight"
              variants={itemVariants}
            >
              Discover Amazing
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 px-4"
              variants={itemVariants}
            >
              Curated collection of premium items for every lifestyle
            </motion.p>

            <motion.div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-4" variants={itemVariants}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-orange-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <input
                  type="text"
                  placeholder="Search for products..."
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

      {/* Filters and Controls */}
      <motion.div
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-orange-200/50 shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
            <motion.div className="flex flex-wrap gap-1.5 sm:gap-2 overflow-x-auto pb-2 lg:pb-0" variants={containerVariants}>
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            <motion.div className="flex items-center gap-2 sm:gap-3 flex-wrap" variants={containerVariants}>
              <motion.select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white border border-orange-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs sm:text-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </motion.select>

              <motion.div className="flex bg-gray-100 rounded-xl p-1" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <motion.button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <List className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                </motion.button>
              </motion.div>

              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-orange-100 text-orange-600 rounded-xl hover:bg-orange-200 transition-colors text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SlidersHorizontal className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                Filters
              </motion.button>
            </motion.div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                      Price Range
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                        className="w-16 sm:w-20 px-2 py-1 border rounded text-xs sm:text-sm"
                        placeholder="Min"
                      />
                      <span>-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                        className="w-16 sm:w-20 px-2 py-1 border rounded text-xs sm:text-sm"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="mt-3 sm:mt-4 text-gray-600 text-xs sm:text-sm"
            variants={itemVariants}
          >
            Showing {filteredProducts.length} products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` for "${searchQuery}"`}
          </motion.div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-7xl"
        variants={containerVariants}
      >
        <AnimatePresence>
          <motion.div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8'
                : 'space-y-4 sm:space-y-6'
            }
            layout
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                layout
                className={`group relative bg-white rounded-3xl shadow-lg transition-all duration-500 ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6' : 'overflow-hidden'
                }`}
              >
                {/* Product Image */}
                <motion.div
                  className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-full sm:w-24 md:w-32 lg:w-48 h-24 sm:h-24 md:h-32 lg:h-48 flex-shrink-0' : 'h-40 sm:h-48 md:h-64'
                  } ${viewMode === 'grid' ? 'rounded-t-3xl' : 'rounded-2xl'}`}
                  variants={{
                    hover: { y: -5, transition: { duration: 0.3 } },
                  }}
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    variants={{
                      hover: { scale: 1.15, transition: { duration: 0.7 } },
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    variants={{
                      hover: { opacity: 1, transition: { duration: 0.3 } },
                    }}
                  ></motion.div>

                  <motion.div
                    className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4"
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
                      hover: { scale: 1.1, transition: { duration: 0.3 } },
                    }}
                  >
                    <span
                      className={`${getBadgeColor(product.badge)} text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-lg`}
                    >
                      {product.badge}
                    </span>
                  </motion.div>

                  <motion.div
                    className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex flex-col gap-1.5 sm:gap-2"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      hover: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, staggerChildren: 0.1 },
                      },
                    }}
                  >
                    <motion.button
                      className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 bg-white/90 hover:bg-orange-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <Heart className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                    </motion.button>
                    <motion.button
                      className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 bg-white/90 hover:bg-orange-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <Eye className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Product Info */}
                <motion.div
                  className={`${viewMode === 'list' ? 'flex-1 min-w-0' : 'p-3 sm:p-4 md:p-6'}`}
                  variants={{
                    hover: { y: -3, transition: { duration: 0.3 } },
                  }}
                >
                  <motion.div className="mb-1 sm:mb-2" variants={itemVariants}>
                    <span className="text-xs sm:text-sm text-orange-500 font-medium">{product.category}</span>
                  </motion.div>

                  <motion.h3
                    className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors line-clamp-2"
                    variants={{
                      hover: { y: -2, transition: { duration: 0.3 } },
                    }}
                  >
                    {product.name}
                  </motion.h3>

                  <motion.div
                    className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3"
                    variants={{
                      hover: { y: -2, transition: { duration: 0.3, delay: 0.1 } },
                    }}
                  >
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-[11px] sm:text-xs md:text-sm text-gray-600 truncate">
                      {product.rating} ({product.reviews})
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between mb-3 sm:mb-4 gap-1 sm:gap-2"
                    variants={{
                      hover: { y: -2, transition: { duration: 0.3, delay: 0.15 } },
                    }}
                  >
                    <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                      <span className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 truncate">
                        Rs{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[11px] sm:text-sm md:text-lg text-gray-500 line-through truncate">
                          Rs{product.originalPrice}
                        </span>
                      )}
                    </div>

                    {product.isSale && (
                      <div className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    )}
                  </motion.div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 sm:py-2.5 md:py-3 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base"
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)' }}
                    whileTap={{ scale: 0.95 }}
                    variants={{
                      hover: { y: -2, transition: { duration: 0.3, delay: 0.2 } },
                    }}
                  >
                    <ShoppingBag className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                    Add to Cart
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-12 sm:py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                No products found
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 px-4 text-sm sm:text-base">
                Try adjusting your filters or search terms
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange([0, 1000]);
                }}
                className="bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-2xl font-bold hover:bg-orange-600 transition-colors text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div
        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-10 sm:py-12 md:py-16 overflow-hidden"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center max-w-7xl">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6"
            variants={itemVariants}
          >
            Stay Updated with Latest Products
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 px-4"
            variants={itemVariants}
          >
            Be the first to know about new arrivals and exclusive deals
          </motion.p>

          <motion.div
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 sm:gap-3 px-4"
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Store;
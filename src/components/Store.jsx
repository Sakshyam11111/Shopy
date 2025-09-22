import React, { useState, useEffect } from 'react';
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
  ArrowRight
} from 'lucide-react';

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
    { value: 'rating', label: 'Highest Rated' }
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
      isSale: true
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
      isSale: true
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
      isSale: true
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
      isSale: false
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
      isSale: true
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
      isSale: true
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
      isSale: true
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
      isSale: true
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
      isSale: true
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
      isSale: true
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
      isSale: true
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
      isSale: true
    }
  ];

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
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
        // Keep original order for featured
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, priceRange, selectedSort]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
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
      'Smart Home': 'bg-cyan-500'
    };
    return colors[badge] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 md:mb-6">
              <span className="px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-sm md:text-base">
                🛍️ Premium Collection
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
              Discover Amazing
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 px-4">
              Curated collection of premium items for every lifestyle
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 pl-12 md:pl-14 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                />
                <Search className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 md:w-6 md:h-6" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 md:right-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-orange-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 md:px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Sort */}
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-3 md:px-4 py-2 bg-white border border-orange-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-500'
                  }`}
                >
                  <Grid className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-500'
                  }`}
                >
                  <List className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-orange-100 text-orange-600 rounded-xl hover:bg-orange-200 transition-colors text-sm"
              >
                <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5" />
                Filters
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                      className="w-20 px-2 py-1 border rounded text-sm"
                      placeholder="Min"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                      className="w-20 px-2 py-1 border rounded text-sm"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-4 text-gray-600 text-sm">
            Showing {filteredProducts.length} products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <div className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'
            : 'space-y-6'
        }>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                viewMode === 'list' ? 'flex gap-4 md:gap-6 p-4 md:p-6' : 'overflow-hidden'
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-32 h-32 md:w-48 md:h-48 flex-shrink-0' : 'h-48 md:h-64'
              } ${viewMode === 'grid' ? 'rounded-t-3xl' : 'rounded-2xl'}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4">
                  <span className={`${getBadgeColor(product.badge)} text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    {product.badge}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 flex flex-col gap-2">
                  <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-orange-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-orange-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-75 shadow-lg">
                    <Eye className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className={`${viewMode === 'list' ? 'flex-1 min-w-0' : 'p-4 md:p-6'}`}>
                <div className="mb-2">
                  <span className="text-sm text-orange-500 font-medium">{product.category}</span>
                </div>
                
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs md:text-sm text-gray-600 truncate">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-lg md:text-2xl font-bold text-gray-900 truncate">
                      Rs{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm md:text-lg text-gray-500 line-through truncate">
                        Rs{product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {product.isSale && (
                    <div className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full whitespace-nowrap">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 md:py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base">
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl md:text-6xl mb-4">🔍</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6 px-4">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setPriceRange([0, 1000]);
              }}
              className="bg-orange-500 text-white px-6 md:px-8 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Latest Products
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 px-4">
            Be the first to know about new arrivals and exclusive deals
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/30 bg-gray-100 font-semibold"
            />
            <button className="bg-gray-100 text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
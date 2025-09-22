import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, ChevronDown, X, Menu, Heart, Bell, MapPin, Star, Zap, LogOut, Settings, Package } from 'lucide-react';

const Navbar = ({ handleOrderPopup = () => {} }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
    setDropdownOpen(false);
  };

  // Sync currentUser with localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
      }
    } else {
      console.log('No currentUser found in localStorage');
    }
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setUserDropdownOpen(false);
    navigate('/');
    console.log('User logged out');
  };

  const menuItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Store', link: '/store' },
    { id: 4, name: 'Blog', link: '/blog' },
  ];

  const dropdownLinks = [
    { id: 1, name: 'Top Rated', link: '/top-rated', icon: '⭐', badge: 'Hot', color: 'text-red-500' },
    { id: 2, name: 'Kids Wear', link: '/kids-wear', icon: '👶', badge: 'New', color: 'text-blue-500' },
    { id: 3, name: 'Mens Wear', link: '/mens-wear', icon: '👔', badge: 'Sale', color: 'text-gray-600' },
    { id: 4, name: 'Women Wear', link: '/women-wear', icon: '👗', badge: 'Sale', color: 'text-purple-500' },
    { id: 5, name: 'Electronics', link: '/electronics', icon: '📱', badge: 'Tech', color: 'text-green-500' },
  ];

  const popularSearches = ['iPhone 15', 'Gaming Laptop', 'Nike Shoes', 'Winter Jacket', 'Smart Watch'];

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-xl bg-white/90 backdrop-blur-xl border-b border-gray-200/50'
          : 'shadow-lg bg-white/95 backdrop-blur-md border-b border-gray-100/50'
      }`}
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Free delivery in Kathmandu</span>
                <span className="sm:hidden">Free delivery</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Flash Sale - Up to 70% Off!</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="hidden sm:inline">🔥 Limited Time Offer</span>
              <button className="hover:text-orange-200 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-gray-100/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3">
              <button onClick={() => handleNavigation('/')} className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    S
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Shopy
                  </span>
                  <div className="text-xs text-gray-500 font-medium">Your Shopping Paradise</div>
                </div>
              </button>
            </div>

            {/* Enhanced Search Bar */}
            <div className="hidden md:flex flex-1 max-w-3xl mx-8 relative">
              <div className="relative w-full group">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-0 blur transition-opacity duration-300 ${
                    searchFocused ? 'opacity-20' : ''
                  }`}
                ></div>
                <input
                  type="text"
                  placeholder="Search 10M+ products, brands, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`relative w-full pl-14 pr-12 py-4 bg-gray-50/80 border-2 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                    searchFocused
                      ? 'border-orange-400 bg-white shadow-lg scale-105'
                      : 'border-gray-200/60 hover:border-gray-300'
                  }`}
                />
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                  <Search
                    className={`w-6 h-6 transition-all duration-300 ${
                      searchFocused ? 'text-orange-500 scale-110' : 'text-gray-400'
                    }`}
                  />
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:scale-110 transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}

                {/* Search Suggestions */}
                {(searchFocused || searchQuery) && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50">
                    {searchQuery ? (
                      <div className="p-4">
                        <div className="text-sm text-gray-500 mb-2">Search results for "{searchQuery}"</div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                              onClick={() => handleNavigation('/search-results')}
                            >
                              <Search className="w-4 h-4 text-gray-400" />
                              <span className="text-sm">{searchQuery} product {i}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="p-4">
                        <div className="text-sm text-gray-500 mb-3">Popular searches</div>
                        <div className="flex flex-wrap gap-2">
                          {popularSearches.map((term, i) => (
                            <button
                              key={i}
                              className="px-3 py-1 text-sm bg-gray-100 hover:bg-orange-100 hover:text-orange-600 rounded-full transition-colors duration-200"
                              onClick={() => {
                                setSearchQuery(term);
                                handleNavigation('/search-results');
                              }}
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Right Icons */}
            <div className="flex items-center gap-2">
              {/* Wishlist */}
              <button className="relative p-3 rounded-2xl bg-gray-100/80 hover:bg-red-100 hover:scale-110 transition-all duration-300 group">
                <Heart className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">
                  {currentUser?.stats?.wishlist || 0}
                </span>
              </button>

              {/* Cart */}
              <button
                onClick={handleOrderPopup}
                className="relative p-3 rounded-2xl bg-gradient-to-r from-orange-100 to-pink-100 hover:from-orange-200 hover:to-pink-200 hover:scale-110 transition-all duration-300 group"
              >
                <ShoppingCart className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                  {currentUser?.stats?.orders || 0}
                </span>
              </button>

              {/* Authentication Section */}
              {currentUser ? (
                /* Logged In User */
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-3 p-2 pr-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:amber-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-md">
                      {currentUser?.avatar || 'U'}
                    </div>
                    <div className="hidden lg:block text-left">
                      <div className="text-sm font-semibold text-white truncate max-w-24">
                        {currentUser?.fullName ? currentUser.fullName.split(' ')[0] : 'User'}
                      </div>
                      <div className="text-xs text-white capitalize">{currentUser?.type || 'user'}</div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                        userDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* User Dropdown */}
                  {userDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50">
                      {/* User Info Header */}
                      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 p-4 text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                            {currentUser?.avatar || 'U'}
                          </div>
                          <div>
                            <div className="font-bold">{currentUser?.fullName || 'User'}</div>
                            <div className="text-sm text-blue-100">{currentUser?.email || 'No email'}</div>
                            <span
                              className={`inline-block px-2 py-1 text-xs font-bold rounded-full mt-1 ${
                                currentUser?.type === 'admin'
                                  ? 'bg-purple-200 text-purple-800'
                                  : currentUser?.type === 'vip'
                                  ? 'bg-yellow-200 text-yellow-800'
                                  : 'bg-blue-200 text-blue-800'
                              }`}
                            >
                              {(currentUser?.type || 'user').toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="p-4 bg-gray-50">
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div>
                            <div className="font-bold text-gray-800">{currentUser?.stats?.orders || 0}</div>
                            <div className="text-xs text-gray-600">Orders</div>
                          </div>
                          <div>
                            <div className="font-bold text-gray-800">{currentUser?.stats?.wishlist || 0}</div>
                            <div className="text-xs text-gray-600">Wishlist</div>
                          </div>
                          <div>
                            <div className="font-bold text-gray-800">{currentUser?.stats?.points || 0}</div>
                            <div className="text-xs text-gray-600">Points</div>
                          </div>
                        </div>
                      </div>

                      {/* User Menu */}
                      <div className="p-2">
                        <button
                          onClick={() => handleNavigation('/profile')}
                          className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                        >
                          <User className="w-5 h-5" />
                          <span className="font-medium">My Profile</span>
                        </button>
                        <button
                          onClick={() => handleNavigation('#')}
                          className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                        >
                          <Package className="w-5 h-5" />
                          <span className="font-medium">My Orders</span>
                        </button>
                        <button
                          onClick={() => handleNavigation('#')}
                          className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                        >
                          <Heart className="w-5 h-5" />
                          <span className="font-medium">Wishlist</span>
                        </button>
                        <button
                          onClick={() => handleNavigation('#')}
                          className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                        >
                          <Settings className="w-5 h-5" />
                          <span className="font-medium">Settings</span>
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300"
                        >
                          <LogOut className="w-5 h-5" />
                          <span className="font-medium">Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Not Logged In */
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleNavigation('/login')}
                    className="hidden sm:block px-4 py-2 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleNavigation('/signup')}
                    className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-xl transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-3 rounded-2xl bg-gray-100/80 hover:bg-orange-100 hover:text-orange-500 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-6 mt-4">
            <ul className="flex items-center gap-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.link)}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl ${
                    dropdownOpen ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  <span className="text-base">🔥</span>
                  Trending
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Enhanced Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white border border-gray-200/50 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
                    dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Trending Categories</h3>
                    <p className="text-sm text-orange-100">Discover what's hot right now</p>
                  </div>

                  <div className="p-2">
                    <ul className="space-y-1">
                      {dropdownLinks.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => handleNavigation(item.link)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 rounded-xl transition-all duration-300 group"
                          >
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-lg">{item.icon}</span>
                            </div>
                            <div className="flex-1 text-left">
                              <div
                                className={`font-medium ${item.color} group-hover:text-orange-600 transition-colors duration-300`}
                              >
                                {item.name}
                              </div>
                            </div>
                            {item.badge && (
                              <span
                                className={`px-2 py-1 text-xs font-bold rounded-full ${
                                  item.badge === 'Hot'
                                    ? 'bg-red-100 text-red-600'
                                    : item.badge === 'New'
                                    ? 'bg-blue-100 text-blue-600'
                                    : item.badge === 'Sale'
                                    ? 'bg-purple-100 text-purple-600'
                                    : 'bg-green-100 text-green-600'
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 bg-gray-50/50">
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        handleNavigation('/categories');
                      }}
                      className="block w-full text-center px-4 py-3 text-sm font-semibold text-orange-600 hover:bg-orange-100 hover:text-orange-700 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Star className="w-4 h-4" />
                        View All Categories
                      </div>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-sm">
          <div className="bg-white w-80 h-full shadow-2xl overflow-y-auto">
            {/* Mobile Header */}
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Shopy</h3>
                    <p className="text-sm text-orange-100">Shopping Paradise</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Mobile User Info */}
              {currentUser ? (
                <div className="bg-white/20 rounded-xl p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg">
                      {currentUser?.avatar || 'U'}
                    </div>
                    <div>
                      <div className="font-semibold">{currentUser?.fullName || 'User'}</div>
                      <div className="text-sm text-orange-100">{currentUser?.email || 'No email'}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleNavigation('/login')}
                    className="flex-1 bg-white/20 hover:bg-white/30 py-2 px-4 rounded-xl font-semibold transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleNavigation('/signup')}
                    className="flex-1 bg-white hover:bg-orange-100 text-orange-600 py-2 px-4 rounded-xl font-semibold transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Search */}
            <div className="p-6 border-b border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-6">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.link)}
                    className="w-full flex items-center gap-4 py-4 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-2xl transition-all duration-300 group text-left"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                      <span className="text-lg">{item.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Categories */}
              <div className="mt-8">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">Categories</h4>
                <div className="space-y-2">
                  {dropdownLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.link)}
                      className="w-full flex items-center justify-between py-3 px-4 text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-2xl transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`px-2 py-1 text-xs font-bold rounded-full ${
                            item.badge === 'Hot'
                              ? 'bg-red-100 text-red-600'
                              : item.badge === 'New'
                              ? 'bg-blue-100 text-blue-600'
                              : item.badge === 'Sale'
                              ? 'bg-purple-100 text-purple-600'
                              : 'bg-green-100 text-green-600'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile User Menu (if logged in) */}
              {currentUser && (
                <div className="mt-8">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">Account</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleNavigation('/profile')}
                      className="w-full flex items-center gap-3 py-3 px-4 text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-2xl transition-all duration-300"
                    >
                      <User className="w-5 h-5" />
                      <span className="font-medium">My Profile</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('/orders')}
                      className="w-full flex items-center gap-3 py-3 px-4 text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-2xl transition-all duration-300"
                    >
                      <Package className="w-5 h-5" />
                      <span className="font-medium">My Orders</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('/wishlist')}
                      className="w-full flex items-center gap-3 py-3 px-4 text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-2xl transition-all duration-300"
                    >
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">Wishlist</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('/settings')}
                      className="w-full flex items-center gap-3 py-3 px-4 text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-2xl transition-all duration-300"
                    >
                      <Settings className="w-5 h-5" />
                      <span className="font-medium">Settings</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 py-3 px-4 text-red-600 hover:bg-red-50 rounded-2xl transition-all duration-300"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Mobile Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex justify-around">
                  <button
                    onClick={() => handleNavigation('/wishlist')}
                    className="flex flex-col items-center gap-2 p-3 text-gray-500 hover:text-orange-500 transition-colors"
                  >
                    <Heart className="w-6 h-6" />
                    <span className="text-xs font-medium">Wishlist</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('/profile')}
                    className="flex flex-col items-center gap-2 p-3 text-gray-500 hover:text-orange-500 transition-colors"
                  >
                    <User className="w-6 h-6" />
                    <span className="text-xs font-medium">Account</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('/alerts')}
                    className="flex flex-col items-center gap-2 p-3 text-gray-500 hover:text-orange-500 transition-colors"
                  >
                    <Bell className="w-6 h-6" />
                    <span className="text-xs font-medium">Alerts</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setUserDropdownOpen(false);
    navigate('/');
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

  const popularSearches = ['Earphone', 'Gaming Laptop', 'Nike Shoes', 'Winter Jacket', 'Smart Watch'];

  const navVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const mobileMenuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  return (
    <motion.div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-xl bg-white/90 backdrop-blur-xl border-b border-gray-200/50'
          : 'shadow-lg bg-white/95 backdrop-blur-md border-b border-gray-100/50'
      }`}
      initial="initial"
      animate="animate"
      variants={navVariants}
    >
      {/* Top Banner */}
      <motion.div
        className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-1.5 px-2 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                className="flex items-center gap-1 sm:gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Free delivery in Kathmandu</span>
                <span className="xs:hidden">Free delivery</span>
              </motion.div>
              <motion.div
                className="hidden sm:flex items-center gap-1 sm:gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Flash Sale - Up to 70% Off!</span>
              </motion.div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden xs:inline">🔥 Limited Time Offer</span>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-orange-200 transition-colors"
              >
                <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <div className="border-b border-gray-100/50">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-1 sm:gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={() => handleNavigation('/')} className="flex items-center gap-1 sm:gap-2 group">
                <div className="relative">
                  <motion.div
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-black text-base sm:text-lg md:text-xl"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    S
                  </motion.div>
                  <motion.div
                    className="absolute -inset-1.5 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-xl blur"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute top-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full border-1.5 border-white"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Shopy
                  </span>
                  <div className="text-xs text-gray-500 font-medium">Your Shopping Paradise</div>
                </div>
              </button>
            </motion.div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xs sm:max-w-md lg:max-w-xl mx-2 sm:mx-4 lg:mx-6 relative">
              <motion.div
                className="relative w-full group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur"
                  animate={{ opacity: searchFocused ? 0.2 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.input
                  type="text"
                  placeholder="Search 10M+ products, brands, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`relative w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-2 sm:py-2.5 md:py-3 bg-gray-50/80 border-2 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                    searchFocused
                      ? 'border-orange-400 bg-white shadow-lg'
                      : 'border-gray-200/60 hover:border-gray-300'
                  }`}
                  animate={{ scale: searchFocused ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2"
                  animate={{ scale: searchFocused ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Search className={`w-4 h-4 sm:w-5 sm:h-5 ${searchFocused ? 'text-orange-500' : 'text-gray-400'}`} />
                </motion.div>
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {(searchFocused || searchQuery) && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50 max-h-80"
                    >
                      {searchQuery ? (
                        <div className="p-2 sm:p-3">
                          <div className="text-xs sm:text-sm text-gray-500 mb-2">Search results for "{searchQuery}"</div>
                          <div className="space-y-1 sm:space-y-2">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex items-center gap-2 sm:gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                onClick={() => handleNavigation('/search-results')}
                              >
                                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                                <span className="text-xs sm:text-sm">{searchQuery} product {i}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="p-2 sm:p-3">
                          <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Popular searches</div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {popularSearches.map((term, i) => (
                              <motion.button
                                key={i}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 hover:bg-orange-100 hover:text-orange-600 rounded-full"
                                onClick={() => {
                                  setSearchQuery(term);
                                  handleNavigation('#');
                                }}
                              >
                                {term}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-1.5 sm:p-2 rounded-xl bg-gray-100/80 hover:bg-red-100"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-red-500" />
                <motion.span
                  className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-500 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center font-bold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  {currentUser?.stats?.wishlist || 0}
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOrderPopup}
                className="relative p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-orange-100 to-pink-100 hover:from-orange-200 hover:to-pink-200"
              >
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </motion.div>
                <motion.span
                  className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center font-bold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {currentUser?.stats?.orders || 0}
                </motion.span>
              </motion.button>

              {currentUser ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400"
                  >
                    <motion.div
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-xs sm:text-base shadow-md"
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {currentUser?.avatar || 'U'}
                    </motion.div>
                    <div className="hidden lg:block text-left">
                      <div className="text-xs font-semibold text-white truncate max-w-16 sm:max-w-20">
                        {currentUser?.fullName ? currentUser.fullName.split(' ')[0] : 'User'}
                      </div>
                      <div className="text-[10px] text-white capitalize">{currentUser?.type || 'user'}</div>
                    </div>
                    <motion.div
                      animate={{ rotate: userDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {userDropdownOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full right-0 mt-2 w-56 sm:w-64 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50"
                      >
                        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 p-2 sm:p-3 text-white">
                          <div className="flex items-center gap-2">
                            <motion.div
                              className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-base sm:text-lg"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {currentUser?.avatar || 'U'}
                            </motion.div>
                            <div>
                              <div className="font-bold text-xs sm:text-sm">{currentUser?.fullName || 'User'}</div>
                              <div className="text-[10px] sm:text-xs text-blue-100 truncate max-w-32 sm:max-w-36">{currentUser?.email || 'No email'}</div>
                              <span
                                className={`inline-block px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded-full mt-1 ${
                                  currentUser?.type === 'admin'
                                    ? 'bg-purple-200 text-purple-800'
                                    : currentUser?.type === 'vip'
                                    ? 'bg-yellow-200 text-yellow-800'
                                    : 'bg-white text-gray-500'
                                }`}
                              >
                                {(currentUser?.type || 'user').toUpperCase()}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-2 sm:p-3 bg-gray-50">
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                              <div className="font-bold text-gray-800 text-xs sm:text-sm">{currentUser?.stats?.orders || 0}</div>
                              <div className="text-[10px] sm:text-xs text-gray-600">Orders</div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                              <div className="font-bold text-gray-800 text-xs sm:text-sm">{currentUser?.stats?.wishlist || 0}</div>
                              <div className="text-[10px] sm:text-xs text-gray-600">Wishlist</div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                              <div className="font-bold text-gray-800 text-xs sm:text-sm">{currentUser?.stats?.points || 0}</div>
                              <div className="text-[10px] sm:text-xs text-gray-600">Points</div>
                            </motion.div>
                          </div>
                        </div>

                        <div className="p-1 sm:p-2">
                          {[
                            { icon: User, label: 'My Profile', link: '/profile' },
                            { icon: Package, label: 'My Orders', link: '/orders' },
                            { icon: Heart, label: 'Wishlist', link: '/wishlist' },
                            { icon: Settings, label: 'Settings', link: '/settings' },
                            { icon: LogOut, label: 'Logout', link: null, onClick: handleLogout, color: 'text-red-600 hover:bg-red-50' },
                          ].map((item, index) => (
                            <motion.button
                              key={index}
                              custom={index}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => (item.link ? handleNavigation(item.link) : item.onClick())}
                              className={`w-full flex items-center gap-2 px-2 sm:px-3 py-2 text-xs sm:text-sm ${item.color || 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600'} rounded-lg`}
                            >
                              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              <span className="font-medium">{item.label}</span>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigation('/login')}
                    className="hidden sm:block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg"
                  >
                    Login
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigation('/signup')}
                    className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-lg"
                  >
                    Sign Up
                  </motion.button>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-1.5 sm:p-2 rounded-xl bg-gray-100/80 hover:bg-orange-100 hover:text-orange-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
            <ul className="flex items-center gap-1 sm:gap-2">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigation(item.link)}
                    className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg"
                  >
                    {item.name}
                  </motion.button>
                </motion.li>
              ))}
              <li className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg ${
                    dropdownOpen ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  <span className="text-sm sm:text-base">🔥</span>
                  Trending
                  <motion.div
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 sm:w-64 bg-white border border-gray-200/50 rounded-xl shadow-xl overflow-hidden z-50"
                    >
                      <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 sm:p-3 text-white">
                        <h3 className="font-bold text-sm sm:text-base mb-1">Trending Categories</h3>
                        <p className="text-xs text-orange-100">Discover what's hot right now</p>
                      </div>
                      <div className="p-1 sm:p-2">
                        <ul className="space-y-1">
                          {dropdownLinks.map((item, index) => (
                            <motion.li
                              key={item.id}
                              custom={index}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <button
                                onClick={() => handleNavigation(item.link)}
                                className="w-full flex items-center gap-2 px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 rounded-lg group"
                              >
                                <motion.div
                                  className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-100 rounded-lg flex items-center justify-center"
                                  whileHover={{ scale: 1.1, backgroundColor: '#fed7aa' }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <span className="text-sm sm:text-base">{item.icon}</span>
                                </motion.div>
                                <div className="flex-1 text-left">
                                  <div className={`font-medium ${item.color} group-hover:text-orange-600 text-xs sm:text-sm`}>{item.name}</div>
                                </div>
                                {item.badge && (
                                  <span
                                    className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded-full ${
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
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="border-t border-gray-100 bg-gray-50/50"
                      >
                        <button
                          onClick={() => {
                            setDropdownOpen(false);
                            handleNavigation('#');
                          }}
                          className="block w-full text-center px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-orange-600 hover:bg-orange-100 hover:text-orange-700"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            View All Categories
                          </div>
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          >
            <motion.div
              className="bg-white w-72 sm:w-80 h-full shadow-2xl overflow-y-auto"
              variants={mobileMenuVariants}
            >
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 sm:p-4 text-white">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      S
                    </motion.div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">Shopy</h3>
                      <p className="text-[10px] sm:text-xs text-orange-100">Shopping Paradise</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.button>
                </div>

                {currentUser ? (
                  <motion.div
                    className="bg-white/20 rounded-lg p-2 sm:p-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-xs sm:text-base">
                        {currentUser?.avatar || 'U'}
                      </div>
                      <div>
                        <div className="font-semibold text-xs sm:text-sm">{currentUser?.fullName || 'User'}</div>
                        <div className="text-[10px] sm:text-xs text-orange-100 truncate max-w-40 sm:max-w-48">{currentUser?.email || 'No email'}</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavigation('/login')}
                      className="flex-1 bg-white/20 hover:bg-white/30 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-semibold text-xs sm:text-sm"
                    >
                      Login
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavigation('/signup')}
                      className="flex-1 bg-white hover:bg-orange-100 text-orange-600 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-semibold text-xs sm:text-sm"
                    >
                      Sign Up
                    </motion.button>
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4 border-b border-gray-100">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-2 sm:py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs sm:text-sm"
                  />
                  <motion.div
                    className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2"
                    animate={{ scale: searchQuery ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                  </motion.div>
                  <AnimatePresence>
                    {searchQuery && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
                <AnimatePresence>
                  {(searchFocused || searchQuery) && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mt-2 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50 max-h-80"
                    >
                      {searchQuery ? (
                        <div className="p-2 sm:p-3">
                          <div className="text-xs sm:text-sm text-gray-500 mb-2">Search results for "{searchQuery}"</div>
                          <div className="space-y-1 sm:space-y-2">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                onClick={() => handleNavigation('/search-results')}
                              >
                                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                                <span className="text-xs sm:text-sm">{searchQuery} product {i}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="p-2 sm:p-3">
                          <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Popular searches</div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {popularSearches.map((term, i) => (
                              <motion.button
                                key={i}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 hover:bg-orange-100 hover:text-orange-600 rounded-full"
                                onClick={() => {
                                  setSearchQuery(term);
                                  handleNavigation('/search-results');
                                }}
                              >
                                {term}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-3 sm:p-4">
                <div className="space-y-1 sm:space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavigation(item.link)}
                      className="w-full flex items-center gap-2 sm:gap-3 py-2 sm:py-3 px-2 sm:px-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-lg group text-xs sm:text-sm"
                    >
                      <motion.div
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                        whileHover={{ backgroundColor: '#fed7aa', scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-sm sm:text-base">{item.name.charAt(0)}</span>
                      </motion.div>
                      <span className="font-medium">{item.name}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 px-2 sm:px-3">Categories</h4>
                  <div className="space-y-1 sm:space-y-2">
                    {dropdownLinks.map((item, index) => (
                      <motion.button
                        key={item.id}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavigation(item.link)}
                        className="w-full flex items-center justify-between py-2 px-2 sm:px-3 text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 rounded-lg group text-xs sm:text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm sm:text-base">{item.icon}</span>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        {item.badge && (
                          <span
                            className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded-full ${
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
                      </motion.button>
                    ))}
                  </div>
                </div>

                {currentUser && (
                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 px-2 sm:px-3">Account</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {[
                        { icon: User, label: 'My Profile', link: '/profile' },
                        { icon: Package, label: 'My Orders', link: '/orders' },
                        { icon: Heart, label: 'Wishlist', link: '/wishlist' },
                        { icon: Settings, label: 'Settings', link: '/settings' },
                        { icon: LogOut, label: 'Logout', link: null, onClick: handleLogout, color: 'text-red-600 hover:bg-red-50' },
                      ].map((item, index) => (
                        <motion.button
                          key={index}
                          custom={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => (item.link ? handleNavigation(item.link) : item.onClick())}
                          className={`w-full flex items-center gap-2 py-2 px-2 sm:px-3 ${item.color || 'text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600'} rounded-lg text-xs sm:text-sm`}
                        >
                          <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="font-medium">{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex justify-around">
                    {[
                      { icon: Heart, label: 'Wishlist', link: '/wishlist' },
                      { icon: User, label: 'Account', link: '/profile' },
                      { icon: Bell, label: 'Alerts', link: '/alerts' },
                    ].map((item, index) => (
                      <motion.button
                        key={index}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavigation(item.link)}
                        className="flex flex-col items-center gap-1 p-1.5 sm:p-2 text-gray-500 hover:text-orange-500"
                      >
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-[10px] sm:text-xs font-medium">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
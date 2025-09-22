import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Star, 
  ShoppingBag, 
  Heart,
  Sparkles,
  TrendingUp,
  Gift,
  Shield,
  Truck
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.7
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3
    }
  })
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero = ({ handleOrderPopup = () => {} }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const imageList = [
    {
      id: 1,
      img: "https://i.pinimg.com/1200x/c2/d7/69/c2d769fa9088d3d406dd2a0ac30b6fa2.jpg",
      title: "Up to 50% off on all Men's Wear",
      description: "Limited time offer! Shop now and save big on premium fashion.",
      badge: "TRENDING",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-400/30 to-amber-400/30"
    },
    {
      id: 2,
      img: "https://i.pinimg.com/1200x/04/76/19/0476193b8160063e2cf77380ae7e37da.jpg",
      title: "30% off on all Women's Wear",
      description: "Exclusive deals await! Don't miss out on elegant styles.",
      badge: "EXCLUSIVE",
      color: "from-orange-600 to-red-500",
      bgColor: "from-orange-500/30 to-red-400/30"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=600&fit=crop",
      title: "70% off on all Products Sale",
      description: "Massive clearance sale! Grab your favorites now.",
      badge: "MEGA SALE",
      color: "from-orange-700 to-amber-600",
      bgColor: "from-orange-600/30 to-amber-500/30"
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % imageList.length);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  };

  const currentData = imageList[currentSlide];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className={`absolute top-20 left-20 w-96 h-96 bg-gradient-to-r ${currentData.bgColor} rounded-full blur-3xl opacity-60`}
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-[500px] h-[500px] bg-gradient-to-r from-amber-400/25 to-orange-400/25 rounded-full blur-3xl opacity-70"
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-300/15 to-amber-300/15 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl opacity-50"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-2xl opacity-60"
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Enhanced Dynamic Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <motion.circle 
                cx="3" 
                cy="3" 
                r="1.5" 
                fill="#f97316" 
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.circle 
                cx="22" 
                cy="22" 
                r="1" 
                fill="#fb923c" 
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.circle 
                cx="12" 
                cy="18" 
                r="0.5" 
                fill="#fdba74" 
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroPattern)" />
        </svg>
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          
          {/* Left Content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-8"
            >
              
              {/* Enhanced Badge */}
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border-2 border-orange-200 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.3)"
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {currentData.badge === 'TRENDING' && <TrendingUp className="w-5 h-5 text-orange-600" />}
                  {currentData.badge === 'EXCLUSIVE' && <Gift className="w-5 h-5 text-orange-600" />}
                  {currentData.badge === 'MEGA SALE' && <Sparkles className="w-5 h-5 text-orange-600" />}
                </motion.div>
                <span className="text-sm font-semibold text-gray-800">{currentData.badge}</span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {currentData.title}
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-lg text-gray-600 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {currentData.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  onClick={handleOrderPopup}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.4)",
                    background: "linear-gradient(to right, #ea580c, #d97706)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <span>Shop Now</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                
                <motion.button 
                  className="group inline-flex items-center gap-2 px-6 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#f97316",
                    color: "#f97316"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Explore</span>
                </motion.button>
              </motion.div>

              {/* Feature Highlights */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { icon: Shield, title: "Quality Guarantee", subtitle: "Premium Products" },
                  { icon: Truck, title: "Free Shipping", subtitle: "On orders over Rs50" },
                  { icon: Gift, title: "Exclusive Offers", subtitle: "Limited time deals" },
                  { icon: Star, title: "Top Rated", subtitle: "5-star reviews" },
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="group flex items-center gap-3"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="p-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </motion.div>
                    <div>
                      <p className="text-base font-bold text-gray-800">{feature.title}</p>
                      <p className="text-sm text-orange-600 font-medium">{feature.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Right Content - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
              >
                
                {/* Enhanced Image Container */}
                <div className="relative group">
                  {/* Enhanced Floating Background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${currentData.color} rounded-3xl blur-3xl opacity-25`}
                    variants={pulseVariants}
                    animate="animate"
                    whileHover={{ opacity: 0.35, scale: 1.1 }}
                  />
                  
                  {/* Secondary glow */}
                  <motion.div 
                    className={`absolute inset-4 bg-gradient-to-r ${currentData.color} rounded-3xl blur-2xl opacity-15`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    whileHover={{ opacity: 0.25, scale: 1.05 }}
                  />
                  
                  {/* Main Image Container */}
                  <motion.div 
                    className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      rotateY: 5
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.img
                      src={currentData.img}
                      alt={currentData.title}
                      className="w-full h-[550px] object-cover rounded-2xl shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop";
                      }}
                    />
                    
                    {/* Enhanced Sale Badge */}
                    <motion.div 
                      className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-base shadow-lg border-2 border-white"
                      animate={{ 
                        y: [-5, 5, -5],
                        rotate: [-2, 2, -2]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="drop-shadow-sm">SALE</span>
                    </motion.div>
                    
                    {/* Enhanced Price Tag */}
                    <motion.div 
                      className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-orange-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <p className="text-sm text-orange-600 font-semibold">Starting from</p>
                      <p className="text-3xl font-black text-gray-900">
                        <span className="text-lg">Rs</span> 999
                      </p>
                    </motion.div>

                    {/* Quality Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      Premium
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Floating Elements */}
                  <motion.div 
                    className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white/50"
                    variants={floatingVariants}
                    animate="animate"
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white/50"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-10 h-10 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* New floating elements */}
                  <motion.div 
                    className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      y: [-15, 15, -15],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5 
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Star className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Enhanced Slide Indicators */}
        <motion.div 
          className="flex justify-center mt-16 space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {imageList.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? `w-16 bg-gradient-to-r ${currentData.color} shadow-lg` 
                  : 'w-4 bg-orange-200 shadow-md'
              }`}
              whileHover={{ 
                scale: 1.2,
                backgroundColor: index !== currentSlide ? "#fed7aa" : undefined
              }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Enhanced Bottom Wave */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <svg viewBox="0 0 1200 120" className="w-full h-24 fill-white">
          <motion.path 
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
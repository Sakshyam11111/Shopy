import React from 'react';
import { motion } from 'framer-motion';
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa";

// Mock image for demonstration
const BannerImg = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    {
      icon: GrSecure,
      text: "Premium Quality",
      description: "Certified products",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: IoFastFood,
      text: "Lightning Fast",
      description: "24hr delivery",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: GiFoodTruck,
      text: "Secure Payment",
      description: "100% protected",
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      icon: MdLocalOffer,
      text: "Best Deals",
      description: "Exclusive offers",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-pink-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="min-h-screen flex justify-center items-center py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text details section */}
            <motion.div 
              className="flex flex-col justify-center gap-10 xl:order-1 order-2"
              variants={containerVariants}
            >
              {/* Header section */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm font-medium">Trusted by 50K+ customers</span>
                </div>
                
                <motion.h1 
                  className="text-5xl sm:text-6xl xl:text-7xl font-black leading-tight"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
                    Winter
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    Collection
                  </span>
                </motion.h1>

                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-xl font-bold">
                    UP TO 50% OFF
                  </div>
                  <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                    Limited Time
                  </div>
                </motion.div>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed max-w-lg font-light"
              >
                Discover our exclusive winter collection featuring premium quality products at incredible prices. Experience luxury shopping with unmatched service.
              </motion.p>

              {/* Features grid */}
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`${feature.bgColor} p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 group cursor-pointer`}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="text-2xl text-white" />
                    </motion.div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">
                      {feature.text}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  className="bg-gradient-to-r from-slate-900 to-gray-800 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Explore Collection</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                <motion.button
                  className="border-2 border-gray-300 text-gray-700 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Catalog
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image section */}
            <motion.div 
              className="flex justify-center xl:justify-center xl:order-2 order-1"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative">
                <motion.div
                  variants={imageVariants}
                  className="relative"
                >
                  <img
                    src={BannerImg}
                    alt="Winter Collection"
                    className="w-full max-w-[550px] h-[500px] object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
                  
                  {/* Floating sale badge */}
                  <motion.div 
                    className="absolute -top-6 -right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-lg font-black">50%</span>
                    <span className="text-xs font-bold">OFF</span>
                  </motion.div>

                  {/* Customer review floating card */}
                  <motion.div 
                    className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl max-w-48"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Sarah M.</p>
                        <div className="flex text-yellow-400 text-xs">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      "Amazing quality and super fast delivery! Highly recommend."
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
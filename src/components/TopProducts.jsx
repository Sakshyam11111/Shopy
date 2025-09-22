import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";
import { 
  FaStar, 
  FaHeart, 
  FaShoppingCart, 
  FaEye,
  FaRegHeart 
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "Premium cotton casual shirt with modern fit and comfortable wear for everyday style.",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviews: 127,
    category: "Men's Fashion",
    colors: ["#3B82F6", "#EF4444", "#10B981"],
    isNew: true,
    isTrending: false,
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description: "Stylish printed shirt with vibrant patterns and premium fabric for a bold statement look.",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 203,
    category: "Men's Fashion",
    colors: ["#8B5CF6", "#F59E0B", "#6366F1"],
    isNew: false,
    isTrending: true,
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description: "Elegant women's blouse with delicate detailing and breathable fabric for all-day comfort.",
    price: 44.99,
    originalPrice: 59.99,
    rating: 4.3,
    reviews: 89,
    category: "Women's Fashion",
    colors: ["#EC4899", "#06B6D4", "#F97316"],
    isNew: true,
    isTrending: false,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
      delay: 0.3
    }
  }
};

const TopProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (productId) => {
    setWishlist(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
        >
          <FaStar
            className={`w-4 h-4 ${
              index < Math.floor(rating) 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${index === Math.floor(rating) && rating % 1 >= 0.5 ? 'text-yellow-400 fill-current' : ''}`}
          />
        </motion.div>
      ))}
      <span className="text-xs text-gray-500 ml-1">({rating})</span>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            variants={headerVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-rose-100 text-orange-700 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            Top Rated Products for You
          </motion.span>
          
          <motion.h2 
            variants={headerVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Best Products
          </motion.h2>
          
          <motion.p 
            variants={headerVariants}
            className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Discover our handpicked collection of premium products designed to elevate your style and lifestyle
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {ProductsData.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl max-w-sm mx-auto"
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              {/* Product Image Container */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  <AnimatePresence>
                    {product.isNew && (
                      <motion.span 
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-white rounded-full"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        ></motion.div>
                        New Arrival
                      </motion.span>
                    )}
                    {product.isTrending && (
                      <motion.span 
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs font-semibold rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <FaStar className="w-3 h-3 fill-current" />
                        </motion.div>
                        Trending
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Quick Actions */}
                <motion.div 
                  className="absolute top-4 right-4 z-10 flex flex-col gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    x: hoveredProduct === product.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-200"
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: "#f97316",
                      color: "white"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      {wishlist[product.id] ? (
                        <motion.div
                          key="filled"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <FaHeart className="w-4 h-4 fill-current" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="outline"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <FaRegHeart className="w-4 h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  
                  <motion.button 
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-200"
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: "#3b82f6",
                      color: "white"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye className="w-4 h-4" />
                  </motion.button>
                </motion.div>

                {/* Image */}
                <motion.img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Color Options */}
                <motion.div 
                  className="absolute bottom-4 left-4 right-4 flex justify-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    y: hoveredProduct === product.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {product.colors.map((color, index) => (
                    <motion.button
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-white/50 shadow-md"
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredProduct === product.id ? 1 : 0,
                        opacity: hoveredProduct === product.id ? 1 : 0
                      }}
                      transition={{ delay: index * 0.1 }}
                    />
                  ))}
                </motion.div>

                {/* Price Overlay */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    y: hoveredProduct === product.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-sm opacity-90">From</p>
                      <p className="text-2xl font-bold">Rs{product.price}</p>
                      <p className="text-xs line-through opacity-75">Rs{product.originalPrice}</p>
                    </motion.div>
                    <motion.button 
                      className="p-3 bg-white text-black rounded-full"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#f3f4f6"
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ x: 20 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <FaShoppingCart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                {/* Category */}
                <motion.p 
                  className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {product.category}
                </motion.p>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 transition-colors duration-200"
                  whileHover={{ color: "#f97316" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {product.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {product.description}
                </motion.p>

                {/* Rating & Reviews */}
                <motion.div 
                  className="flex items-center justify-between mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-500">
                    {product.reviews} reviews
                  </span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button 
                    className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 px-6 rounded-xl font-semibold shadow-lg"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    Add to Cart
                  </motion.button>
                  
                  <motion.button 
                    className="p-3 bg-gray-100 rounded-xl"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#e5e7eb"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold shadow-lg"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#f97316",
              color: "#f97316",
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Load More Products</span>
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopProducts;
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Img1 from '../assets/women/women.png';
import Img2 from '../assets/women/women2.jpg';
import Img3 from '../assets/women/women3.jpg';
import Img4 from '../assets/women/women4.jpg';
import {
  FaStar,
  FaHeart,
  FaEye,
  FaRegHeart,
  FaCircle,
  FaTag,
} from 'react-icons/fa6';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Women Ethnic Wear',
    rating: 5.0,
    price: 89.99,
    originalPrice: 119.99,
    color: 'white',
    category: 'Ethnic Wear',
    isNew: true,
    colors: ['#FFFFFF', '#F59E0B', '#3B82F6'],
    reviews: 156,
  },
  {
    id: 2,
    img: Img2,
    title: 'Women Western Dress',
    rating: 4.5,
    price: 129.99,
    originalPrice: 159.99,
    color: 'red',
    category: 'Western Wear',
    isNew: false,
    colors: ['#EF4444', '#F59E0B', '#10B981'],
    reviews: 234,
    isTrending: true,
  },
  {
    id: 3,
    img: Img3,
    title: 'Designer Sunglasses',
    rating: 4.7,
    price: 199.99,
    originalPrice: 249.99,
    color: 'brown',
    category: 'Accessories',
    isNew: true,
    colors: ['#92400E', '#F59E0B', '#1F2937'],
    reviews: 89,
  },
  {
    id: 4,
    img: Img4,
    title: 'Printed T-Shirt',
    rating: 4.4,
    price: 39.99,
    originalPrice: 59.99,
    color: 'yellow',
    category: 'Casual Wear',
    isNew: false,
    colors: ['#FBBF24', '#F59E0B', '#06B6D4'],
    reviews: 301,
  },
];

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

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
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
      delay: 0.2
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [wishlist, setWishlist] = useState({});
  const navigate = useNavigate();

  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const StarRating = ({ rating, size = 'sm' }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
        >
          <FaStar
            className={`${
              size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'
            } ${
              index < Math.floor(rating)
                ? 'text-amber-400 fill-current'
                : 'text-gray-300'
            } ${
              index === Math.floor(rating) && rating % 1 >= 0.5
                ? 'text-amber-400 fill-current'
                : ''
            }`}
          />
        </motion.div>
      ))}
      <span
        className={`text-xs ${size === 'sm' ? 'text-gray-500' : 'text-gray-600'}`}
      >
        ({rating})
      </span>
    </div>
  );

  const handleViewAll = () => {
    navigate('/store');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={headerVariants}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-700 rounded-full border border-orange-200/50 mb-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaTag className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-semibold">Top Selling Products</span>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Featured Collection
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Discover our curated selection of premium fashion items designed to
            elevate your wardrobe with timeless style and modern elegance
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {ProductsData.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100/50 max-w-sm mx-auto"
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              {/* Product Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50/70 to-white/50">
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                  <AnimatePresence>
                    {product.isNew && (
                      <motion.span
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FaCircle className="w-2 h-2" />
                        </motion.div>
                        New Arrival
                      </motion.span>
                    )}
                    {product.isTrending && (
                      <motion.span
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <FaStar className="w-3 h-3" />
                        </motion.div>
                        Trending
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Quick Actions */}
                <motion.div
                  className="absolute top-3 right-3 z-10 flex flex-col gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    x: hoveredProduct === product.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-2 bg-white/90 rounded-full shadow-lg transition-all duration-200"
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
                          <FaHeart className="w-4 h-4 text-red-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="outline"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <FaRegHeart className="w-4 h-4 text-gray-600" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  
                  <motion.button 
                    className="p-2 bg-white/90 rounded-full shadow-lg transition-all duration-200"
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: "#3b82f6",
                      color: "white"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye className="w-4 h-4 text-gray-600" />
                  </motion.button>
                </motion.div>

                {/* Image */}
                <motion.img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Color Options */}
                <motion.div
                  className="absolute bottom-3 left-3 right-3 flex justify-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    y: hoveredProduct === product.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {product.colors.map((color, colorIndex) => (
                    <motion.button
                      key={colorIndex}
                      className="w-5 h-5 rounded-full border-2 border-white/50 shadow-sm"
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredProduct === product.id ? 1 : 0,
                        opacity: hoveredProduct === product.id ? 1 : 0
                      }}
                      transition={{ delay: colorIndex * 0.1 }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="p-5">
                {/* Category */}
                <motion.p 
                  className="text-xs text-orange-600 uppercase tracking-wider font-medium mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {product.category}
                </motion.p>

                {/* Title */}
                <motion.h3 
                  className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 transition-colors duration-200"
                  whileHover={{ color: "#f97316" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {product.title}
                </motion.h3>

                {/* Price */}
                <motion.div 
                  className="flex items-center gap-3 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-xl font-bold text-gray-900">
                    Rs{product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    Rs{product.originalPrice}
                  </span>
                  <motion.span 
                    className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    -25%
                  </motion.span>
                </motion.div>

                {/* Rating & Reviews */}
                <motion.div 
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <StarRating rating={product.rating} size="sm" />
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    {product.reviews} reviews
                  </span>
                </motion.div>

                {/* Color Indicator */}
                <motion.div 
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-xs text-gray-500">Color:</span>
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-gray-200"
                    style={{
                      backgroundColor:
                        product.color === 'white'
                          ? '#FFFFFF'
                          : product.color === 'red'
                          ? '#EF4444'
                          : product.color === 'brown'
                          ? '#92400E'
                          : '#FBBF24',
                    }}
                    whileHover={{ scale: 1.2 }}
                  />
                  <span className="text-xs text-gray-600 capitalize">
                    {product.color}
                  </span>
                </motion.div>

                {/* Action Button */}
                <motion.button 
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <FaShoppingCart className="w-4 h-4" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={handleViewAll}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold shadow-lg"
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(to right, #f97316, #d97706)",
              color: "white",
              borderColor: "transparent",
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Products</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: "1K+", text: "Happy Customers", color: "orange" },
            { number: "500+", text: "Premium Products", color: "green" },
            { number: "98%", text: "Satisfaction Rate", color: "orange" },
            { number: "24/7", text: "Customer Support", color: "orange" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={statsVariants}
              className={`text-center p-6 bg-gradient-to-br ${
                stat.color === 'green' 
                  ? 'from-green-500/10 to-emerald-500/10 border-green-200/30' 
                  : 'from-orange-500/10 to-amber-500/10 border-orange-200/30'
              } rounded-2xl border`}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className={`text-3xl font-bold mb-2 ${
                  stat.color === 'green' ? 'text-green-600' : 'text-orange-600'
                }`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-600">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
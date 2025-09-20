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
        <FaStar
          key={index}
          className={`w-4 h-4 ${
            index < Math.floor(rating) 
              ? 'text-yellow-400 fill-current' 
              : 'text-gray-300'
          } ${index === Math.floor(rating) && rating % 1 >= 0.5 ? 'text-yellow-400 fill-current' : ''}`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">({rating})</span>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span 
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-rose-100 text-orange-700 rounded-full text-sm font-medium mb-4"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full"></div>
            Top Rated Products for You
          </span>
          
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
          >
            Best Products
          </h2>
          
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Discover our handpicked collection of premium products designed to elevate your style and lifestyle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProductsData.map((product) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 max-w-sm mx-auto"
            >
              {/* Product Image Container */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      New Arrival
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      <FaStar className="w-3 h-3 fill-current" />
                      Trending
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                  >
                    {wishlist[product.id] ? (
                      <FaHeart className="w-4 h-4 fill-current" />
                    ) : (
                      <FaRegHeart className="w-4 h-4" />
                    )}
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-200 transform hover:scale-110">
                    <FaEye className="w-4 h-4" />
                  </button>
                </div>

                {/* Image */}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 absolute inset-0"
                />

                {/* Color Options */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-white/50 shadow-md hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">From</p>
                      <p className="text-2xl font-bold">Rs{product.price}</p>
                      <p className="text-xs line-through opacity-75">Rs{product.originalPrice}</p>
                    </div>
                    <button className="p-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-200 transform hover:scale-110">
                      <FaShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                {/* Category */}
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                  {product.category}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Rating & Reviews */}
                <div className="flex items-center justify-between mb-6">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-500">
                    {product.reviews} reviews
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                    Add to Cart
                  </button>
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200 transform hover:scale-110">
                    <FaEye className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Load More Products</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
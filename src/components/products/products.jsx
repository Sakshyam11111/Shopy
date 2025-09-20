import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { 
  FaStar, 
  FaHeart, 
  FaEye,
  FaRegHeart,
  FaCircle,
  FaTag
} from "react-icons/fa6";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic Wear",
    rating: 5.0,
    price: 89.99,
    originalPrice: 119.99,
    color: "white",
    category: "Ethnic Wear",
    aosDelay: "0",
    isNew: true,
    colors: ["#FFFFFF", "#F59E0B", "#3B82F6"],
    reviews: 156,
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western Dress",
    rating: 4.5,
    price: 129.99,
    originalPrice: 159.99,
    color: "red",
    category: "Western Wear",
    aosDelay: "200",
    isNew: false,
    colors: ["#EF4444", "#F59E0B", "#10B981"],
    reviews: 234,
    isTrending: true,
  },
  {
    id: 3,
    img: Img3,
    title: "Designer Sunglasses",
    rating: 4.7,
    price: 199.99,
    originalPrice: 249.99,
    color: "brown",
    category: "Accessories",
    aosDelay: "400",
    isNew: true,
    colors: ["#92400E", "#F59E0B", "#1F2937"],
    reviews: 89,
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    price: 39.99,
    originalPrice: 59.99,
    color: "yellow",
    category: "Casual Wear",
    aosDelay: "600",
    isNew: false,
    colors: ["#FBBF24", "#F59E0B", "#06B6D4"],
    reviews: 301,
  },
];

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (productId) => {
    setWishlist(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const StarRating = ({ rating, size = "sm" }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`${
            size === "sm" ? "w-3 h-3" : "w-4 h-4"
          } ${
            index < Math.floor(rating) 
              ? 'text-amber-400 fill-current' 
              : 'text-gray-300'
          } ${index === Math.floor(rating) && rating % 1 >= 0.5 ? 'text-amber-400 fill-current' : ''}`}
        />
      ))}
      <span className={`text-xs ${size === "sm" ? "text-gray-500" : "text-gray-600"}`}>
        ({rating})
      </span>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div 
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-700 rounded-full border border-orange-200/50 mb-6 shadow-lg"
          >
            <FaTag className="w-4 h-4" />
            <span className="text-sm font-semibold">Top Selling Products</span>
          </div>
          
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-4"
          >
            Featured Collection
          </h2>
          
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Discover our curated selection of premium fashion items designed to elevate your wardrobe with timeless style and modern elegance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {ProductsData.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={product.aosDelay}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 max-w-sm mx-auto"
            >
              {/* Product Image Container */}
              <div 
                className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50/70 to-white/50"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      <FaCircle className="w-2 h-2" />
                      New Arrival
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      <FaStar className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-3 right-3 z-10 flex flex-col gap-2 transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                  >
                    {wishlist[product.id] ? (
                      <FaHeart className="w-4 h-4 text-red-500" />
                    ) : (
                      <FaRegHeart className="w-4 h-4 text-gray-600" />
                    )}
                  </button>
                  <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-200 transform hover:scale-110">
                    <FaEye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Image */}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Color Options */}
                <div className={`absolute bottom-3 left-3 right-3 flex justify-center gap-2 transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-5 h-5 rounded-full border-2 border-white/50 shadow-sm hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5">
                {/* Category */}
                <p className="text-xs text-orange-600 uppercase tracking-wider font-medium mb-2">
                  {product.category}
                </p>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl font-bold text-gray-900">
                    Rs{product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    Rs{product.originalPrice}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                    -25%
                  </span>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={product.rating} size="sm" />
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    {product.reviews} reviews
                  </span>
                </div>

                {/* Color Indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gray-500">Color:</span>
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-gray-200"
                    style={{ backgroundColor: product.color === "white" ? "#FFFFFF" : product.color === "red" ? "#EF4444" : product.color === "brown" ? "#92400E" : "#FBBF24" }}
                  ></div>
                  <span className="text-xs text-gray-600 capitalize">{product.color}</span>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <FaShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span>View All Products</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl border border-orange-200/30">
            <div className="text-3xl font-bold text-orange-600 mb-2">1K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-200/30">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Premium Products</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl border border-orange-200/30">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl border border-orange-200/30">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
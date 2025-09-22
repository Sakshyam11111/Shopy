import { FaEnvelope, FaArrowRight, FaCheck } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  minHeight: "400px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
};

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <motion.section
      style={BannerImg}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative mb-12 sm:mb-16 md:mb-20"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 via-orange-700/70 to-amber-600/80"></div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-6 left-4 sm:top-8 sm:left-8 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-12 right-4 sm:bottom-16 sm:right-8 w-28 sm:w-36 md:w-48 h-28 sm:h-36 md:h-48 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 left-4 sm:left-5 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex items-center justify-center min-h-[400px] py-10 sm:py-12 md:py-16">
        <motion.div
          className="w-full max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto text-center"
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div
            className="mb-6 sm:mb-8 space-y-3 sm:space-y-4"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 mb-3 sm:mb-4"
              variants={itemVariants}
            >
              <FaEnvelope className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Exclusive Offers</span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent leading-tight"
              variants={itemVariants}
            >
              Join Our Fashion Community
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Be the first to know about new arrivals, exclusive promotions, and styling tips delivered straight to your inbox
            </motion.p>
          </motion.div>

          {/* Subscription Form */}
          <motion.div
            className="max-w-xs sm:max-w-sm md:max-w-md mx-auto"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="relative">
              {/* Success State */}
              <AnimatePresence>
                {isSubscribed && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-400/30"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 text-green-100">
                      <FaCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-xs sm:text-sm font-medium">Successfully subscribed!</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-amber-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-stretch overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm shadow-lg">
                  {/* Email Input */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 bg-transparent text-white placeholder-white/70 font-medium border-none focus:ring-0 text-sm sm:text-base focus:placeholder-white/40 transition-all duration-200"
                    disabled={isSubscribed || isLoading}
                    required
                  />

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={!email.trim() || isSubscribed || isLoading}
                    className="group/btn flex items-center justify-center px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 transform hover:shadow-lg disabled:shadow-none flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isLoading ? (
                      <motion.div
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      ></motion.div>
                    ) : isSubscribed ? (
                      <FaCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <>
                        <span className="hidden sm:inline text-sm sm:text-base">Subscribe</span>
                        <motion.div
                          className="w-4 h-4 sm:w-5 sm:h-5 sm:ml-1.5"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaArrowRight />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Input Focus Ring */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 blur"></div>
              </motion.div>

              {/* Privacy Note */}
              <motion.p
                className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70"
                variants={itemVariants}
              >
                We respect your privacy. Unsubscribe at any time.
                <a href="#" className="underline hover:text-orange-200 transition-colors">
                  {" "}
                  Learn more
                </a>
              </motion.p>
            </form>

            {/* Feature Highlights */}
            <motion.div
              className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-center"
              variants={containerVariants}
            >
              <motion.div
                className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                variants={itemVariants}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-amber-400 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm">Early Access</h3>
                <p className="text-white/70 text-[11px] sm:text-xs">New arrivals first</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                variants={itemVariants}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                  <FaCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm">Exclusive Deals</h3>
                <p className="text-white/70 text-[11px] sm:text-xs">Special discounts</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                variants={itemVariants}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm">Fast Shipping</h3>
                <p className="text-white/70 text-[11px] sm:text-xs">Free on orders Rs50+</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
          <span className="text-[10px] sm:text-xs text-white/60 font-medium">Scroll to explore</span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;
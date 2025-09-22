import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Heart,
  ExternalLink,
  Send,
  Star,
  Zap
} from "lucide-react";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Store", link: "/store" },
  { title: "Blog", link: "/blog" },
];

const ServiceLinks = [
  { title: "Men Wear", link: "/mens-wear", icon: <Star className="w-3 h-3" /> },
  { title: "Women Wear", link: "/women-wear", icon: <Zap className="w-3 h-3" /> },
  { title: "Kids Wear", link: "/kids-wear", icon: <Star className="w-3 h-3" /> },
  { title: "Electronic", link: "/electronics", icon: <Zap className="w-3 h-3" /> },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  // Animation variants for slide-up effect
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Animation variants for hover effects
  const linkHover = {
    hover: { x: 8, transition: { duration: 0.3 } },
    iconHover: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 6, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
        />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="modernGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modernGrid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 pt-20 pb-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Company Info */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/25">
                    <span className="text-2xl font-bold text-white">S</span>
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </motion.div>
                <motion.h1
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-bold bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent"
                >
                  Shopsy
                </motion.h1>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Transforming ideas into extraordinary digital experiences. We craft the future, one pixel at a time.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Join the Revolution
                </h3>
                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/25 transition-all duration-300 text-white placeholder-gray-300"
                    />
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubscribe}
                    disabled={isSubscribed}
                    className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 disabled:from-green-600 disabled:to-green-600 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                  >
                    <AnimatePresence mode="wait">
                      {isSubscribed ? (
                        <motion.div
                          key="subscribed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <Heart className="w-5 h-5 text-white" />
                          <span>Subscribed!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="subscribe"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <Send className="w-5 h-5" />
                          <span>Get Updates</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold relative">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Navigate
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.5 }}
                />
              </h2>
              <ul className="space-y-4">
                {FooterLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover="hover"
                    variants={linkHover}
                    className="transform transition-all duration-300"
                  >
                    <a
                      href={link.link}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 group text-lg"
                    >
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative">
                        {link.title}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <motion.div variants={linkHover} initial={{ opacity: 0, x: -10 }} className="w-4 h-4">
                        <ArrowRight />
                      </motion.div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Trending */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold relative">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Trending
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.5 }}
                />
              </h2>
              <ul className="space-y-4">
                {ServiceLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover="hover"
                    variants={linkHover}
                    className="transform transition-all duration-300"
                  >
                    <a
                      href={link.link}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 group text-lg"
                    >
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center"
                        whileHover={{ backgroundImage: "linear-gradient(to right, #f97316, #ef4444)" }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.icon}
                      </motion.div>
                      <span className="relative">
                        {link.title}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold relative">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Connect
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.5 }}
                />
              </h2>
              <div className="space-y-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center"
                    whileHover={{ backgroundImage: "linear-gradient(to right, #3b82f6, #a855f7)", scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold">Kathmandu, Nepal</p>
                    <p className="text-gray-400">Nepal</p>
                  </div>
                </motion.div>
                <motion.a
                  href="tel:+91123456789"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center"
                    whileHover={{ backgroundImage: "linear-gradient(to right, #22c55e, #3b82f6)", scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone className="w-6 h-6 text-green-400 group-hover:text-white" />
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold group-hover:text-green-300 transition-colors">+977 123456789</p>
                    <p className="text-gray-400 text-sm">Call us anytime</p>
                  </div>
                </motion.a>
                <motion.a
                  href="mailto:hello@shopsy.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center"
                    whileHover={{ backgroundImage: "linear-gradient(to right, #a855f7, #ec4899)", scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="w-6 h-6 text-purple-400 group-hover:text-white" />
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold group-hover:text-purple-300 transition-colors">hello@shopsy.com</p>
                    <p className="text-gray-400 text-sm">Drop us a line</p>
                  </div>
                </motion.a>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">Follow the Journey</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center shadow-lg"
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundImage: "linear-gradient(to right, #2563eb/20, #2563eb/20)" }}
                    animate={{ backgroundImage: "linear-gradient(to right, #2563eb/20, #2563eb/20)" }}
                    whileHover={{ backgroundImage: "linear-gradient(to right, #2563eb, #2563eb)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Facebook className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center shadow-lg"
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundImage: "linear-gradient(to right, #ec4899/20, #a855f7/20)" }}
                    animate={{ backgroundImage: "linear-gradient(to right, #ec4899/20, #a855f7/20)" }}
                    whileHover={{ backgroundImage: "linear-gradient(to right, #ec4899, #a855f7)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Instagram className="w-6 h-6 text-pink-400 group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-700/20 to-blue-800/20 rounded-2xl flex items-center justify-center shadow-lg"
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundImage: "linear-gradient(to right, #1d4ed8/20, #1e40af/20)" }}
                    animate={{ backgroundImage: "linear-gradient(to right, #1d4ed8/20, #1e40af/20)" }}
                    whileHover={{ backgroundImage: "linear-gradient(to right, #1d4ed8, #1e40af)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-gray-300 text-lg">
                <span>© 2024 Shopsy. Crafted with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </motion.div>
                <span>and lots of ☕ in Nepal</span>
              </div>
              <div className="flex items-center gap-8">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 relative group"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 relative group"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  whileHover={{ y: -2 }}
                >
                  Sitemap
                  <motion.div
                    className="w-4 h-4"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink />
                  </motion.div>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Shield, 
  Zap, 
  AlertCircle
} from 'lucide-react';

const Login = () => {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API delay and check credentials
    await new Promise(resolve => setTimeout(resolve, 1500));

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === formData.email && u.password === formData.password);

    if (!user) {
      setErrors({ form: 'Invalid email or password' });
      setIsLoading(false);
      return;
    }

    const currentUser = { ...user };
    delete currentUser.password;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    setIsLoading(false);
    navigate('/');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const inputVariants = {
    initial: { scale: 1 },
    focus: { scale: 1.02, transition: { duration: 0.3 } },
    error: { x: [-5, 5, -5, 0], transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Branding */}
          <motion.div variants={itemVariants} className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  S
                </motion.div>
                <div>
                  <h1 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Shopy
                  </h1>
                  <p className="text-gray-600 font-medium">Your Shopping Paradise</p>
                </div>
              </motion.div>
              
              <motion.h2
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-black text-gray-800 leading-tight"
              >
                Welcome
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Back!
                </span>
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-md mx-auto lg:mx-0"
              >
                Sign in to access your account and continue your shopping journey with exclusive deals and personalized recommendations.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0"
              variants={containerVariants}
            >
              {[
                { icon: Shield, title: 'Secure Login', desc: 'Protected with advanced security', color: 'text-orange-500' },
                { icon: Zap, title: 'Quick Access', desc: 'Fast and seamless experience', color: 'text-pink-500' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`w-12 h-12 ${index === 0 ? 'bg-orange-100' : 'bg-pink-100'} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </motion.div>
                  <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10"
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                <motion.div
                  className="relative"
                  variants={inputVariants}
                  initial="initial"
                  animate={errors.email ? 'error' : formData.email ? 'focus' : 'initial'}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100'
                    }`}
                  />
                  <motion.div
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                    animate={{ scale: formData.email ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className={`w-5 h-5 ${errors.email ? 'text-red-400' : 'text-gray-400'}`} />
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-red-500 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <motion.div
                  className="relative"
                  variants={inputVariants}
                  initial="initial"
                  animate={errors.password ? 'error' : formData.password ? 'focus' : 'initial'}
                >
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className={`w-full pl-12 pr-12 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.password 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100'
                    }`}
                  />
                  <motion.div
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                    animate={{ scale: formData.password ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Lock className={`w-5 h-5 ${errors.password ? 'text-red-400' : 'text-gray-400'}`} />
                  </motion.div>
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </motion.button>
                </motion.div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-red-500 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.password}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remember Me & Forgot Password */}
              <motion.div
                className="flex items-center justify-between"
                variants={itemVariants}
              >
                <label className="flex items-center gap-3 cursor-pointer group">
                  <motion.input
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="text-sm text-gray-600 group-hover:text-gray-800"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    Remember me
                  </motion.span>
                </label>
                <motion.button
                  type="button"
                  onClick={() => handleNavigation('/forgot-password')}
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                >
                  Forgot password?
                </motion.button>
              </motion.div>

              <AnimatePresence>
                {errors.form && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-red-500 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.form}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-white flex items-center justify-center gap-3 shadow-lg ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      />
                      Signing In...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="signin"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      Sign In
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>

            {/* Sign Up Link */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-8"
            >
              <p className="text-gray-600">
                Don't have an account?{' '}
                <motion.button
                  type="button"
                  onClick={() => handleNavigation('/signup')}
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-orange-500 hover:text-orange-600 font-bold"
                >
                  Sign Up
                </motion.button>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
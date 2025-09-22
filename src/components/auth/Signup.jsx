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
  Gift, 
  CheckCircle,
  AlertCircle,
  User,
  Phone
} from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    const phoneRegex = /^[+]?[\d\s\-()]+$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
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
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      let users = JSON.parse(localStorage.getItem('users')) || [];

      if (users.find(u => u.email === formData.email)) {
        setErrors({ form: 'Email already exists' });
        setIsLoading(false);
        return;
      }

      const newUser = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password, // Note: In production, hash the password
        phone: formData.phone,
        avatar: formData.fullName.charAt(0).toUpperCase(),
        type: 'user',
        stats: { wishlist: 0, orders: 0 }
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      const currentUser = { ...newUser };
      delete currentUser.password;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));

      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      setErrors({ form: 'An error occurred. Please try again.' });
    }
  };

  const handleTermsNavigation = () => navigate('#');
  const handlePrivacyNavigation = () => navigate('#');
  const handleNavigation = () => navigate('/login');

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
                Join
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Shopy!
                </span>
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-md mx-auto lg:mx-0"
              >
                Create your account today and unlock exclusive deals, personalized recommendations, and amazing rewards.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0"
              variants={containerVariants}
            >
              {[
                { icon: Shield, title: 'Secure Account', desc: 'Protected with advanced security', color: 'text-orange-500' },
                { icon: Gift, title: 'Welcome Bonus', desc: '100 points + 10% off first order', color: 'text-pink-500' },
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

            <motion.div
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto lg:mx-0"
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-bold text-gray-800 mb-4">Why join Shopy?</h4>
              <ul className="space-y-3">
                {[
                  'Exclusive member discounts',
                  'Free shipping on orders above Rs. 2000',
                  'Earn points with every purchase',
                  'Early access to sales',
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </motion.div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Side - Signup Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10"
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-8"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h3>
              <p className="text-gray-600">Fill in your details to get started</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'fullName', label: 'Full Name', icon: User, placeholder: 'Enter your full name' },
                { name: 'email', label: 'Email Address', icon: Mail, placeholder: 'Enter your email', type: 'email' },
                { name: 'phone', label: 'Phone Number', icon: Phone, placeholder: '+977-9841234567', type: 'tel' },
                { 
                  name: 'password', 
                  label: 'Password', 
                  icon: Lock, 
                  placeholder: 'Create a strong password', 
                  showToggle: setShowPassword, 
                  showState: showPassword 
                },
                { 
                  name: 'confirmPassword', 
                  label: 'Confirm Password', 
                  icon: Lock, 
                  placeholder: 'Confirm your password', 
                  showToggle: setShowConfirmPassword, 
                  showState: showConfirmPassword 
                },
              ].map((field, index) => (
                <div key={field.name} className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">{field.label}</label>
                  <motion.div
                    variants={inputVariants}
                    initial="initial"
                    animate={errors[field.name] ? 'error' : formData[field.name] ? 'focus' : 'initial'}
                    className="relative"
                  >
                    <input
                      type={field.type || (field.showState ? 'text' : 'password')}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className={`w-full pl-12 pr-${field.showToggle ? '12' : '4'} py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                        errors[field.name] 
                          ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                          : 'border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100'
                      }`}
                    />
                    <motion.div
                      className="absolute left-4 top-1/2 transform -translate-y-1/2"
                      animate={{ scale: formData[field.name] ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <field.icon className={`w-5 h-5 ${errors[field.name] ? 'text-red-400' : 'text-gray-400'}`} />
                    </motion.div>
                    {field.showToggle && (
                      <motion.button
                        type="button"
                        onClick={() => field.showToggle(!field.showState)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {field.showState ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </motion.button>
                    )}
                  </motion.div>
                  <AnimatePresence>
                    {errors[field.name] && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 text-red-500 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors[field.name]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

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

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <motion.input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400 mt-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <motion.button
                    type="button"
                    onClick={handleTermsNavigation}
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Terms & Conditions
                  </motion.button>{' '}
                  and{' '}
                  <motion.button
                    type="button"
                    onClick={handlePrivacyNavigation}
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Privacy Policy
                  </motion.button>
                </label>
              </motion.div>

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
                      Creating Account...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="create"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      Create Account
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>

            <motion.div
              variants={itemVariants}
              className="text-center mt-8"
            >
              <p className="text-gray-600">
                Already have an account?{' '}
                <motion.button
                  type="button"
                  onClick={handleNavigation}
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-orange-500 hover:text-orange-600 font-bold"
                >
                  Sign In
                </motion.button>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Signup;
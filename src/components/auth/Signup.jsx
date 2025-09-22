// Modified Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl">
                  S
                </div>
                <div>
                  <h1 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Shopy
                  </h1>
                  <p className="text-gray-600 font-medium">Your Shopping Paradise</p>
                </div>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
                Join
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Shopy!
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
                Create your account today and unlock exclusive deals, personalized recommendations, and amazing rewards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Secure Account</h3>
                <p className="text-sm text-gray-600">Protected with advanced security</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3">
                  <Gift className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Welcome Bonus</h3>
                <p className="text-sm text-gray-600">100 points + 10% off first order</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto lg:mx-0">
              <h4 className="font-bold text-gray-800 mb-4">Why join Shopy?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-700">Exclusive member discounts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-700">Free shipping on orders above Rs. 2000</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-700">Earn points with every purchase</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-700">Early access to sales</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h3>
              <p className="text-gray-600">Fill in your details to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.fullName 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100'
                    }`}
                  />
                  <User className={`w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                    errors.fullName ? 'text-red-400' : 'text-gray-400'
                  }`} />
                </div>
                {errors.fullName && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.fullName}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                <div className="relative">
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
                  <Mail className={`w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                    errors.email ? 'text-red-400' : 'text-gray-400'
                  }`} />
                </div>
                {errors.email && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+977-9841234567"
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.phone 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100'
                    }`}
                  />
                  <Phone className={`w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                    errors.phone ? 'text-red-400' : 'text-gray-400'
                  }`} />
                </div>
                {errors.phone && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a strong password"
                    className={`w-full pl-12 pr-12 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.password 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100'
                    }`}
                  />
                  <Lock className={`w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                    errors.password ? 'text-red-400' : 'text-gray-400'
                  }`} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={`w-full pl-12 pr-12 py-4 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.confirmPassword 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100'
                    }`}
                  />
                  <Lock className={`w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                    errors.confirmPassword ? 'text-red-400' : 'text-gray-400'
                  }`} />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              {errors.form && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.form}
                </div>
              )}

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400 mt-1" 
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <button 
                    type="button"
                    onClick={handleTermsNavigation}
                    className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
                  >
                    Terms & Conditions
                  </button>{' '}
                  and{' '}
                  <button 
                    type="button"
                    onClick={handlePrivacyNavigation}
                    className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button 
                  type="button"
                  onClick={handleNavigation}
                  className="text-orange-500 hover:text-orange-600 font-bold transition-colors duration-300"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
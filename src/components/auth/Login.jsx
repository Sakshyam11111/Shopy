// Modified Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                Welcome
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Back!
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
                Sign in to access your account and continue your shopping journey with exclusive deals and personalized recommendations.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Secure Login</h3>
                <p className="text-sm text-gray-600">Protected with advanced security</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3">
                  <Zap className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">Quick Access</h3>
                <p className="text-sm text-gray-600">Fast and seamless experience</p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
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

              {/* Password Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <div className="relative">
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400" />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Remember me</span>
                </label>
                <button 
                  type="button"
                  onClick={() => handleNavigation('/forgot-password')} 
                  className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
                >
                  Forgot password?
                </button>
              </div>

              {errors.form && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.form}
                </div>
              )}

              {/* Submit Button */}
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
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button 
                  type="button" 
                  onClick={() => handleNavigation('/signup')}
                  className="text-orange-500 hover:text-orange-600 font-bold transition-colors duration-300"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
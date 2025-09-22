import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Save, Edit, X, Camera } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    avatar: ''
  });
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Sync currentUser with localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setCurrentUser(user);
        setFormData({
          fullName: user.fullName || '',
          email: user.email || '',
          phone: user.phone || '',
          address: user.address || '',
          avatar: user.avatar || 'U'
        });
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle avatar change (simplified for demo, assumes text input for initials)
  const handleAvatarChange = (e) => {
    const value = e.target.value.toUpperCase().slice(0, 1);
    setFormData((prev) => ({ ...prev, avatar: value || 'U' }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...currentUser,
      ...formData
    };
    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setIsEditing(false);
    console.log('Profile updated:', updatedUser);
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle cancel edit
  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      fullName: currentUser?.fullName || '',
      email: currentUser?.email || '',
      phone: currentUser?.phone || '',
      address: currentUser?.address || '',
      avatar: currentUser?.avatar || 'U'
    });
  };

  if (!currentUser) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Profile Header */}
          <div 
            className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-2xl p-6 text-white shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div 
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-800 shadow-md"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  {formData.avatar}
                </div>
                {isEditing && (
                  <div className="absolute bottom-0 right-0 bg-orange-500 rounded-full p-2">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{formData.fullName || 'User'}</h2>
                <p className="text-sm text-orange-100">{formData.email || 'No email'}</p>
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold rounded-full mt-2 ${
                    currentUser?.type === 'admin'
                      ? 'bg-purple-200 text-purple-800'
                      : currentUser?.type === 'vip'
                      ? 'bg-yellow-200 text-yellow-800'
                      : 'bg-white text-black'
                  }`}
                >
                  {(currentUser?.type || 'user').toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Stats */}
          <div 
            className="mt-6 bg-white rounded-2xl shadow-xl p-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Overview</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div data-aos="zoom-in" data-aos-delay="400">
                <div className="font-bold text-gray-800">{currentUser?.stats?.orders || 0}</div>
                <div className="text-sm text-gray-600">Orders</div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="500">
                <div className="font-bold text-gray-800">{currentUser?.stats?.wishlist || 0}</div>
                <div className="text-sm text-gray-600">Wishlist</div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="600">
                <div className="font-bold text-gray-800">{currentUser?.stats?.points || 0}</div>
                <div className="text-sm text-gray-600">Points</div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div 
            className="mt-6 bg-white rounded-2xl shadow-xl p-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Profile Details</h3>
              {!isEditing ? (
                <button
                  onClick={toggleEdit}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-xl transition-all duration-300"
                  data-aos="fade-right"
                  data-aos-delay="800"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2" data-aos="fade-right" data-aos-delay="800">
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl transition-all duration-300"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div data-aos="fade-up" data-aos-delay="900">
                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                ) : (
                  <p className="text-gray-800">{formData.fullName || 'Not set'}</p>
                )}
              </div>
              <div data-aos="fade-up" data-aos-delay="1000">
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                {isEditing ? (
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                ) : (
                  <p className="text-gray-800">{formData.email || 'Not set'}</p>
                )}
              </div>
              <div data-aos="fade-up" data-aos-delay="1100">
                <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                {isEditing ? (
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                ) : (
                  <p className="text-gray-800">{formData.phone || 'Not set'}</p>
                )}
              </div>
              <div data-aos="fade-up" data-aos-delay="1200">
                <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                {isEditing ? (
                  <div className="relative">
                    <MapPin className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                      placeholder="Enter your address"
                    />
                  </div>
                ) : (
                  <p className="text-gray-800">{formData.address || 'Not set'}</p>
                )}
              </div>
              <div data-aos="fade-up" data-aos-delay="1300">
                <label className="block text-sm font-medium text-gray-600 mb-1">Avatar Initial</label>
                {isEditing ? (
                  <div className="relative">
                    <Camera className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      name="avatar"
                      value={formData.avatar}
                      onChange={handleAvatarChange}
                      maxLength="1"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                      placeholder="Enter one initial"
                    />
                  </div>
                ) : (
                  <p className="text-gray-800">{formData.avatar || 'U'}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import Logo from '../../assets/logo.png';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown, FaUser } from 'react-icons/fa';
import Darkmode from './Darkmode';

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
];

const DropdownLinks = [
  { id: 1, name: "Top Rated", link: "/top-rated" },
  { id: 2, name: "Kids Wear", link: "/kids-wear" },
  { id: 3, name: "Mens Wear", link: "/mens-wear" },
  { id: 4, name: "Women Wear", link: "/women-wear" },
  { id: 5, name: "Electronics", link: "/Electronics" },
];

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleOrderPopup }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="sticky top-0 z-50 shadow-lg bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100/50 dark:border-gray-800/50">
      {/* Upper Navbar */}
      <div className="border-b border-gray-100/50 dark:border-gray-800/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <img
                    src={Logo}
                    alt="Shopy Logo"
                    className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-rose-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                  Shopy
                </span>
              </a>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 rounded-full text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent transition-all duration-300"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <IoMdSearch className="text-gray-400 group-focus-within:text-orange-500 transition-colors duration-200" />
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Mobile Search Button */}
              <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <IoMdSearch className="w-5 h-5" />
              </button>

              {/* Account */}
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <FaUser className="w-5 h-5" />
              </button>

              {/* Dark Mode Toggle */}
              <Darkmode />

              {/* Cart Button */}
              <button
                onClick={() => handleOrderPopup()}
                className="relative group p-3 bg-gradient-to-br from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <FaCartShopping className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar - Navigation Menu */}
      <div className="border-t border-gray-100/50 dark:border-gray-800/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center py-3">
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-1">
              {Menu.map((item) => (
                <li key={item.id} className="relative">
                  <a
                    href={item.link}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              {/* Dropdown Menu */}
              <li className="relative group">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  Trending
                  <FaCaretDown className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden ${dropdownOpen ? 'opacity-100 visible' : ''
                  }`}>
                  <div className="py-2">
                    <ul className="space-y-1">
                      {DropdownLinks.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.link}
                            className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50/50 dark:hover:bg-gray-700/50 hover:text-orange-600 transition-all duration-200"
                          >
                            <span className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                              {item.name}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200/50 dark:border-gray-700/50">
                    <a
                      href="#"
                      className="block w-full text-center px-4 py-3 text-xs font-medium text-orange-600 hover:bg-orange-50/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      View All Categories
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
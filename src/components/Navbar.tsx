
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, User, Search as SearchIcon, LogOut, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import CategoryDropdown from "./CategoryDropdown";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-education-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 font-poppins">CourseGrove</span>
            </Link>

            {/* Desktop Category Dropdown - only show on desktop */}
            <div className="hidden md:block ml-4">
              <CategoryDropdown />
            </div>
          </div>

          {/* Search Bar - show on medium and larger screens */}
          <div className="hidden md:flex flex-grow mx-6 max-w-xl">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/courses" className="text-gray-600 hover:text-education-600 font-medium">Courses</Link>
            <Link to="/instructor-dashboard" className="text-gray-600 hover:text-education-600 font-medium">Teach</Link>
            <Link to="/my-learning" className="text-gray-600 hover:text-education-600 font-medium">My Learning</Link>
            <Link to="/wishlist" className="text-gray-600 hover:text-education-600 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-education-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-education-100 text-education-600 flex items-center justify-center font-semibold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <span className="ml-2 text-gray-700 hidden lg:inline">{user?.name}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-education-500 text-education-600 hover:bg-education-50"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Log Out</span>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="border-education-500 text-education-600 hover:bg-education-50"
                  onClick={() => navigate("/auth")}
                >
                  Log In
                </Button>
                <Button 
                  className="bg-education-600 hover:bg-education-700"
                  onClick={() => navigate("/auth")}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/wishlist" className="mr-4 relative text-gray-600">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-education-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-education-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search - show only on mobile */}
        <div className="block md:hidden py-2">
          <div className="flex items-center">
            <SearchBar />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 pb-5 border-t border-gray-200 animate-fade-in">
            <Link to="/courses" className="block py-2 px-4 text-gray-600 hover:text-education-600 font-medium">
              Courses
            </Link>
            <Link to="/my-learning" className="block py-2 px-4 text-gray-600 hover:text-education-600 font-medium">
              My Learning
            </Link>
            <Link to="/instructor-dashboard" className="block py-2 px-4 text-gray-600 hover:text-education-600 font-medium">
              Teach on CourseGrove
            </Link>
            <Link to="/wishlist" className="block py-2 px-4 text-gray-600 hover:text-education-600 font-medium">
              Wishlist
            </Link>
            <div className="px-4 pt-3 flex flex-col space-y-2">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center py-2">
                    <div className="w-8 h-8 rounded-full bg-education-100 text-education-600 flex items-center justify-center font-semibold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-2 text-gray-700">{user?.name}</div>
                  </div>
                  <Button
                    className="bg-education-600 hover:bg-education-700 w-full"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="border-education-500 text-education-600 hover:bg-education-50 w-full"
                    onClick={() => navigate("/auth")}
                  >
                    Log In
                  </Button>
                  <Button 
                    className="bg-education-600 hover:bg-education-700 w-full"
                    onClick={() => navigate("/auth")}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

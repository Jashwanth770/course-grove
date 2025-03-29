import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, User, Search as SearchIcon, LogOut } from "lucide-react";
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
          <div className="hidden md:flex flex-grow justify-center">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/courses" className="text-gray-600 hover:text-education-600 font-medium">Courses</Link>
            <Link to="/instructor-dashboard" className="text-gray-600 hover:text-education-600 font-medium">Teach</Link>
            
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700">Hi, {user?.name}</span>
                  <Button 
                    variant="outline" 
                    className="border-education-500 text-education-600 hover:bg-education-50"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out
                  </Button>
                  
                  {/* User icon for dashboard */}
                  <Link to="/dashboard" className="p-1.5 rounded-full hover:bg-gray-100">
                    <User className="h-5 w-5 text-gray-600" />
                  </Link>
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
          <div className="md:hidden">
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
            <Link to="/instructor-dashboard" className="block py-2 px-4 text-gray-600 hover:text-education-600 font-medium">
              Teach on CourseGrove
            </Link>
            <Link to="/dashboard" className="block py-2 px-4 text-gray-600 hover:text-education-600 font-medium">
              My Learning
            </Link>
            <div className="px-4 pt-3 flex flex-col space-y-2">
              {isAuthenticated ? (
                <>
                  <div className="text-gray-700 py-2">Hi, {user?.name}</div>
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

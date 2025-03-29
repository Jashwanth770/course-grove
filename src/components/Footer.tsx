
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-education-500" />
              <span className="ml-2 text-xl font-bold text-white font-poppins">CourseGrove</span>
            </div>
            <p className="mb-4 text-gray-400">
              Empowering learners worldwide with quality education and accessible online courses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-education-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-education-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-education-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-education-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-education-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instructors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Student Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Become an Instructor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Affiliate Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Payment Methods</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Scholarship Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} CourseGrove. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 4,
      title: "Advanced Machine Learning & AI Concepts",
      instructor: "David Kumar",
      rating: 4.6,
      students: "98,742",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      category: "Artificial Intelligence",
      level: "Advanced",
      duration: "42 hours",
      lessons: 120
    },
    {
      id: 5,
      title: "Modern React with Redux: From Beginner to Expert",
      instructor: "Stephen Grider",
      rating: 4.8,
      students: "125,430",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      category: "Web Development",
      level: "All Levels",
      duration: "35 hours",
      lessons: 86
    },
    {
      id: 6,
      title: "Financial Analysis & Financial Modeling using Excel",
      instructor: "Jennifer Morgan",
      rating: 4.5,
      students: "67,219",
      price: "$69.99",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      category: "Finance",
      level: "Intermediate",
      duration: "22 hours",
      lessons: 72
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveAllToCart = () => {
    // In a real app, this would add all items to cart
    console.log("Moving all to cart:", wishlistItems);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
              <p className="text-gray-600">{wishlistItems.length} courses saved for later</p>
            </div>
            {wishlistItems.length > 0 && (
              <Button 
                className="bg-education-600 hover:bg-education-700 flex items-center"
                onClick={moveAllToCart}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add All to Cart
              </Button>
            )}
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((course) => (
                <div key={course.id} className="relative">
                  <CourseCard
                    id={course.id}
                    title={course.title}
                    instructor={course.instructor}
                    rating={course.rating}
                    students={course.students}
                    price={course.price}
                    image={course.image}
                    category={course.category}
                    level={course.level}
                    duration={course.duration}
                    lessons={course.lessons}
                  />
                  <button 
                    className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:bg-red-50 transition-colors"
                    onClick={() => removeFromWishlist(course.id)}
                  >
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <Card className="bg-white shadow-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Your wishlist is empty</CardTitle>
                <CardDescription>
                  Explore courses and add them to your wishlist
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Heart className="h-20 w-20 text-gray-300" />
              </CardContent>
              <CardFooter className="flex justify-center pb-8">
                <Button asChild className="bg-education-600 hover:bg-education-700">
                  <Link to="/">Browse Courses</Link>
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;

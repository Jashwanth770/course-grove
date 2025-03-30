
import { Clock, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: string;
  price: string;
  image: string;
  category: string;
  level: string;
  id?: number;
  duration?: string;
  lessons?: number;
}

const CourseCard = ({
  title,
  instructor,
  rating,
  students,
  price,
  image,
  category,
  level,
  id = 1,
  duration = "6.5 hours",
  lessons = 42
}: CourseCardProps) => {
  return (
    <Link to={`/courses/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-education-600 rounded-full p-3">
              <Play className="h-8 w-8 text-white" fill="white" />
            </div>
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
              Preview
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-education-600">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{instructor}</p>
          
          <div className="flex items-center mb-1">
            <span className="text-amber-500 font-bold mr-1">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({students})</span>
          </div>
          
          <div className="flex items-center text-xs text-gray-500 mb-3">
            <Clock className="h-3 w-3 mr-1" />
            <span className="mr-2">{duration}</span>
            <span>{lessons} lessons</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">{price}</span>
              {parseFloat(price.replace("$", "")) > 30 && (
                <span className="text-sm line-through text-gray-500 ml-2">
                  ${Math.round(parseFloat(price.replace("$", "")) * 1.7).toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-xs px-2 py-1 bg-education-50 text-education-700 rounded-full">
              {level}
            </span>
          </div>
          
          {parseFloat(price.replace("$", "")) > 30 && (
            <div className="mt-2">
              <span className="text-xs font-medium text-red-600">
                2 days left at this price!
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

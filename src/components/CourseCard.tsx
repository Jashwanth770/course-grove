
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
      <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-36 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-gray-900 bg-opacity-80 rounded-full p-3">
              <Play className="h-6 w-6 text-white" fill="white" />
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-base font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-education-600">
            {title}
          </h3>
          <p className="text-xs text-gray-600 mb-1">{instructor}</p>
          
          <div className="flex items-center mb-1">
            <span className="text-amber-700 font-bold mr-1">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({students})</span>
          </div>
          
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <Clock className="h-3 w-3 mr-1" />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-base font-bold text-gray-900">{price}</span>
            {parseFloat(price.replace("$", "")) > 30 && (
              <span className="text-xs line-through text-gray-500 ml-2">
                ${Math.round(parseFloat(price.replace("$", "")) * 1.7).toFixed(2)}
              </span>
            )}
          </div>
          
          {parseFloat(price.replace("$", "")) > 30 && (
            <div className="mt-1">
              <span className="text-xs font-medium text-red-600 px-1 py-0.5 bg-red-50 rounded">
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

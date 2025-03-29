
interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: string;
  price: string;
  image: string;
  category: string;
  level: string;
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
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 text-education-700 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-education-50 text-education-600 rounded-full">
            {level}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">By {instructor}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <span className="text-amber-500 font-medium mr-1">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? "text-amber-500" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <span className="text-xs text-gray-500 ml-2">({students} students)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          <button className="text-sm font-medium text-education-600 hover:text-education-700">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;


import { Link } from "react-router-dom";
import { Code, LineChart, BookOpen, Camera, Briefcase, Palette, Music, Heart, Globe } from "lucide-react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  link: string;
}

const CategoryCard = ({ icon, title, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all bg-white group">
      <div className="mb-4 text-gray-600 group-hover:text-education-600 transition-colors">
        {icon}
      </div>
      <h3 className="text-center text-gray-800 font-medium">{title}</h3>
    </Link>
  );
};

const CategorySection = () => {
  const categories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      link: "/courses?category=development",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Business",
      link: "/courses?category=business",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academics",
      link: "/courses?category=academics",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      link: "/courses?category=photography",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Office Productivity",
      link: "/courses?category=office-productivity",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      link: "/courses?category=design",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music",
      link: "/courses?category=music",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Fitness",
      link: "/courses?category=health-fitness",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Languages",
      link: "/courses?category=languages",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

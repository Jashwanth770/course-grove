
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Code, 
  ChartBar, 
  Palette, 
  Camera, 
  MessageSquare, 
  Heart, 
  Flame, 
  Award, 
  Star 
} from "lucide-react";
import { useState } from "react";

type CategoryFilter = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const CategoryFilters = () => {
  const categories: CategoryFilter[] = [
    { id: "all", name: "All Categories", icon: <Flame className="h-4 w-4 mr-2" /> },
    { id: "development", name: "Development", icon: <Code className="h-4 w-4 mr-2" /> },
    { id: "business", name: "Business", icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { id: "data-science", name: "Data Science", icon: <ChartBar className="h-4 w-4 mr-2" /> },
    { id: "design", name: "Design", icon: <Palette className="h-4 w-4 mr-2" /> },
    { id: "photography", name: "Photography", icon: <Camera className="h-4 w-4 mr-2" /> },
    { id: "languages", name: "Languages", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
    { id: "health", name: "Health & Fitness", icon: <Heart className="h-4 w-4 mr-2" /> },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex flex-col space-y-4 mb-8">
      <div className="text-xl font-semibold mb-2">Filter by</div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`flex items-center ${
              activeCategory === category.id
                ? "bg-education-600 hover:bg-education-700 text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </div>
      
      <div className="flex flex-col space-y-4 mt-4">
        <div className="text-xl font-semibold">Course Level</div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="flex items-center">
            <Star className="h-4 w-4 mr-2" />
            Beginner
          </Button>
          <Button variant="outline" className="flex items-center">
            <Star className="h-4 w-4 mr-2" />
            Intermediate
          </Button>
          <Button variant="outline" className="flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Advanced
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;

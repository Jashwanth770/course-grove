
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BookOpen, Code, ChartBar, Palette, MessageSquare, Camera, Briefcase, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Development",
    description: "Web, Mobile, Game, and Software Development",
    icon: <Code className="h-5 w-5 text-education-600" />,
    href: "#",
  },
  {
    title: "Business",
    description: "Entrepreneurship, Marketing, Finance",
    icon: <Briefcase className="h-5 w-5 text-education-600" />,
    href: "#",
  },
  {
    title: "Data Science",
    description: "Machine Learning, AI, Analytics",
    icon: <ChartBar className="h-5 w-5 text-education-600" />,
    href: "#",
  },
  {
    title: "Design",
    description: "UI/UX, Graphic Design, Animation",
    icon: <Palette className="h-5 w-5 text-education-600" />,
    href: "#",
  },
  {
    title: "Language Learning",
    description: "English, Spanish, Chinese, and more",
    icon: <MessageSquare className="h-5 w-5 text-education-600" />,
    href: "#",
  },
  {
    title: "Photography",
    description: "Digital Photography, Video, Lighting",
    icon: <Camera className="h-5 w-5 text-education-600" />,
    href: "#",
  },
  {
    title: "Health & Fitness",
    description: "Wellness, Nutrition, Yoga",
    icon: <Heart className="h-5 w-5 text-education-600" />,
    href: "#",
  },
  {
    title: "All Categories",
    description: "Browse all available courses",
    icon: <BookOpen className="h-5 w-5 text-education-600" />,
    href: "#",
  },
];

const CategoryDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[550px] grid-cols-2 gap-3 p-4">
              {categories.map((category) => (
                <Link key={category.title} to={category.href}>
                  <NavigationMenuLink asChild>
                    <div className={cn(
                      "flex items-start space-x-3 rounded-md p-3 hover:bg-gray-50 transition-colors"
                    )}>
                      <div className="mt-1">{category.icon}</div>
                      <div>
                        <div className="font-medium text-gray-900">{category.title}</div>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryDropdown;

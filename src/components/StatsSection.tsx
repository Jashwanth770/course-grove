
import { Users, BookOpen, GraduationCap, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <BookOpen className="h-8 w-8 text-education-600" />,
      value: "500+",
      label: "Courses",
    },
    {
      icon: <Users className="h-8 w-8 text-education-600" />,
      value: "50K+",
      label: "Students",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-education-600" />,
      value: "200+",
      label: "Instructors",
    },
    {
      icon: <Clock className="h-8 w-8 text-education-600" />,
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

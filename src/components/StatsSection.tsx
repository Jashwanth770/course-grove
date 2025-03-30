
import { Users, BookOpen, GraduationCap, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <BookOpen className="h-8 w-8 text-education-600" />,
      value: "183,000+",
      label: "Courses",
    },
    {
      icon: <Users className="h-8 w-8 text-education-600" />,
      value: "49M+",
      label: "Students",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-education-600" />,
      value: "175+",
      label: "Countries",
    },
    {
      icon: <Clock className="h-8 w-8 text-education-600" />,
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <section className="py-10 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Trusted by companies and students worldwide</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {["Microsoft", "Apple", "Google", "Netflix", "Volkswagen", "Box"].map((company) => (
            <div key={company} className="text-gray-500 font-bold text-xl">
              {company}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4"
            >
              <div className="mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
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

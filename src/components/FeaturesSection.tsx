
import { Globe, Clock, Book, Award, MessageSquare, Video } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-education-600" />,
      title: "Learn Anywhere",
      description: "Access your courses from anywhere in the world, on any device.",
    },
    {
      icon: <Clock className="h-6 w-6 text-education-600" />,
      title: "Learn Anytime",
      description: "Study at your own pace with lifetime access to all purchased courses.",
    },
    {
      icon: <Book className="h-6 w-6 text-education-600" />,
      title: "Quality Content",
      description: "All courses are crafted by industry experts and continuously updated.",
    },
    {
      icon: <Award className="h-6 w-6 text-education-600" />,
      title: "Certification",
      description: "Earn certificates upon completion to showcase your new skills.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-education-600" />,
      title: "Community Support",
      description: "Join discussion forums and connect with fellow learners.",
    },
    {
      icon: <Video className="h-6 w-6 text-education-600" />,
      title: "HD Video Lectures",
      description: "Enjoy high-quality video lectures with downloadable resources.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CourseGrove</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive learning experience with features designed to help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full feature-icon-bg flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  course: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Marketing Specialist",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "The digital marketing course completely transformed my career. The instructor was knowledgeable and the course materials were practical and up-to-date.",
      course: "Digital Marketing Strategy Masterclass",
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Software Developer",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "As someone transitioning into web development, this course provided exactly what I needed - clear explanations, practical projects, and community support.",
      course: "Introduction to Web Development",
    },
    {
      id: 3,
      name: "Sophia Chen",
      role: "Data Analyst",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "The data science course exceeded my expectations. I was able to apply the skills I learned immediately in my job and received a promotion shortly after.",
      course: "Data Science Fundamentals",
    },
    {
      id: 4,
      name: "Robert Johnson",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      quote: "This course dives deep into advanced machine learning concepts while still making them accessible. The projects were challenging and rewarding.",
      course: "Advanced Machine Learning & AI",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const updateDisplayedTestimonials = () => {
      if (window.innerWidth >= 1024) {
        // Display 3 testimonials on desktop
        setDisplayedTestimonials([
          testimonials[activeIndex % testimonials.length],
          testimonials[(activeIndex + 1) % testimonials.length],
          testimonials[(activeIndex + 2) % testimonials.length],
        ]);
      } else if (window.innerWidth >= 768) {
        // Display 2 testimonials on tablets
        setDisplayedTestimonials([
          testimonials[activeIndex % testimonials.length],
          testimonials[(activeIndex + 1) % testimonials.length],
        ]);
      } else {
        // Display 1 testimonial on mobile
        setDisplayedTestimonials([testimonials[activeIndex % testimonials.length]]);
      }
    };

    updateDisplayedTestimonials();
    window.addEventListener("resize", updateDisplayedTestimonials);

    return () => {
      window.removeEventListener("resize", updateDisplayedTestimonials);
    };
  }, [activeIndex, testimonials]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their learning experience with CourseGrove
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {displayedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 max-w-md animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-education-600 font-medium">
                  Course: {testimonial.course}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-education-50 text-gray-600 hover:text-education-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-education-50 text-gray-600 hover:text-education-600 transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

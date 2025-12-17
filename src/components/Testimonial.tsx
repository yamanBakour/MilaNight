import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonial: React.FC = () => {
  const testimonial = {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    company: "TechCorp Inc.",
    content:
      "TaskFlow has transformed how our team manages projects. We've seen a 40% increase in productivity and our project completion rate is now at 95%. The interface is intuitive and the collaboration features are exactly what we needed.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b786d4d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  };

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of companies that trust TaskFlow
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-blue-300 opacity-50" />
                </div>

                <p className="text-xl md:text-2xl text-gray-800 italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-0">
                    <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-gray-700">
                        Verified Customer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  10K+
                </div>
                <div className="text-gray-600">Active Teams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Productivity Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-600">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

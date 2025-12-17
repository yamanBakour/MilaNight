import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Organize Your Work,
            <span className="text-blue-600"> Effortlessly</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            TaskFlow is the intuitive task management software that helps teams
            collaborate, prioritize, and deliver projects on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg border border-gray-300 transition duration-300 shadow-sm">
              Watch Demo
            </button>
          </div>

          {/* Hero image/illustration placeholder */}
          {/* <div className="mt-16 md:mt-24">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="h-4 bg-white/30 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-1/2"></div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="h-4 bg-white/30 rounded w-2/3 mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-2/3"></div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="h-4 bg-white/30 rounded w-4/5 mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

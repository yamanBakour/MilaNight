import React from "react";
import { ClipboardCheck, Users, TrendingUp } from "lucide-react";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Create Your Workspace",
      description:
        "Sign up and set up your team workspace in minutes. Invite members and define projects.",
    },
    {
      number: "02",
      icon: <Users className="w-6 h-6" />,
      title: "Organize & Collaborate",
      description:
        "Create tasks, assign them to team members, and collaborate in real-time with comments and attachments.",
    },
    {
      number: "03",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Track & Optimize",
      description:
        "Monitor progress with visual dashboards, generate reports, and optimize workflows based on insights.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in three easy steps and transform how your team works
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-0.5 bg-blue-200 transform translate-x-1/2"></div>
                )}

                <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -top-4 left-8 bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>

                  <div className="inline-flex items-center justify-center p-4 bg-blue-50 text-blue-600 rounded-xl mb-6">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{step.description}</p>

                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import React from "react";
import {
  CheckCircle,
  Users,
  BarChart3,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Smart Task Management",
      description:
        "Create, assign, and track tasks with intelligent automation and reminders.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Real-time updates, comments, and file sharing for seamless teamwork.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Progress Analytics",
      description:
        "Track project metrics and team performance with detailed insights.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Tracking",
      description:
        "Monitor time spent on tasks and projects with automated reports.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime and daily backups.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description:
        "Optimized performance with instant updates and minimal loading times.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Features
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to streamline your workflow and boost
            productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

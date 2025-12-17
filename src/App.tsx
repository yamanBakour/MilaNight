import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;


import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute right-6 top-4 z-50">
        <Link to="/login">
          <Button>Admin Login</Button>
        </Link>
      </div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Impact />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

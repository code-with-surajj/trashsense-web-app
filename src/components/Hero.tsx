
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return <section id="hero" className="relative min-h-screen flex items-center pt-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-trashsense-light/50 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-trashsense-light/30 rounded-tr-full"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-gradient">Intelligent Waste</span> <br />
                Sorting for a <br />
                Cleaner Future
              </h1>
              <p className="text-lg text-gray-700 md:max-w-lg">
                TrashSense is an AI-powered smart bin that automatically detects, sorts, 
                and processes different types of waste—making recycling effortless and efficient.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-trashsense-primary hover:bg-trashsense-dark text-white px-6 h-12 rounded-full">
                Get Your TrashSense
              </Button>
              <Link to="features" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
                <Button variant="outline" className="border-trashsense-primary text-trashsense-primary px-6 h-12 rounded-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-trashsense-primary">95%</p>
                <p className="text-sm text-gray-600">Sorting Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-trashsense-primary">40%</p>
                <p className="text-sm text-gray-600">Waste Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-trashsense-primary">24/7</p>
                <p className="text-sm text-gray-600">Smart Monitoring</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full bg-trashsense-light flex items-center justify-center overflow-hidden">
              <div className="w-3/4 h-3/4 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
                <img alt="TrashSense Smart Bin" className="w-3/4 h-3/4 object-contain" src="/lovable-uploads/23e063df-c121-4514-8b1a-dcd1dc49831d.png" />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-trashsense-secondary text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">AI-Powered</p>
              <p className="text-sm">Machine Learning Technology</p>
            </div>
            
            {/* Reference Images Section */}
            <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">Reference Designs</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src="/lovable-uploads/c3476236-54e7-417c-8795-41aa8463a6f4.png" 
                    alt="Metal smart bin reference with dual screens" 
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src="/lovable-uploads/35c12aad-b240-4023-9217-8d791e205d02.png" 
                    alt="Modern smart waste management kiosk reference" 
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Design inspiration for our TrashSense units</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Throw In Your Waste",
    description: "Simply place your waste in the TrashSense bin - no pre-sorting needed.",
  },
  {
    number: "02",
    title: "AI Detection & Analysis",
    description: "Our sensors and cameras identify the waste type using computer vision and machine learning.",
  },
  {
    number: "03",
    title: "Automatic Sorting",
    description: "The smart mechanism directs each item to the appropriate compartment based on its material.",
  },
  {
    number: "04",
    title: "Data Collection & Insights",
    description: "Your waste habits are analyzed to provide personalized sustainability reports.",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-white to-trashsense-light/20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-trashsense-primary">TrashSense</span> Works
          </h2>
          <p className="text-lg text-gray-700">
            Our innovative technology makes waste sorting simple, efficient, and accurate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video bg-black/5 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2432&q=80"
                alt="TrashSense Demo"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold">See TrashSense in Action</p>
                <p className="text-sm">Watch how our AI technology transforms waste sorting</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <PlayCircle className="h-10 w-10 text-white" />
              </Button>
            </div>
          </div>

          <div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 border-l-4 ${
                    activeStep === index
                      ? "border-trashsense-primary bg-trashsense-light/50"
                      : "border-gray-200"
                  } rounded-r-lg transition-all cursor-pointer`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-trashsense-primary mr-3">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Reference Images Section - Moved from Hero component */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-trashsense-primary">Reference Designs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="/lovable-uploads/c3476236-54e7-417c-8795-41aa8463a6f4.png" 
                  alt="Metal smart bin reference with dual screens" 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 bg-trashsense-light/30">
                  <p className="font-medium text-trashsense-dark">Dual-Interface Smart Bin</p>
                  <p className="text-xs text-gray-600">Interactive waste management solution</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="/lovable-uploads/35c12aad-b240-4023-9217-8d791e205d02.png" 
                  alt="Modern smart waste management kiosk reference" 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 bg-trashsense-light/30">
                  <p className="font-medium text-trashsense-dark">Smart Recycling Kiosk</p>
                  <p className="text-xs text-gray-600">Advanced sorting with user guidance</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center italic">Design inspirations for TrashSense units currently in production</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

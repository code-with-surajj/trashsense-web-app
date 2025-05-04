
import {
  Cpu,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Leaf,
  Recycle,
} from "lucide-react";

const featureItems = [
  {
    icon: <Cpu className="h-8 w-8 text-trashsense-primary" />,
    title: "AI-Powered Sorting",
    description:
      "Advanced machine learning algorithms identify and categorize waste with 95% accuracy.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-trashsense-primary" />,
    title: "Mobile App Integration",
    description:
      "Track your waste patterns and environmental impact through our intuitive mobile app.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-trashsense-primary" />,
    title: "Data Analytics",
    description:
      "Get insights on your waste habits and recommendations to reduce your environmental footprint.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-trashsense-primary" />,
    title: "Tamper-Proof",
    description:
      "Secure design prevents contamination between different waste categories.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-trashsense-primary" />,
    title: "Energy Efficient",
    description:
      "Low power consumption with solar charging options for sustainable operation.",
  },
  {
    icon: <Recycle className="h-8 w-8 text-trashsense-primary" />,
    title: "Multi-Stream Sorting",
    description:
      "Separate compartments for plastic, paper, metal, glass, organic waste, and non-recyclables.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-trashsense-light/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Features for a <span className="text-trashsense-primary">Smarter Planet</span>
          </h2>
          <p className="text-lg text-gray-700">
            TrashSense combines cutting-edge technology with environmental
            responsibility to make waste management effortless and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-trashsense-primary/20"
            >
              <div className="mb-4 bg-trashsense-light inline-block p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

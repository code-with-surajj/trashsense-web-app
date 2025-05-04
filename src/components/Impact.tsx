
import { Progress } from "@/components/ui/progress";

const impactStats = [
  {
    title: "Landfill Waste Reduced",
    percentage: 75,
    description: "TrashSense helps divert 75% of waste from landfills through proper sorting and recycling."
  },
  {
    title: "CO2 Emissions Saved",
    percentage: 63,
    description: "By optimizing recycling, TrashSense reduces carbon emissions associated with waste processing."
  },
  {
    title: "Resource Recovery Rate",
    percentage: 90,
    description: "Our AI ensures that 90% of recyclable materials are correctly identified and processed."
  },
];

const Impact = () => {
  return (
    <section id="impact" className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Environmental <span className="text-trashsense-primary">Impact</span>
              </h2>
              <p className="text-lg text-gray-700">
                TrashSense is not just a smart bin—it's a step toward a more sustainable future. 
                Our technology significantly reduces waste and helps protect our planet.
              </p>
            </div>
            
            <div className="space-y-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{stat.title}</h3>
                    <span className="font-bold text-trashsense-primary">{stat.percentage}%</span>
                  </div>
                  <Progress value={stat.percentage} className="h-2" />
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-trashsense-light rounded-tl-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                alt="Green mountains" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-trashsense-light rounded-tr-3xl overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                alt="Clean water" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 aspect-video bg-trashsense-light rounded-b-3xl overflow-hidden -mt-4">
              <div className="w-full h-full bg-trashsense-primary/10 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">2025 Sustainability Goal</h3>
                <p>Help divert 1 million tons of waste from landfills by deploying TrashSense units in major cities worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;

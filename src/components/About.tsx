import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Twitter, Linkedin } from "lucide-react";
const teamMembers = [{
  name: "Suraj Kumar",
  role: "Founder & CEO",
  image: "https://randomuser.me/api/portraits/women/44.jpg",
  bio: "PhD in Environmental Engineering with 10+ years experience in sustainable waste management systems."
}, {
  name: "Ayesha Rehmani",
  role: "Co-founder & Marketing Head",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
  bio: "Former AI researcher at MIT with expertise in computer vision and machine learning applications."
}, {
  name: "Nikhil Kumar",
  role: "Head of Design & Production",
  image: "https://randomuser.me/api/portraits/women/68.jpg",
  bio: "Industrial designer with a passion for creating products that merge functionality with environmental responsibility."
}, {
  name: "Aayush Kumar",
  role: "Service Manager",
  image: "https://randomuser.me/api/portraits/men/75.jpg",
  bio: "Robotics engineer specializing in sensor integration and automation systems for smart devices."
}];
const About = () => {
  return <section id="about" className="bg-trashsense-light/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-trashsense-primary">Team</span>
          </h2>
          <p className="text-lg text-gray-700">
            We're a group of passionate engineers, designers, and environmentalists 
            united by our mission to revolutionize waste management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[4/3] bg-gradient-to-br from-trashsense-primary/20 to-trashsense-secondary/20 relative">
                <Avatar className="w-24 h-24 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white">
                  
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-trashsense-primary font-medium">{member.role}</p>
                
                <div className="flex space-x-3 mt-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
          <p className="max-w-lg mx-auto mb-6">
            We're always looking for talented individuals who share our passion for sustainability and innovation.
          </p>
          <Button variant="outline" className="border-trashsense-primary text-trashsense-primary">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>;
};
export default About;

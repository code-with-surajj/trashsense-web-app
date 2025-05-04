
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-white">Trash<span className="text-trashsense-primary">Sense</span></span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing waste management with AI technology for a cleaner, more sustainable world.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-trashsense-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-trashsense-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-trashsense-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-trashsense-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-trashsense-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">Homes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">Businesses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">Smart Cities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">Campuses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">Environmental Impact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trashsense-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on sustainable waste management.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button size="sm" className="bg-trashsense-primary hover:bg-trashsense-dark">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} TrashSense Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

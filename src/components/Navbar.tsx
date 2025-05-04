
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Features', to: 'features' },
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'Impact', to: 'impact' },
    { name: 'About Us', to: 'about' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' 
        : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <ScrollLink 
          to="hero" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          className="cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-trashsense-primary">Trash<span className="text-trashsense-secondary">Sense</span></span>
          </div>
        </ScrollLink>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="flex items-center gap-2 border-trashsense-primary text-trashsense-primary hover:bg-trashsense-primary hover:text-white">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-trashsense-primary transition-colors font-medium cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
          <Link to="/login">
            <Button variant="outline" className="flex items-center gap-2 border-trashsense-primary text-trashsense-primary hover:bg-trashsense-primary hover:text-white transition-colors">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
          </Link>
          <Button 
            className="bg-trashsense-primary hover:bg-trashsense-dark text-white transition-colors"
          >
            Get Started
          </Button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-trashsense-primary transition-colors py-2 font-medium cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
            <Button className="bg-trashsense-primary hover:bg-trashsense-dark text-white w-full transition-colors">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

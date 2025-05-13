import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
const CTA = () => {
  return <section className="bg-gradient-to-r from-trashsense-primary to-trashsense-secondary py-20 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Waste Management?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of eco-conscious homes and businesses that have already made the switch to TrashSense.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-white" />
                <p>No more sorting confusion - our AI handles everything</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-white" />
                <p>Reduce your environmental footprint with smart recycling</p>
              </div>
              <div className="flex items-center">
                
                
              </div>
              <div className="flex items-center">
                
                
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" className="bg-gray-50 border-gray-200 text-black" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" className="bg-gray-50 border-gray-200 text-black" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200 text-black" />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization (Optional)
                </label>
                <Input id="organization" placeholder="Company name" className="bg-gray-50 border-gray-200 text-black" />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                  I'm interested in
                </label>
                <select id="interest" className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-black">
                  <option>Home solution</option>
                  <option>Business solution</option>
                  <option>Enterprise solution</option>
                  <option>Partnership opportunities</option>
                  <option>Just information</option>
                </select>
              </div>
              
              <Button className="w-full bg-trashsense-primary hover:bg-trashsense-dark">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, LayoutDashboard, Sliders, BarChart, Users, LogOut, Coins } from "lucide-react";

const MainLayout = () => {
  const location = useLocation();
  const [user] = useState({
    name: "Admin User",
    role: "admin",
    email: "admin@trashsense.com"
  });

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, allowedRoles: ["admin", "technician", "viewer"] },
    { name: "Control Panel", href: "/control-panel", icon: Sliders, allowedRoles: ["admin", "technician"] },
    { name: "Analytics", href: "/analytics", icon: BarChart, allowedRoles: ["admin", "technician", "viewer"] },
    { name: "Revenue", href: "/revenue", icon: Coins, allowedRoles: ["admin", "technician", "viewer"] },
    { name: "User Management", href: "/users", icon: Users, allowedRoles: ["admin"] },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const canAccess = (allowedRoles: string[]) => {
    return allowedRoles.includes(user.role);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 z-80 bg-white border-r">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200">
          <div className="flex items-center h-16 flex-shrink-0 px-4 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-md">
                <Trash2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-xl">TrashSense</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.filter(item => canAccess(item.allowedRoles)).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActive(item.href)
                      ? "bg-primary text-white" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon 
                    className={`mr-3 h-5 w-5 ${
                      isActive(item.href) ? "text-white" : "text-gray-400 group-hover:text-gray-500"
                    }`} 
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-medium uppercase">
                    {user.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <Button 
              variant="outline" 
              className="flex items-center w-full justify-center"
              onClick={() => window.location.href = "/login"}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-white border-b">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <div className="bg-primary p-1.5 rounded-md">
              <Trash2 className="h-5 w-5 text-white" />
            </div>
            <span className="ml-2 font-semibold text-lg">TrashSense</span>
          </div>
          <div>
            {/* Mobile menu button would go here */}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:ml-64 flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none pt-16 md:pt-0">
          <Outlet />
        </main>
        
        {/* Mobile navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2">
          {navigation.filter(item => canAccess(item.allowedRoles)).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-md ${
                isActive(item.href)
                  ? "text-primary" 
                  : "text-gray-600"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

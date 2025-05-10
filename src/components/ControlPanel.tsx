
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, RotateCw, Power, Settings, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ControlPanel = () => {
  const { toast } = useToast();
  const [autoMode, setAutoMode] = useState(true);
  const [compartments, setCompartments] = useState({
    plastic: false,
    paper: false,
    organic: false,
    metal: false
  });
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [recalibrating, setRecalibrating] = useState(false);

  const toggleCompartment = (type: keyof typeof compartments) => {
    if (!autoMode) {
      const newState = !compartments[type];
      setCompartments({ ...compartments, [type]: newState });
      
      toast({
        title: `${type.charAt(0).toUpperCase() + type.slice(1)} compartment ${newState ? 'opened' : 'closed'}`,
        description: `The ${type} compartment has been ${newState ? 'opened' : 'closed'} successfully.`,
        duration: 3000,
      });
    }
  };

  const handleAutoModeToggle = (checked: boolean) => {
    setAutoMode(checked);
    
    if (checked) {
      // Reset all compartments when switching to auto mode
      setCompartments({
        plastic: false,
        paper: false,
        organic: false,
        metal: false
      });
      
      toast({
        title: "Automatic mode enabled",
        description: "System will now automatically detect and sort waste.",
        duration: 3000,
      });
    } else {
      toast({
        title: "Manual mode enabled",
        description: "You can now control bin compartments manually.",
        duration: 3000,
      });
    }
  };

  const handleRecalibrate = () => {
    setRecalibrating(true);
    toast({
      title: "Recalibration started",
      description: "Sensors are being recalibrated. Please wait...",
      duration: 3000,
    });
    
    // Mock recalibration process
    setTimeout(() => {
      setRecalibrating(false);
      toast({
        title: "Recalibration complete",
        description: "All sensors have been successfully recalibrated.",
        duration: 3000,
      });
    }, 3000);
  };

  const toggleMaintenanceMode = () => {
    const newMode = !maintenanceMode;
    setMaintenanceMode(newMode);
    
    toast({
      title: newMode ? "Maintenance mode activated" : "Maintenance mode deactivated",
      description: newMode 
        ? "System is now in maintenance mode. Some functions are limited." 
        : "System has returned to normal operation.",
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <h1 className="text-3xl font-bold">Control Panel</h1>

      {/* Main control card */}
      <Card>
        <CardHeader>
          <CardTitle>System Controls</CardTitle>
          <CardDescription>Manual override and system settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Mode toggle */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-mode">Automatic Mode</Label>
                <p className="text-sm text-muted-foreground">
                  {autoMode
                    ? "System will automatically detect and sort waste"
                    : "Manual control of bin compartments enabled"}
                </p>
              </div>
              <Switch
                id="auto-mode"
                checked={autoMode}
                onCheckedChange={handleAutoModeToggle}
              />
            </div>

            {maintenanceMode && (
              <div className="bg-amber-50 border border-amber-200 rounded-md p-3 flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <div className="text-sm text-amber-800">
                  <p className="font-medium">Maintenance Mode Active</p>
                  <p>System is currently in maintenance mode. Some functions are limited.</p>
                </div>
              </div>
            )}
          </div>

          {/* Compartment controls */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Bin Compartment Controls</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className={`border ${!autoMode ? "border-primary" : "border-muted"}`}>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                    Plastic Compartment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button 
                    variant={compartments.plastic ? "default" : "outline"}
                    size="sm"
                    className="w-full"
                    disabled={autoMode}
                    onClick={() => toggleCompartment("plastic")}
                  >
                    {compartments.plastic ? "Close" : "Open"}
                  </Button>
                </CardContent>
              </Card>

              <Card className={`border ${!autoMode ? "border-primary" : "border-muted"}`}>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-orange-500"></span>
                    Paper Compartment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button 
                    variant={compartments.paper ? "default" : "outline"}
                    size="sm"
                    className="w-full"
                    disabled={autoMode}
                    onClick={() => toggleCompartment("paper")}
                  >
                    {compartments.paper ? "Close" : "Open"}
                  </Button>
                </CardContent>
              </Card>

              <Card className={`border ${!autoMode ? "border-primary" : "border-muted"}`}>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    Organic Compartment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button 
                    variant={compartments.organic ? "default" : "outline"}
                    size="sm"
                    className="w-full"
                    disabled={autoMode}
                    onClick={() => toggleCompartment("organic")}
                  >
                    {compartments.organic ? "Close" : "Open"}
                  </Button>
                </CardContent>
              </Card>

              <Card className={`border ${!autoMode ? "border-primary" : "border-muted"}`}>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                    Metal Compartment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button 
                    variant={compartments.metal ? "default" : "outline"}
                    size="sm"
                    className="w-full"
                    disabled={autoMode}
                    onClick={() => toggleCompartment("metal")}
                  >
                    {compartments.metal ? "Close" : "Open"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* System actions */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">System Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={handleRecalibrate}
                disabled={recalibrating}
              >
                <RotateCw className={`h-4 w-4 ${recalibrating ? "animate-spin" : ""}`} />
                {recalibrating ? "Recalibrating..." : "Recalibrate Sensors"}
              </Button>
              
              <Button 
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => {
                  toast({
                    title: "AI Model Reset",
                    description: "The AI model has been reset successfully.",
                    duration: 3000,
                  });
                }}
              >
                <Settings className="h-4 w-4" />
                Reset AI Model
              </Button>
              
              <Button 
                variant={maintenanceMode ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={toggleMaintenanceMode}
              >
                <Power className="h-4 w-4" />
                {maintenanceMode ? "Exit Maintenance" : "Maintenance Mode"}
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <p className="text-xs text-muted-foreground">
            Last calibrated: 2025-05-03 14:32 | System Version: v2.1.4 | Sensor Status: Operational
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ControlPanel;

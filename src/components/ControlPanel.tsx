import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Trash2, RotateCw, Power, Settings, AlertTriangle, Link, Link2Off, Upload, History, CalendarDays } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
  const [binConnected, setBinConnected] = useState(false);
  const [binId, setBinId] = useState("");
  const [connecting, setConnecting] = useState(false);
  
  // New state for ads section
  const [adsTab, setAdsTab] = useState("current"); // current, upload, history, schedule
  const [adName, setAdName] = useState("");
  const [adDuration, setAdDuration] = useState("7");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [adsList, setAdsList] = useState([
    { id: "1", name: "Recycling Campaign", status: "Active", createdAt: "2025-05-01", scheduledUntil: "2025-05-15" },
    { id: "2", name: "Earth Day Special", status: "Scheduled", createdAt: "2025-05-10", scheduledUntil: "2025-05-22" },
    { id: "3", name: "Green Initiative", status: "Inactive", createdAt: "2025-04-20", scheduledUntil: "2025-05-05" },
  ]);

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

  const handleConnectBin = () => {
    if (!binId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid bin ID",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setConnecting(true);
    
    // Simulate connection process
    setTimeout(() => {
      setConnecting(false);
      setBinConnected(true);
      toast({
        title: "Bin Connected",
        description: `Successfully connected to bin ${binId}`,
        duration: 3000,
      });
    }, 2000);
  };

  const handleDisconnectBin = () => {
    setBinConnected(false);
    toast({
      title: "Bin Disconnected",
      description: `Connection to bin ${binId} has been terminated`,
      duration: 3000,
    });
  };

  // New functions for ads section
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUploadAd = () => {
    if (!selectedFile || !adName) {
      toast({
        title: "Error",
        description: "Please enter ad name and select a file",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // Mock upload process
    toast({
      title: "Uploading Advertisement",
      description: "Please wait while we upload your file...",
      duration: 3000,
    });
    
    setTimeout(() => {
      // Add new ad to list
      const newAd = {
        id: Math.random().toString(36).substr(2, 9),
        name: adName,
        status: "Active",
        createdAt: new Date().toISOString().split('T')[0],
        scheduledUntil: new Date(Date.now() + parseInt(adDuration) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      };
      
      setAdsList([newAd, ...adsList]);
      setAdName("");
      setSelectedFile(null);
      setAdsTab("current");
      
      toast({
        title: "Advertisement Uploaded",
        description: `"${adName}" has been successfully uploaded and scheduled`,
        duration: 3000,
      });
    }, 2000);
  };

  const handleDeleteAd = (id: string) => {
    toast({
      title: "Deleting Advertisement",
      description: "Removing the selected advertisement...",
      duration: 2000,
    });
    
    setTimeout(() => {
      setAdsList(adsList.filter(ad => ad.id !== id));
      
      toast({
        title: "Advertisement Deleted",
        description: "The advertisement has been successfully removed",
        duration: 3000,
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <h1 className="text-3xl font-bold">Control Panel</h1>

      {/* Bin connection card */}
      <Card>
        <CardHeader>
          <CardTitle>Bin Connectivity</CardTitle>
          <CardDescription>Connect to physical waste bin by unique ID</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className={`h-3 w-3 rounded-full ${binConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <p className="text-sm">Status: {binConnected ? `Connected to bin ${binId}` : 'Disconnected'}</p>
          </div>
          
          {!binConnected ? (
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Enter bin unique ID" 
                value={binId} 
                onChange={(e) => setBinId(e.target.value)}
                className="flex-grow"
                disabled={connecting}
              />
              <Button 
                onClick={handleConnectBin} 
                disabled={connecting || !binId.trim()}
                className="whitespace-nowrap"
              >
                {connecting ? (
                  <>
                    <span className="animate-spin mr-2">⚙️</span>
                    Connecting...
                  </>
                ) : (
                  <>
                    <Link className="h-4 w-4 mr-2" />
                    Connect Bin
                  </>
                )}
              </Button>
            </div>
          ) : (
            <Button 
              variant="destructive" 
              onClick={handleDisconnectBin}
              className="w-full sm:w-auto"
            >
              <Link2Off className="h-4 w-4 mr-2" />
              Disconnect Bin
            </Button>
          )}
        </CardContent>
      </Card>

      {/* New Ads Management Card */}
      <Card>
        <CardHeader>
          <CardTitle>Advertisements Management</CardTitle>
          <CardDescription>Upload, schedule and manage advertisements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Ads tab navigation */}
          <div className="flex flex-wrap gap-2 border-b pb-2">
            <Button 
              variant={adsTab === "current" ? "default" : "ghost"} 
              size="sm" 
              onClick={() => setAdsTab("current")}
            >
              Current Ads
            </Button>
            <Button 
              variant={adsTab === "upload" ? "default" : "ghost"} 
              size="sm" 
              onClick={() => setAdsTab("upload")}
            >
              <Upload className="h-4 w-4 mr-1" />
              Upload New
            </Button>
            <Button 
              variant={adsTab === "history" ? "default" : "ghost"} 
              size="sm" 
              onClick={() => setAdsTab("history")}
            >
              <History className="h-4 w-4 mr-1" />
              History
            </Button>
            <Button 
              variant={adsTab === "schedule" ? "default" : "ghost"} 
              size="sm" 
              onClick={() => setAdsTab("schedule")}
            >
              <CalendarDays className="h-4 w-4 mr-1" />
              Schedule
            </Button>
          </div>

          {/* Current Ads Tab */}
          {adsTab === "current" && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Active Advertisements</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Scheduled Until</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adsList.filter(ad => ad.status === "Active").map((ad) => (
                    <TableRow key={ad.id}>
                      <TableCell className="font-medium">{ad.name}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                          {ad.status}
                        </span>
                      </TableCell>
                      <TableCell>{ad.scheduledUntil}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteAd(ad.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Upload New Ad Tab */}
          {adsTab === "upload" && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Upload New Advertisement</h3>
              <div className="space-y-3">
                <div className="grid gap-2">
                  <Label htmlFor="ad-name">Advertisement Name</Label>
                  <Input 
                    id="ad-name" 
                    placeholder="Enter advertisement name" 
                    value={adName}
                    onChange={(e) => setAdName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ad-file">Advertisement File</Label>
                  <Input 
                    id="ad-file" 
                    type="file" 
                    accept="image/*, video/*" 
                    onChange={handleFileChange}
                  />
                  <p className="text-xs text-muted-foreground">
                    Accepted file formats: JPG, PNG, GIF, MP4 (max 10MB)
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ad-duration">Duration (days)</Label>
                  <Input 
                    id="ad-duration" 
                    type="number" 
                    min="1"
                    max="90"
                    value={adDuration}
                    onChange={(e) => setAdDuration(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full mt-2" 
                  onClick={handleUploadAd}
                  disabled={!selectedFile || !adName}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Advertisement
                </Button>
              </div>
            </div>
          )}

          {/* History Tab */}
          {adsTab === "history" && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Advertisement History</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Scheduled Until</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adsList.map((ad) => (
                    <TableRow key={ad.id}>
                      <TableCell className="font-medium">{ad.name}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          ad.status === "Active" 
                            ? "bg-green-100 text-green-800" 
                            : ad.status === "Scheduled" 
                            ? "bg-blue-100 text-blue-800" 
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {ad.status}
                        </span>
                      </TableCell>
                      <TableCell>{ad.createdAt}</TableCell>
                      <TableCell>{ad.scheduledUntil}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Schedule Tab */}
          {adsTab === "schedule" && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Scheduled Advertisements</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Scheduled Until</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adsList.filter(ad => ad.status === "Scheduled").map((ad) => (
                    <TableRow key={ad.id}>
                      <TableCell className="font-medium">{ad.name}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                          {ad.status}
                        </span>
                      </TableCell>
                      <TableCell>{ad.scheduledUntil}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteAd(ad.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {adsList.filter(ad => ad.status === "Scheduled").length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-4 text-muted-foreground">
                        No scheduled advertisements found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

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
                    ? "System will now automatically detect and sort waste"
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

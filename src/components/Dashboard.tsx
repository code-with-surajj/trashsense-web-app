
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";
import { AlertCircle, Trash2, Recycle, Leaf } from "lucide-react";

const COLORS = ['#2BAE66', '#1E88E5', '#FFA726', '#EF5350'];

const Dashboard = () => {
  // Mock data for the charts and statuses
  const binStatus = {
    plastic: 75,
    paper: 45,
    organic: 90,
    metal: 30,
  };

  const detectionData = [
    { name: "Plastic", value: 35 },
    { name: "Paper", value: 25 },
    { name: "Organic", value: 30 },
    { name: "Metal", value: 10 },
  ];

  const weeklyData = [
    { day: "Mon", plastic: 12, paper: 8, organic: 14, metal: 5 },
    { day: "Tue", plastic: 19, paper: 11, organic: 17, metal: 7 },
    { day: "Wed", plastic: 15, paper: 10, organic: 20, metal: 6 },
    { day: "Thu", plastic: 21, paper: 15, organic: 22, metal: 8 },
    { day: "Fri", plastic: 25, paper: 18, organic: 25, metal: 10 },
    { day: "Sat", plastic: 18, paper: 12, organic: 19, metal: 7 },
    { day: "Sun", plastic: 15, paper: 9, organic: 16, metal: 6 },
  ];

  const chartConfig = {
    plastic: { color: "#1E88E5" },
    paper: { color: "#FFA726" },
    organic: { color: "#2BAE66" },
    metal: { color: "#EF5350" },
  };

  const alerts = [
    { type: "warning", message: "Organic bin nearly full (90%)", time: "2 hours ago" },
    { type: "error", message: "Plastic sensor needs recalibration", time: "1 day ago" },
    { type: "info", message: "System maintenance scheduled", time: "3 days ago" },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Status cards row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-blue-500" />
              <span>Plastic</span>
            </CardTitle>
            <CardDescription className="text-2xl font-bold">{binStatus.plastic}%</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={binStatus.plastic} className="h-2" />
            {binStatus.plastic >= 80 && (
              <p className="text-xs text-destructive mt-2 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> Bin nearly full
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Recycle className="h-4 w-4 text-orange-500" />
              <span>Paper</span>
            </CardTitle>
            <CardDescription className="text-2xl font-bold">{binStatus.paper}%</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={binStatus.paper} className="h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Leaf className="h-4 w-4 text-green-500" />
              <span>Organic</span>
            </CardTitle>
            <CardDescription className="text-2xl font-bold">{binStatus.organic}%</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={binStatus.organic} className="h-2" />
            {binStatus.organic >= 80 && (
              <p className="text-xs text-destructive mt-2 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> Bin nearly full
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-red-500" />
              <span>Metal</span>
            </CardTitle>
            <CardDescription className="text-2xl font-bold">{binStatus.metal}%</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={binStatus.metal} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Waste Collection</CardTitle>
            <CardDescription>Data by waste category (kg)</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="plastic" fill="#1E88E5" name="Plastic" />
                  <Bar dataKey="paper" fill="#FFA726" name="Paper" />
                  <Bar dataKey="organic" fill="#2BAE66" name="Organic" />
                  <Bar dataKey="metal" fill="#EF5350" name="Metal" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Current Waste Distribution</CardTitle>
            <CardDescription>Percentage by category</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={detectionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {detectionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>Recent alerts and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-2 pb-3 border-b last:border-0 last:pb-0">
                <div className={`mt-0.5 p-1 rounded-full ${
                  alert.type === "warning" ? "bg-yellow-100 text-yellow-600" : 
                  alert.type === "error" ? "bg-red-100 text-red-600" : 
                  "bg-blue-100 text-blue-600"
                }`}>
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

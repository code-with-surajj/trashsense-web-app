
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";
import { Download, Calendar, Filter } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const COLORS = ['#2BAE66', '#1E88E5', '#FFA726', '#EF5350'];

const monthlyData = [
  { month: "Jan", plastic: 120, paper: 85, organic: 150, metal: 45, total: 400 },
  { month: "Feb", plastic: 132, paper: 91, organic: 148, metal: 48, total: 419 },
  { month: "Mar", plastic: 141, paper: 97, organic: 161, metal: 51, total: 450 },
  { month: "Apr", plastic: 154, paper: 105, organic: 173, metal: 57, total: 489 },
  { month: "May", plastic: 162, paper: 112, organic: 189, metal: 63, total: 526 },
  { month: "Jun", plastic: 175, paper: 118, organic: 201, metal: 68, total: 562 },
  { month: "Jul", plastic: 184, paper: 124, organic: 214, metal: 72, total: 594 },
];

const accuracyData = [
  { name: "Plastic", accuracy: 97 },
  { name: "Paper", accuracy: 95 },
  { name: "Organic", accuracy: 92 },
  { name: "Metal", accuracy: 99 },
];

const wasteTrends = [
  { month: "Jan", waste: 400 },
  { month: "Feb", waste: 419 },
  { month: "Mar", waste: 450 },
  { month: "Apr", waste: 489 },
  { month: "May", waste: 526 },
  { month: "Jun", waste: 562 },
  { month: "Jul", waste: 594 },
];

const materialDistribution = [
  { name: "Plastic", value: 35 },
  { name: "Paper", value: 25 },
  { name: "Organic", value: 30 },
  { name: "Metal", value: 10 },
];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("monthly");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const chartConfig = {
    plastic: { color: "#1E88E5" },
    paper: { color: "#FFA726" },
    organic: { color: "#2BAE66" },
    metal: { color: "#EF5350" },
    waste: { color: "#2BAE66" },
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Analytics</h1>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {timeRange === "daily" && "Daily"}
            {timeRange === "weekly" && "Weekly"}
            {timeRange === "monthly" && "Monthly"}
            {timeRange === "yearly" && "Yearly"}
          </Button>
          
          <Button variant="outline" size="sm" onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
        <CollapsibleContent>
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Time Range</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      size="sm" 
                      variant={timeRange === "daily" ? "default" : "outline"}
                      onClick={() => setTimeRange("daily")}
                    >
                      Daily
                    </Button>
                    <Button 
                      size="sm" 
                      variant={timeRange === "weekly" ? "default" : "outline"}
                      onClick={() => setTimeRange("weekly")}
                    >
                      Weekly
                    </Button>
                    <Button 
                      size="sm" 
                      variant={timeRange === "monthly" ? "default" : "outline"}
                      onClick={() => setTimeRange("monthly")}
                    >
                      Monthly
                    </Button>
                    <Button 
                      size="sm" 
                      variant={timeRange === "yearly" ? "default" : "outline"}
                      onClick={() => setTimeRange("yearly")}
                    >
                      Yearly
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Waste Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline">All Types</Button>
                    <Button size="sm" variant="outline">Plastic</Button>
                    <Button size="sm" variant="outline">Paper</Button>
                    <Button size="sm" variant="outline">Organic</Button>
                    <Button size="sm" variant="outline">Metal</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Charts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Waste Collection Trends</CardTitle>
            <CardDescription>Total waste collected over time (kg)</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={wasteTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<ChartTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="waste" stroke="#2BAE66" name="Total Waste" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Waste Distribution</CardTitle>
            <CardDescription>Current waste by category</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={materialDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {materialDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Collection by Waste Type</CardTitle>
            <CardDescription>Data by waste category (kg)</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<ChartTooltip />} />
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
            <CardTitle>AI Detection Accuracy</CardTitle>
            <CardDescription>Accuracy rate by waste type (%)</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={accuracyData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[85, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar dataKey="accuracy" fill="#2BAE66">
                    {accuracyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Records</CardTitle>
            <CardDescription>Recent maintenance activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "2025-05-01", action: "Sensor calibration", technician: "John Doe" },
                { date: "2025-04-28", action: "Battery replacement", technician: "Jane Smith" },
                { date: "2025-04-22", action: "Firmware update v2.1.4", technician: "John Doe" },
                { date: "2025-04-15", action: "Mechanical service", technician: "Mike Johnson" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b pb-2 last:border-0 text-sm">
                  <span>{item.date}</span>
                  <span className="font-medium">{item.action}</span>
                  <span className="text-muted-foreground">{item.technician}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;

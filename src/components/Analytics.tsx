
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const wasteData = [
  { month: "Jan", plastic: 120, paper: 90, glass: 45, other: 30 },
  { month: "Feb", plastic: 100, paper: 85, glass: 55, other: 40 },
  { month: "Mar", plastic: 95, paper: 100, glass: 50, other: 45 },
  { month: "Apr", plastic: 85, paper: 110, glass: 65, other: 35 },
  { month: "May", plastic: 75, paper: 95, glass: 70, other: 30 },
  { month: "Jun", plastic: 65, paper: 80, glass: 75, other: 25 },
];

const efficiencyData = [
  { name: "Week 1", efficiency: 65 },
  { name: "Week 2", efficiency: 68 },
  { name: "Week 3", efficiency: 72 },
  { name: "Week 4", efficiency: 75 },
  { name: "Week 5", efficiency: 80 },
  { name: "Week 6", efficiency: 83 },
  { name: "Week 7", efficiency: 87 },
  { name: "Week 8", efficiency: 90 },
];

const chartConfig = {
  plastic: { label: "Plastic", theme: { light: "#0ea5e9", dark: "#38bdf8" } },
  paper: { label: "Paper", theme: { light: "#10b981", dark: "#34d399" } },
  glass: { label: "Glass", theme: { light: "#8b5cf6", dark: "#a78bfa" } },
  other: { label: "Other", theme: { light: "#f59e0b", dark: "#fbbf24" } },
};

const AnalyticsComponent = () => {
  return (
    <div className="container p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor waste collection metrics and system performance
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Waste Collected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,451 kg</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recycling Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85.2%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Sorting Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.8%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Carbon Offset</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.3 tons</div>
            <p className="text-xs text-muted-foreground">Equivalent to 600 trees</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="waste">
        <TabsList className="mb-4">
          <TabsTrigger value="waste">Waste Collection</TabsTrigger>
          <TabsTrigger value="efficiency">System Efficiency</TabsTrigger>
        </TabsList>
        
        <TabsContent value="waste" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Waste Collection by Type</CardTitle>
              <CardDescription>Monthly breakdown of different waste types collected</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 h-80">
              <ChartContainer className="h-80" config={chartConfig}>
                <BarChart
                  data={wasteData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={props => <ChartTooltipContent {...props} />} />
                  <Bar dataKey="plastic" stackId="a" fill="var(--color-plastic)" />
                  <Bar dataKey="paper" stackId="a" fill="var(--color-paper)" />
                  <Bar dataKey="glass" stackId="a" fill="var(--color-glass)" />
                  <Bar dataKey="other" stackId="a" fill="var(--color-other)" />
                  <Legend content={props => <ChartLegendContent {...props} />} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="efficiency">
          <Card>
            <CardHeader>
              <CardTitle>System Efficiency</CardTitle>
              <CardDescription>Weekly system performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={efficiencyData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="efficiency"
                    stroke="#0ea5e9"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsComponent;

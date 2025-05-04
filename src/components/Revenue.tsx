
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Download, ArrowUpDown, Filter, ChartBar, ChartLine, ChartPie, Coins } from "lucide-react";
import { format } from "date-fns";

// Mock data for garbage collection revenue
const monthlyRevenueData = [
  { month: "Jan", plastic: 4200, paper: 3100, metal: 2400, organic: 1800, total: 11500 },
  { month: "Feb", plastic: 4500, paper: 3300, metal: 2600, organic: 1900, total: 12300 },
  { month: "Mar", plastic: 4800, paper: 3500, metal: 2900, organic: 2100, total: 13300 },
  { month: "Apr", plastic: 5100, paper: 3800, metal: 3200, organic: 2300, total: 14400 },
  { month: "May", plastic: 5400, paper: 4100, metal: 3500, organic: 2600, total: 15600 },
  { month: "Jun", plastic: 5700, paper: 4300, metal: 3800, organic: 2800, total: 16600 },
  { month: "Jul", plastic: 6000, paper: 4600, metal: 4100, organic: 3100, total: 17800 },
  { month: "Aug", plastic: 6300, paper: 4900, metal: 4400, organic: 3300, total: 18900 },
  { month: "Sep", plastic: 6600, paper: 5200, metal: 4700, organic: 3600, total: 20100 },
  { month: "Oct", plastic: 6900, paper: 5500, metal: 5000, organic: 3900, total: 21300 },
  { month: "Nov", plastic: 7200, paper: 5800, metal: 5300, organic: 4200, total: 22500 },
  { month: "Dec", plastic: 7500, paper: 6100, metal: 5600, organic: 4500, total: 23700 },
];

const chartConfig = {
  plastic: { label: "Plastic", theme: { light: "#0EA5E9", dark: "#0EA5E9" } },
  paper: { label: "Paper", theme: { light: "#F97316", dark: "#F97316" } },
  metal: { label: "Metal", theme: { light: "#8B5CF6", dark: "#8B5CF6" } },
  organic: { label: "Organic", theme: { light: "#10B981", dark: "#10B981" } },
  total: { label: "Total", theme: { light: "#6366F1", dark: "#6366F1" } }
};

const pieColors = ["#0EA5E9", "#F97316", "#8B5CF6", "#10B981"];

const wastePriceData = [
  { type: "Plastic", pricePerKg: "$0.25", monthlyAvgKg: "28,000", monthlyRevenue: "$7,000" },
  { type: "Paper", pricePerKg: "$0.15", monthlyAvgKg: "34,000", monthlyRevenue: "$5,100" },
  { type: "Metal", pricePerKg: "$0.40", monthlyAvgKg: "14,000", monthlyRevenue: "$5,600" },
  { type: "Organic", pricePerKg: "$0.10", monthlyAvgKg: "45,000", monthlyRevenue: "$4,500" },
];

const topCustomersData = [
  { id: 1, name: "City Recycling Inc.", type: "Commercial", wasteCollected: "15,200 kg", revenue: "$5,320", trend: "+12%" },
  { id: 2, name: "GreenPath Solutions", type: "Commercial", wasteCollected: "12,800 kg", revenue: "$4,480", trend: "+8%" },
  { id: 3, name: "EcoPark Community", type: "Residential", wasteCollected: "9,600 kg", revenue: "$3,360", trend: "+15%" },
  { id: 4, name: "MetroWaste Services", type: "Commercial", wasteCollected: "8,400 kg", revenue: "$2,940", trend: "+5%" },
  { id: 5, name: "University of Springfield", type: "Institutional", wasteCollected: "7,200 kg", revenue: "$2,520", trend: "+10%" },
];

// Distribution data for pie chart
const revenueDistribution = [
  { name: "Plastic", value: 7500 },
  { name: "Paper", value: 6100 },
  { name: "Metal", value: 5600 },
  { name: "Organic", value: 4500 },
];

const Revenue = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeframe, setTimeframe] = useState("monthly");

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Revenue Analysis</h1>
          <p className="text-muted-foreground">
            Track and analyze revenue generated from waste collection and recycling
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$207,600</div>
            <p className="text-xs text-muted-foreground">+18% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Waste Collected</CardTitle>
            <ChartBar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,438 tons</div>
            <p className="text-xs text-muted-foreground">+12% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Revenue/ton</CardTitle>
            <ChartLine className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$144.37</div>
            <p className="text-xs text-muted-foreground">+5% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
            <ChartPie className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">37.4%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last year</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-5">
          <CardHeader className="flex flex-row items-center">
            <div>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue breakdown by waste type</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Select
                value={timeframe}
                onValueChange={(value) => setTimeframe(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="pl-2">
            <Tabs defaultValue="bar" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="bar" className="flex items-center gap-2">
                  <ChartBar className="h-4 w-4" />
                  Bar
                </TabsTrigger>
                <TabsTrigger value="line" className="flex items-center gap-2">
                  <ChartLine className="h-4 w-4" />
                  Line
                </TabsTrigger>
              </TabsList>
              <TabsContent value="bar" className="pt-4 space-y-4">
                <ChartContainer config={chartConfig} className="aspect-[4/3]">
                  <BarChart data={monthlyRevenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `$${value}`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="plastic" fill="var(--color-plastic)" name="Plastic" />
                    <Bar dataKey="paper" fill="var(--color-paper)" name="Paper" />
                    <Bar dataKey="metal" fill="var(--color-metal)" name="Metal" />
                    <Bar dataKey="organic" fill="var(--color-organic)" name="Organic" />
                  </BarChart>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="line" className="pt-4 space-y-4">
                <ChartContainer config={chartConfig} className="aspect-[4/3]">
                  <LineChart data={monthlyRevenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `$${value}`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="total" stroke="var(--color-total)" name="Total Revenue" strokeWidth={2} />
                  </LineChart>
                </ChartContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Distribution</CardTitle>
            <CardDescription>By waste category</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {revenueDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Waste Type Pricing</CardTitle>
            <CardDescription>Current prices and generated revenue by waste category</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Waste Type</TableHead>
                  <TableHead>Price per kg</TableHead>
                  <TableHead>Monthly Avg (kg)</TableHead>
                  <TableHead className="text-right">Monthly Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wastePriceData.map((item) => (
                  <TableRow key={item.type}>
                    <TableCell className="font-medium">{item.type}</TableCell>
                    <TableCell>{item.pricePerKg}</TableCell>
                    <TableCell>{item.monthlyAvgKg}</TableCell>
                    <TableCell className="text-right">{item.monthlyRevenue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Top Revenue Generators</CardTitle>
              <CardDescription>Customers with highest revenue contribution</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="h-8">
              <ArrowUpDown className="mr-2 h-3 w-3" />
              Sort
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Waste Collected</TableHead>
                  <TableHead className="text-right">Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topCustomersData.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.type}</TableCell>
                    <TableCell>{customer.wasteCollected}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {customer.revenue}
                        <span className="text-xs text-green-500">{customer.trend}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Revenue;

import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Code2,
  Database,
  PenTool,
  Server,
  Layers,
  BrainCircuit,
  Bitcoin,
  Coffee,
  Megaphone,
  Feather,
  BarChart,
  Users
} from "lucide-react";

const templates = [
  {
    title: "Frontend Developer",
    icon: Code2,
    description: "Template for assessing frontend development skills, including UI design, interactivity, and integration with APIs.",
    color: "text-blue-500",
  },
  {
    title: "Backend Developer",
    icon: Database,
    description: "Template for assessing backend development skills, including API design, database management, and application architecture.",
    color: "text-purple-500",
  },
  {
    title: "Content Creator",
    icon: PenTool,
    description: "Template for evaluating content creation skills, including writing quality, creativity, audience engagement, and platform knowledge.",
    color: "text-pink-500",
  },
  {
    title: "DevOps Engineer",
    icon: Server,
    description: "Template for assessing DevOps skills, including CI/CD implementation, cloud infrastructure management, automation, and monitoring.",
    color: "text-orange-500",
  },
  {
    title: "Full Stack Developer",
    icon: Layers,
    description: "Template for assessing full stack development skills, including frontend, backend, APIs, and deployment.",
    color: "text-indigo-500",
  },
  {
    title: "AI/ML Engineer",
    icon: BrainCircuit,
    description: "Template for assessing artificial intelligence and machine learning skills, including model building, data processing, and evaluation.",
    color: "text-green-500",
  },
  {
    title: "Blockchain Developer",
    icon: Bitcoin,
    description: "Template for assessing blockchain development skills, including smart contracts, decentralized applications, and cryptography.",
    color: "text-yellow-500",
  },
  {
    title: "Java Developer",
    icon: Coffee,
    description: "Template for assessing Java programming skills, including OOP, frameworks, and backend development.",
    color: "text-red-500",
  },
  {
    title: "Marketing Head",
    icon: Megaphone,
    description: "Template for assessing marketing leadership skills, including strategy, brand management, and market analysis.",
    color: "text-cyan-500",
  },
  {
    title: "Content Writer",
    icon: Feather,
    description: "Template for assessing content writing skills, including research, creativity, and SEO.",
    color: "text-teal-500",
  },
  {
    title: "Digital Marketing Specialist",
    icon: BarChart,
    description: "Template for assessing digital marketing skills, including SEO, SEM, social media, and analytics.",
    color: "text-violet-500",
  },
  {
    title: "HR Specialist",
    icon: Users,
    description: "Template for assessing human resources skills, including recruitment, employee relations, and compliance.",
    color: "text-rose-500",
  },
];

export default function Templates() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-foreground">Templates</h2>
          <p className="text-muted-foreground">
            Unlock Efficiency with Ready-Made Automation.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by title..."
            className="pl-10 max-w-md bg-background"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {templates.map((template) => (
            <Card key={template.title} className="flex flex-col hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">
                  {template.title}
                </CardTitle>
                <template.icon className={`h-5 w-5 ${template.color}`} />
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-xs text-muted-foreground line-clamp-3">
                  {template.description}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-0">
                <div className="flex items-center gap-2 text-xs text-green-600 font-medium">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  Ready to use
                </div>
                <Button size="sm" className="bg-primary/90 hover:bg-primary">
                  Start →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
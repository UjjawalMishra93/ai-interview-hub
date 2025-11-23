import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText, Download, MessageSquare, ExternalLink } from "lucide-react";

const reports = [
  {
    id: 1,
    name: "ujjawal mishra",
    initials: "um",
    role: "Frontend Intern",
    score: 20,
    date: "Nov 20, 2025, 6:31 PM",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 2,
    name: "ujjawal mishra",
    initials: "um",
    role: "Backend Developer",
    score: 18,
    date: "Oct 31, 2025, 6:01 PM",
    color: "bg-blue-100 text-blue-700",
  },
];

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-foreground">Interview Reports</h2>
          <p className="text-muted-foreground">
            View insights and analysis from completed interviews
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report) => (
            <Card key={report.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-muted text-muted-foreground text-lg">
                        {report.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg capitalize">{report.name}</h3>
                      <p className="text-sm text-muted-foreground">{report.role}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${report.score >= 50 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {report.score}%
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mb-4">
                  Date: {report.date}
                </div>

                <Button variant="outline" className="w-full mb-4 gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Note
                </Button>

                <div className="grid grid-cols-2 gap-3">
                  <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="h-4 w-4" />
                    Report
                  </Button>
                  <Button className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white">
                    <Download className="h-4 w-4" />
                    PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
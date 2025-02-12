
import { Code2, Server, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function Services() {
  const services = [
    {
      title: "Strategic IT Consulting",
      description: "Expert guidance for aligning technology with your business objectives",
      icon: Code2,
    },
    {
      title: "System Architecture",
      description: "Design and implementation of scalable, efficient systems",
      icon: Server,
    },
    {
      title: "Security Solutions",
      description: "Comprehensive security assessments and implementations",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive IT consulting services tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    Custom Solutions
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    Expert Support
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    Continuous Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

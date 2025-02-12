
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 fade-in">
          <div className="inline-block">
            <div className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-primary/5 text-primary mb-8">
              IT Consulting Excellence
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight text-balance max-w-4xl mx-auto">
            Expert IT Solutions for Your Business Growth
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Transforming businesses through strategic IT consulting and tailored solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

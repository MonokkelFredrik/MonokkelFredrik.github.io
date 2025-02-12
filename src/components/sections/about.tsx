
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="text-sm">
              About CodeTrust
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900">
              Expertise That Drives Success
            </h2>
            <p className="text-lg text-slate-600">
              With years of experience in IT consulting, we bring deep expertise and
              innovative solutions to help businesses thrive in the digital age.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-slate-600 mt-1">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-slate-600 mt-1">Projects Delivered</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="lg:ml-auto">
            <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center p-8">
              <svg
                className="w-full h-full text-primary/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

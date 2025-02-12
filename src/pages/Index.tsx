
import { Mail, Linkedin, FileDown } from "lucide-react";
import { Button } from "../components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            CodeTrust Consulting AS
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Konsulenttjenester for IT og programvareutvikling
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => window.location.href = 'mailto:fredrik@codetrust.no'}
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => window.open('https://www.linkedin.com/in/fredrikdanielsen/', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => window.open('https://www.codetrust.no/Fredrik%20Danielsen%20CV.pdf', '_blank')}
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;

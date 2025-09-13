import { ArrowRight, Camera, CheckCircle, PieChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Scan Face",
      description: "Student approaches the camera and the system automatically detects and analyzes facial features",
      step: "01"
    },
    {
      icon: CheckCircle,
      title: "Mark Attendance",
      description: "AI instantly verifies identity and records attendance with timestamp and location data",
      step: "02"
    },
    {
      icon: PieChart,
      title: "View Dashboard",
      description: "Real-time updates appear on the admin dashboard with comprehensive analytics and reports",
      step: "03"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to revolutionize your attendance management process
          </p>
        </div>

        <div className="relative">
          {/* Desktop flow */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center max-w-xs">
                  {/* Step number */}
                  <div className="mb-6 text-6xl font-bold text-primary/20">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6 p-6 rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="mx-8 text-primary/60">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                    <step.icon className="h-6 w-6" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-16 bg-primary/20 mt-4"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="text-4xl font-bold text-primary/20 mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
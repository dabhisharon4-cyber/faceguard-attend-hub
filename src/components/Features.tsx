import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scan, Shield, Database, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Scan,
      title: "Face Recognition AI",
      description: "Advanced facial recognition technology that accurately identifies individuals with high precision and speed.",
      details: "Machine learning algorithms trained on diverse datasets for optimal accuracy across different lighting conditions and angles."
    },
    {
      icon: Shield,
      title: "Mask & Obstruction Handling",
      description: "Smart detection system that works even when faces are partially covered by masks or other obstructions.",
      details: "Proprietary algorithms that focus on exposed facial features to maintain accuracy even with PPE requirements."
    },
    {
      icon: Database,
      title: "Real-time Secure Database",
      description: "Encrypted cloud storage with instant synchronization and backup capabilities for all attendance data.",
      details: "Enterprise-grade security with end-to-end encryption, automated backups, and compliance with data protection regulations."
    },
    {
      icon: BarChart3,
      title: "Advanced Admin Dashboard",
      description: "Comprehensive management interface for student enrollment, attendance monitoring, and detailed reporting.",
      details: "Intuitive dashboard with real-time analytics, customizable reports, and role-based access control for administrators."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of attendance management with cutting-edge technology and unparalleled security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-card hover:shadow-feature transition-all duration-500 hover:scale-105 bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-lg text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
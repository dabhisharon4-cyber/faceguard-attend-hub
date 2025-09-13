import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Secure Attend
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 animate-fade-in opacity-90">
          Smart & Secure Attendance System
        </p>
        
        <p className="text-lg sm:text-xl mb-8 animate-slide-up opacity-80 max-w-2xl mx-auto">
          Revolutionary face recognition technology with advanced mask detection and real-time database management for the future of attendance tracking.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
            View Demo
          </Button>
        </div>

        {/* Features highlight */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm animate-fade-in">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary-light rounded-full"></div>
            <span>Face Recognition AI</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary-light rounded-full"></div>
            <span>Mask Detection</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary-light rounded-full"></div>
            <span>Real-time Database</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
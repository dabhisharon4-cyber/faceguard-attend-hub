import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Monitor, Smartphone, Laptop } from "lucide-react";

const Demo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power and simplicity of Secure Attend through our interactive demo and screenshots
          </p>
        </div>

        {/* Main demo video placeholder */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-feature bg-gradient-to-br from-primary/5 to-primary-light/5 border-0">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                
                <div className="relative z-10 text-center text-white">
                  <div className="mb-6">
                    <div className="inline-flex p-6 rounded-full bg-primary/20 backdrop-blur-sm">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Interactive System Demo</h3>
                  <p className="text-white/80 mb-6 max-w-md">
                    Watch how Secure Attend processes face recognition in real-time
                  </p>
                  <Button variant="hero" size="lg">
                    <Play className="h-5 w-5 mr-2" />
                    Play Demo Video
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mobile App */}
          <Card className="overflow-hidden shadow-card hover:shadow-feature transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Mobile Interface</h3>
              </div>
              <div className="aspect-[9/16] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-muted-foreground">
                  <Monitor className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Mobile App Screenshot</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Intuitive mobile interface for quick attendance marking and verification
              </p>
            </CardContent>
          </Card>

          {/* Admin Dashboard */}
          <Card className="overflow-hidden shadow-card hover:shadow-feature transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
                  <Monitor className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Admin Dashboard</h3>
              </div>
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-muted-foreground">
                  <Monitor className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Dashboard Screenshot</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive analytics and management tools for administrators
              </p>
            </CardContent>
          </Card>

          {/* System Integration */}
          <Card className="overflow-hidden shadow-card hover:shadow-feature transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
                  <Laptop className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">System Integration</h3>
              </div>
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-muted-foreground">
                  <Monitor className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Integration View</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Seamless integration with existing school management systems
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo;
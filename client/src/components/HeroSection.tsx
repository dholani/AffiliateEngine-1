import { Search, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { label: "Services", value: "500+" },
    { label: "Verified Providers", value: "200+" },
    { label: "Categories", value: "10+" },
  ];

  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Find Trusted Services, Earn Benefits
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-hero-subtitle">
            Discover verified service providers across travel, tax, health, legal, and more. 
            Quality services with trusted partners, all in one place.
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
                data-testid="input-hero-search"
              />
              <Button 
                className="absolute right-2 top-1/2 -translate-y-1/2"
                data-testid="button-hero-search"
              >
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary" data-testid={`text-stat-${stat.label.toLowerCase()}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Verified Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Secure Links</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Trusted Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

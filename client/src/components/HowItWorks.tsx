import { Search, CheckSquare, ExternalLink } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Browse Services",
      description: "Explore our curated categories and find the perfect service provider for your needs",
    },
    {
      icon: CheckSquare,
      title: "Compare Options",
      description: "Review verified providers, read descriptions, and choose the best fit for you",
    },
    {
      icon: ExternalLink,
      title: "Get Started",
      description: "Click through to our trusted partners and enjoy quality services with special benefits",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding trusted services is simple with ServiceHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center" data-testid={`step-${index + 1}`}>
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

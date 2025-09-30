import { Card } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  serviceCount: number;
  onClick?: () => void;
}

export default function CategoryCard({ name, description, icon: Icon, serviceCount, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all"
      onClick={() => {
        console.log(`Category clicked: ${name}`);
        onClick?.();
      }}
      data-testid={`card-category-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2" data-testid={`text-category-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        {name}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="text-xs text-muted-foreground" data-testid={`text-service-count-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        {serviceCount} {serviceCount === 1 ? 'service' : 'services'}
      </div>
    </Card>
  );
}

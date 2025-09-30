import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";

interface ServiceCardProps {
  name: string;
  provider: string;
  description: string;
  featured?: boolean;
  onVisit?: () => void;
}

export default function ServiceCard({ name, provider, description, featured, onVisit }: ServiceCardProps) {
  return (
    <Card className="p-6 flex flex-col h-full" data-testid={`card-service-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-1" data-testid={`text-service-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid={`text-provider-${provider.toLowerCase().replace(/\s+/g, '-')}`}>
            {provider}
          </p>
        </div>
        {featured && (
          <Badge variant="secondary" className="gap-1" data-testid="badge-featured">
            <Star className="h-3 w-3" />
            Featured
          </Badge>
        )}
      </div>
      
      <p className="text-sm text-muted-foreground mb-6 flex-1" data-testid={`text-description-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>

      <div className="flex gap-2">
        <Button 
          className="flex-1 gap-2" 
          onClick={() => {
            console.log(`Visit clicked for: ${name}`);
            onVisit?.();
          }}
          data-testid={`button-visit-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Visit {provider}
          <ExternalLink className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline"
          onClick={() => console.log(`Learn more: ${name}`)}
          data-testid={`button-learn-more-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
}

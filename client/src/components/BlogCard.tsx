import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  onClick?: () => void;
}

export default function BlogCard({ title, excerpt, date, category, onClick }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all" data-testid={`card-blog-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span data-testid={`text-blog-date-${title.toLowerCase().replace(/\s+/g, '-')}`}>{date}</span>
          </div>
          {category && (
            <span className="text-primary font-medium" data-testid={`text-blog-category-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {category}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-3" data-testid={`text-blog-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4" data-testid={`text-blog-excerpt-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {excerpt}
        </p>

        <Button 
          variant="ghost" 
          className="gap-2 p-0"
          onClick={() => {
            console.log(`Read more: ${title}`);
            onClick?.();
          }}
          data-testid={`button-read-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}

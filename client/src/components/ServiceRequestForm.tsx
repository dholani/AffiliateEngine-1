import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState({
    serviceName: "",
    description: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Service request submitted:", formData);
    toast({
      title: "Request submitted!",
      description: "We'll review your service request and get back to you soon.",
    });
    setFormData({ serviceName: "", description: "", email: "" });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4" data-testid="text-request-title">
        Request a Service
      </h2>
      <p className="text-muted-foreground mb-6">
        Can't find what you're looking for? Let us know what service you need and we'll try to add it.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="serviceName">Service Name</Label>
          <Input
            id="serviceName"
            value={formData.serviceName}
            onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
            placeholder="e.g., Virtual Assistant Services"
            required
            data-testid="input-request-service-name"
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Tell us more about the service you're looking for..."
            rows={5}
            required
            data-testid="input-request-description"
          />
        </div>

        <div>
          <Label htmlFor="email">Your Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            required
            data-testid="input-request-email"
          />
        </div>

        <Button type="submit" className="w-full" data-testid="button-request-submit">
          Submit Request
        </Button>
      </form>
    </div>
  );
}

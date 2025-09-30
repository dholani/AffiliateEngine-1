import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const quickLinks = [
    { name: "Travel", href: "#" },
    { name: "GST/Tax", href: "#" },
    { name: "Health", href: "#" },
    { name: "Legal", href: "#" },
    { name: "Laundry", href: "#" },
    { name: "All Services", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Request Service", href: "#" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "#" },
    { name: "Disclaimer", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Affiliate Disclosure", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-card border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">ServiceHub</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted platform for discovering verified service providers across multiple categories. 
              Find quality services and earn benefits.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  onClick={() => console.log(`${social.name} clicked`)}
                  data-testid={`button-social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground justify-start"
                    onClick={() => console.log(`${link.name} clicked`)}
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground justify-start"
                    onClick={() => console.log(`${link.name} clicked`)}
                    data-testid={`link-company-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground justify-start"
                    onClick={() => console.log(`${link.name} clicked`)}
                    data-testid={`link-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ServiceHub. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-64"
                data-testid="input-newsletter"
              />
              <Button 
                onClick={() => {
                  console.log(`Newsletter signup: ${email}`);
                  setEmail("");
                }}
                data-testid="button-newsletter-signup"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Affiliate Disclosure:</strong> ServiceHub may earn commissions from qualifying purchases made through our affiliate links. 
            This comes at no extra cost to you and helps us maintain this free service.
          </p>
        </div>
      </div>
    </footer>
  );
}

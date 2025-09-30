import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    "Travel", "GST/Tax", "Health", "Legal", "Laundry", "All-purpose", "Elder Care"
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-primary">ServiceHub</h1>
            <nav className="hidden md:flex items-center gap-1">
              {categories.slice(0, 4).map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  size="sm"
                  className="text-sm"
                  data-testid={`link-category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:flex" data-testid="link-admin">
              Admin
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="justify-start"
                  data-testid={`link-mobile-category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
              <Button variant="ghost" className="justify-start" data-testid="link-mobile-admin">
                Admin
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

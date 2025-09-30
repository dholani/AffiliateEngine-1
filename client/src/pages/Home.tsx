import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ServiceCard from "@/components/ServiceCard";
import HowItWorks from "@/components/HowItWorks";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { Plane, FileText, Heart, Scale, Shirt, Home as HomeIcon, Users, Briefcase } from "lucide-react";

export default function Home() {
  //todo: remove mock functionality
  const categories = [
    {
      name: "Travel",
      description: "Book flights, hotels, and vacation packages with trusted travel partners",
      icon: Plane,
      serviceCount: 45,
    },
    {
      name: "GST/Tax",
      description: "Professional tax filing and GST registration services",
      icon: FileText,
      serviceCount: 28,
    },
    {
      name: "Health",
      description: "Online consultations and healthcare services",
      icon: Heart,
      serviceCount: 35,
    },
    {
      name: "Legal",
      description: "Legal consultation and advocate services",
      icon: Scale,
      serviceCount: 22,
    },
    {
      name: "Laundry",
      description: "Professional laundry and dry cleaning services",
      icon: Shirt,
      serviceCount: 18,
    },
    {
      name: "All-purpose",
      description: "Home services, repairs, and maintenance",
      icon: HomeIcon,
      serviceCount: 52,
    },
    {
      name: "Elder Care",
      description: "Professional care services for elderly family members",
      icon: Users,
      serviceCount: 15,
    },
    {
      name: "Child Care",
      description: "Trusted childcare and education services",
      icon: Users,
      serviceCount: 20,
    },
  ];

  const featuredServices = [
    {
      name: "Flight Booking",
      provider: "TravelPayouts",
      description: "Compare and book flights from multiple airlines. Get the best deals on international and domestic travel.",
      featured: true,
    },
    {
      name: "GST Registration",
      provider: "GST Suvidha Kendra",
      description: "Complete GST registration and compliance services for businesses of all sizes.",
      featured: true,
    },
    {
      name: "Online Health Consultation",
      provider: "eSanjeevani",
      description: "Connect with qualified doctors online for medical consultations and prescriptions.",
      featured: true,
    },
  ];

  const blogPosts = [
    {
      title: "Top 5 Travel Services for Your Next Vacation",
      excerpt: "Planning your next trip? Discover our curated list of the best travel services that will make your journey unforgettable...",
      date: "Dec 15, 2024",
      category: "Travel",
    },
    {
      title: "Understanding GST Registration: A Complete Guide",
      excerpt: "Everything you need to know about GST registration for your business, from requirements to the registration process...",
      date: "Dec 12, 2024",
      category: "GST/Tax",
    },
    {
      title: "Benefits of Online Healthcare Services",
      excerpt: "Discover how online healthcare services are revolutionizing access to medical care and improving patient outcomes...",
      date: "Dec 10, 2024",
      category: "Health",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-muted-foreground">
                Explore our wide range of verified service providers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Services</h2>
              <p className="text-lg text-muted-foreground">
                Top-rated services recommended by our community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
              <p className="text-lg text-muted-foreground">
                Tips, guides, and insights about our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.title} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

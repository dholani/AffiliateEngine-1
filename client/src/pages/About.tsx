import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    "Verified and trusted service providers",
    "Transparent affiliate relationships",
    "User-first recommendations",
    "Quality over quantity",
    "Continuous improvement based on feedback",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">About ServiceHub</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                ServiceHub was created to simplify the process of finding trusted service providers across various categories. 
                We believe everyone deserves access to quality services, and our platform makes it easy to discover, compare, 
                and connect with verified providers in one convenient location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <p className="text-muted-foreground mb-4">
                We curate and list reputable service providers across multiple categories including travel, tax services, 
                healthcare, legal consultation, home services, and more. Our team thoroughly vets each provider to ensure 
                they meet our quality standards before featuring them on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Transparency</h2>
              <p className="text-muted-foreground">
                We believe in complete transparency. ServiceHub earns commissions from some of the service providers we recommend. 
                These affiliate relationships help us maintain this free platform while ensuring we only recommend services we 
                genuinely believe in. Our recommendations are based on quality, reliability, and user feedback, never solely on 
                commission rates.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

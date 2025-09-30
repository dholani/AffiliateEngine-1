import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceRequestForm from "@/components/ServiceRequestForm";

export default function RequestService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceRequestForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import ServiceCard from '../ServiceCard';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ServiceCard
        name="Flight Booking"
        provider="TravelPayouts"
        description="Compare and book flights from multiple airlines. Get the best deals on international and domestic travel with our trusted partner."
        featured={true}
      />
    </div>
  );
}

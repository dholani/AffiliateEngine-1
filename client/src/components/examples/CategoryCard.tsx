import CategoryCard from '../CategoryCard';
import { Plane } from 'lucide-react';

export default function CategoryCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <CategoryCard
        name="Travel"
        description="Book flights, hotels, and vacation packages with trusted travel partners"
        icon={Plane}
        serviceCount={45}
      />
    </div>
  );
}

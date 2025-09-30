import BlogCard from '../BlogCard';

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-md">
      <BlogCard
        title="Top 5 Travel Services for Your Next Vacation"
        excerpt="Planning your next trip? Discover our curated list of the best travel services that will make your journey unforgettable..."
        date="Dec 15, 2024"
        category="Travel"
      />
    </div>
  );
}

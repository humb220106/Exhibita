import ExhibitCard from "../Components/Exhibitscard"
import { exhibitsData } from "../Data/Data"

const FeaturedExhibits = () => {
  // Get first 3 exhibits as featured
  const featuredExhibits = exhibitsData.slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Exhibitions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular and captivating exhibitions, carefully curated to provide an unforgettable journey
            through history and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExhibits.map((exhibit) => (
            <ExhibitCard key={exhibit.id} exhibit={exhibit} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedExhibits

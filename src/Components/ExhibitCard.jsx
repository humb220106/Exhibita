import { Link } from "react-router-dom"
import { Calendar, MapPin, Users } from "lucide-react"

const ExhibitCard = ({ exhibit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden exhibit-card-hover">
      <div className="relative h-48 overflow-hidden">
        <img src={exhibit.image || "/placeholder.svg"} alt={exhibit.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4">
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full ${
              exhibit.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {exhibit.status === "active" ? "Open" : "Coming Soon"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{exhibit.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{exhibit.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{exhibit.period}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{exhibit.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-2" />
            <span>{exhibit.visitors} visitors</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {exhibit.tags?.slice(0, 2).map((tag, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <Link
            to={`/exhibit/${exhibit.id}`}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExhibitCard

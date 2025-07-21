import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, MapPin, Users, Share2, Heart, Clock } from "lucide-react"
import { exhibitsData } from "../Data/Data"

const ExhibitDetail = () => {
  const { id } = useParams()

  // Find the exhibit by ID
  const exhibit = exhibitsData.find((exhibit) => exhibit.id === Number.parseInt(id))

  // If exhibit not found, show error
  if (!exhibit) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Exhibition Not Found</h1>
          <p className="text-gray-600 mb-6">The exhibition you're looking for doesn't exist.</p>
          <Link to="/exhibits" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Exhibitions
          </Link>
        </div>
      </div>
    )
  }

  // Get related exhibits (exclude current one)
  const relatedExhibits = exhibitsData
    .filter((ex) => ex.id !== exhibit.id && ex.category === exhibit.category)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/exhibits" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Exhibitions
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={exhibit.image || "/placeholder.svg"} alt={exhibit.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  exhibit.status === "active" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"
                }`}
              >
                {exhibit.status === "active" ? "Open Now" : "Coming Soon"}
              </span>
              {exhibit.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 text-xs bg-white bg-opacity-20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{exhibit.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{exhibit.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Exhibition Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Exhibition Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Period</p>
                    <p className="font-medium">{exhibit.period}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{exhibit.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Visitors</p>
                    <p className="font-medium">{exhibit.visitors}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{exhibit.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Exhibition Highlights</h2>
              <ul className="space-y-3">
                {exhibit.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Artifacts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Artifacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {exhibit.artifacts.map((artifact, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <img
                      src={artifact.image || "/placeholder.svg"}
                      alt={artifact.name}
                      className="w-full h-32 object-cover rounded-md mb-3"
                    />
                    <h3 className="font-semibold text-gray-900 mb-1">{artifact.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{artifact.description}</p>
                    <p className="text-xs text-gray-500">{artifact.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="space-y-4">
                <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Start Virtual Tour
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Favorites
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Exhibition
                </button>
              </div>

              {relatedExhibits.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Related Exhibitions</h3>
                  <div className="space-y-3">
                    {relatedExhibits.map((relatedExhibit) => (
                      <Link
                        key={relatedExhibit.id}
                        to={`/exhibit/${relatedExhibit.id}`}
                        className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <img
                          src={relatedExhibit.image || "/placeholder.svg?height=60&width=60"}
                          alt={relatedExhibit.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{relatedExhibit.title}</p>
                          <p className="text-xs text-gray-500">{relatedExhibit.location}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExhibitDetail

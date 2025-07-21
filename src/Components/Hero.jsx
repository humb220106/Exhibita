import { ArrowRight, Play } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute inset-0 museum-pattern opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore History
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              From Anywhere
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Immerse yourself in world-class exhibitions, discover ancient artifacts, and journey through time with our
            interactive virtual museum experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/exhibits"
              className="inline-flex items-center px-8 py-3 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-colors">
              <Play className="mr-2 h-5 w-5" />
              Watch Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

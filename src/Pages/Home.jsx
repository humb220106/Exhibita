import Hero from "../Components/Hero"
import FeaturedExhibits from "../Components/FeaturedExhibits"
import { Users, Award, Globe, Clock } from "lucide-react"

const Home = () => {
  const stats = [
    { icon: Users, label: "Visitors", value: "50K+" },
    { icon: Award, label: "Exhibitions", value: "25+" },
    { icon: Globe, label: "Countries", value: "120+" },
    { icon: Clock, label: "Hours of Content", value: "500+" },
  ]

  return (
    <div>
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedExhibits />

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of visitors exploring history, art, and culture through our immersive virtual exhibitions.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home

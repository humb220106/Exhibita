import { Users, Award, Globe, Target, Eye, Heart } from "lucide-react"

const About = () => {
  const stats = [
    { icon: Users, label: "Team Members", value: "25+" },
    { icon: Award, label: "Awards Won", value: "12" },
    { icon: Globe, label: "Countries Reached", value: "120+" },
    { icon: Target, label: "Years of Experience", value: "15" },
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Museum Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Leading expert in digital heritage preservation with 20+ years of experience.",
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Pioneering virtual reality experiences and interactive museum technologies.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Curator",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Specialist in ancient civilizations and archaeological artifact preservation.",
    },
    {
      name: "David Thompson",
      role: "Education Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Developing innovative educational programs for virtual museum experiences.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Museum</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              We're dedicated to making history, art, and culture accessible to everyone through innovative virtual
              experiences that transcend physical boundaries.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To democratize access to world-class cultural heritage and educational content through cutting-edge
              virtual museum technology.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Eye className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the world's leading virtual museum platform, inspiring curiosity and learning across all
              cultures and generations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
              <Heart className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Accessibility, authenticity, innovation, and cultural preservation guide everything we do in our virtual
              museum experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2009, our Virtual Museum began as a small project to digitize local historical artifacts.
                What started as a passion project has grown into a global platform serving millions of visitors
                worldwide.
              </p>
              <p>
                We believe that everyone deserves access to the world's cultural treasures, regardless of their
                location, physical abilities, or economic circumstances. Through innovative technology and partnerships
                with museums worldwide, we're breaking down barriers to cultural education.
              </p>
              <p>
                Today, we host over 25 virtual exhibitions, collaborate with 50+ institutions globally, and continue to
                push the boundaries of what's possible in digital heritage preservation and presentation.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Museum team working"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate experts behind our virtual museum experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import Link from 'next/link'

export default function AboutSection() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6">Trusted by UAE's Leading Contractors</h2>
            <p className="text-gray-600 mb-4">
              Since 2005, GulfStar Building Materials has been at the forefront of construction 
              supply in the UAE. We serve major contractors, developers, and construction firms 
              with premium materials sourced from the world's best manufacturers.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to quality, reliable delivery, and technical expertise has made us 
              a preferred partner for iconic projects including Dubai Creek Tower, Abu Dhabi 
              International Airport, and Expo 2020 legacy developments.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Learn More →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-700 font-semibold">Team Members</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-semibold">Global Partners</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-gray-700 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
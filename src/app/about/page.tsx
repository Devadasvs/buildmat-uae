import Image from 'next/image'
import { Target, Award, Users, Building2 } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: '18+', label: 'Years in UAE Market', icon: Award },
    { number: '500+', label: 'Projects Completed', icon: Building2 },
    { number: '150+', label: 'Team Members', icon: Users },
    { number: '50+', label: 'Global Partners', icon: Target },
  ]

  const timeline = [
    { year: '2005', title: 'Company Founded', description: 'GulfStar established in Dubai with focus on structural steel supply' },
    { year: '2010', title: 'Expansion', description: 'Opened second warehouse in Abu Dhabi and expanded product range' },
    { year: '2015', title: 'Global Partnerships', description: 'Partnered with leading international manufacturers' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online platform and inventory management system' },
    { year: '2024', title: 'Market Leadership', description: 'Became UAE\'s leading independent building materials supplier' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <h1 className="heading-2 text-white mb-4">About GulfStar Building Materials</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Since 2005, we've been the trusted partner for contractors, developers, 
            and construction companies across the United Arab Emirates.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-3 mb-6">Leading the UAE Construction Supply Industry</h2>
              <p className="text-gray-600 mb-4">
                GulfStar Building Materials has established itself as a premier supplier of high-quality 
                construction and industrial materials throughout the UAE. With headquarters in Dubai 
                and distribution centers across all seven emirates, we serve the region's most demanding 
                construction projects.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to quality, reliability, and customer service has made us the preferred 
                partner for major contractors including Emaar, Al Habtoor, and Besix. We maintain 
                strategic partnerships with leading international manufacturers to ensure our clients 
                receive the highest quality materials at competitive prices.
              </p>
              <p className="text-gray-600">
                From iconic skyscrapers in Dubai to infrastructure projects in Abu Dhabi and 
                residential developments across the emirates, GulfStar materials have helped shape 
                the UAE's modern landscape.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3"
                alt="GulfStar Warehouse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional quality building materials and unparalleled service to 
                the UAE construction industry, ensuring every project achieves its full potential 
                through reliable supply chains and technical expertise.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative building materials supplier in the UAE, 
                setting new standards for quality, reliability, and sustainability in construction 
                supply.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="heading-3 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 hidden md:block"></div>
            {timeline.map((item, index) => (
              <div key={item.year} className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="md:w-1/2">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
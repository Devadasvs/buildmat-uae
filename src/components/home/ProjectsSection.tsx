import Image from 'next/image'

export default function ProjectsSection() {
  const projects = [
    {
      name: 'Dubai Creek Tower',
      location: 'Dubai',
      material: 'Structural Steel'
    },
    {
      name: 'Abu Dhabi International Airport',
      location: 'Abu Dhabi',
      material: 'Insulation & Cement Boards'
    },
    {
      name: 'Dubai Hills Estate',
      location: 'Dubai',
      material: 'Pipes & Hardware'
    },
    {
      name: 'Al Maryah Island',
      location: 'Abu Dhabi',
      material: 'Aluminum & Roofing'
    }
  ]

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Supplying materials for landmark developments across the UAE
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-300 relative">
                <Image
                  src="/images/projectsection.jpg"
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                <p className="text-sm text-blue-600 font-medium">{project.material}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
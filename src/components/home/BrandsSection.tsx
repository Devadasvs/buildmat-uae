export default function BrandsSection() {
  const brands = [
    'ArcelorMittal', 'Saint-Gobain', 'Knauf', 'Hilti', 'Bosch', 'Makita'
  ]

  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Trusted Manufacturers</h2>
          <p className="text-gray-600">Partnering with world-leading brands to bring you excellence</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand} className="text-center">
              <div className="text-gray-400 text-xl font-semibold">{brand}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
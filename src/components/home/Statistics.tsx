export default function Statistics() {
  const stats = [
    { value: '50,000+', label: 'Tons Delivered Annually' },
    { value: '250+', label: 'Active Clients' },
    { value: '98%', label: 'On-Time Delivery' },
    { value: '24/7', label: 'Customer Support' },
  ]

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
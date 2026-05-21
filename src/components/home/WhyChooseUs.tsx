import { CheckCircle, Truck, Clock, Shield, Award, Headphones } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Next-day delivery across Dubai and Abu Dhabi with our dedicated fleet'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All materials certified and tested to meet UAE construction standards'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Emergency support available around the clock for project sites'
    },
    {
      icon: Award,
      title: 'Industry Experts',
      description: 'Technical team with 100+ years combined construction experience'
    },
    {
      icon: CheckCircle,
      title: 'Best Pricing',
      description: 'Direct manufacturer partnerships ensuring competitive rates'
    },
    {
      icon: Headphones,
      title: 'Technical Consultation',
      description: 'Free expert advice on material selection and specifications'
    }
  ]

  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Why Choose GulfStar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine quality products, technical expertise, and reliable service to support your project's success
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 p-6 rounded-lg">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
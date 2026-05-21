import Link from 'next/link'

export default function CTASection() {
  return (
    <div className="section-padding bg-blue-600">
      <div className="container-custom text-center">
        <h2 className="heading-2 text-white mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Contact our team for competitive quotes and expert technical advice
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/request-quote"
            className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors font-semibold"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  )
}
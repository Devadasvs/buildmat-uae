import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative container-custom py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Building Materials for UAE's Construction Industry
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Supplying structural steel, cement boards, pipes, insulation, hardware, and tools to major contractors across the United Arab Emirates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-center font-semibold"
            >
              Explore Products
            </Link>
            <Link
              href="/request-quote"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-center font-semibold"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
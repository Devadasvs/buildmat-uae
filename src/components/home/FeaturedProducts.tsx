'use client'

import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 6)

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular building materials trusted by UAE's top contractors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
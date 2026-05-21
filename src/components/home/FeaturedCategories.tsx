import Link from 'next/link'
import { categories } from '@/data/categories'

export default function FeaturedCategories() {
  const featuredCategories = categories.slice(0, 8)

  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of high-quality building materials for every construction need
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
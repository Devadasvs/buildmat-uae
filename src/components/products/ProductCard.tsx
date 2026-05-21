import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-blue-600 font-semibold mb-1 uppercase">
          {product.category}
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
        >
          View Details →
        </Link>
      </div>
    </div>
  )
}
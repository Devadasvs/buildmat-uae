'use client'

import { notFound, useRouter } from 'next/navigation'
import { products } from '@/data/products'
import Image from 'next/image'
import { Download, MessageCircle, Check, Truck, Shield, Clock } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const product = products.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const handleWhatsAppInquiry = () => {
    const message = `Hello, I'm interested in ${product.name} (SKU: ${product.sku}). Could you please provide pricing and availability?`
    window.open(`https://wa.me/971507891234?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleDownloadCatalog = () => {
    alert(`Downloading catalog for ${product.name}`)
  }

  return (
    <div className="bg-gray-50">
      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <button onClick={() => router.push('/')} className="hover:text-blue-600">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => router.push('/products')} className="hover:text-blue-600">Products</button>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Images */}
            <div>
              <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative h-20 bg-gray-100 rounded overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-2">
                <span className="text-sm text-blue-600 font-semibold">{product.category.toUpperCase()}</span>
              </div>
              <h1 className="heading-3 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="border-t border-b py-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500">SKU</span>
                    <p className="font-mono text-sm font-medium">{product.sku}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Category</span>
                    <p className="font-medium">{product.category}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Free delivery across UAE on orders over AED 5,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Manufacturer warranty included</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Next-day delivery in Dubai & Abu Dhabi</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleDownloadCatalog}
                  className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Catalog
                </button>
                <button
                  onClick={handleWhatsAppInquiry}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Inquiry
                </button>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="border-t p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="px-4 py-3 font-semibold w-1/3">{spec.label}</td>
                      <td className="px-4 py-3 text-gray-700">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
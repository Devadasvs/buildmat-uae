import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-600">GulfStar</span>
              <span className="text-white"> BM</span>
            </div>
            <p className="text-sm mb-4">
              Premium building materials supplier serving the UAE construction industry since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link href="/request-quote" className="hover:text-blue-600 transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Dubai Silicon Oasis, Dubai, UAE</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm">+971 4 567 8900</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm">sales@gulfstarbm.ae</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Sunday - Thursday: 8:00 AM - 6:00 PM</li>
              <li>Friday: Closed</li>
              <li>Saturday: Closed</li>
              <li className="mt-4 pt-4 border-t border-gray-800">
                <span className="text-blue-600">24/7</span> Emergency Support
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GulfStar Building Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
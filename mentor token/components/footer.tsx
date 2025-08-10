import Link from "next/link"
import { Linkedin, Twitter, Facebook } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo i diskripcija */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaV2NCKR71r8AFjMPT8yOcxdKUBQrY.png"
                alt="Mentor Token Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold">Mentor Token</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              With Mentor Token, every failure transforms into an opportunity for growth.
            </p>
          </div>

          {/* Pejgovi */}
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white">
                Contact Us
              </Link>
              <Link href="/" className="block text-gray-400 hover:text-white">
                Home
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>stefansmokovski75@gmail.com</p>
              <p>+(389) 123 456 789</p>
            </div>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6">
          <p className="text-gray-400 text-sm">
            ©2025 Mentor Token. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
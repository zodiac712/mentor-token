import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative py-20 text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82fee28bb72f6b61b0aac2695e15d5b93531902b.jpg-rTO2OeRrDwcuGaBmb4ppksQCWZv8gG.jpeg"
          alt="Geometric background pattern"
          fill
          className="object-cover opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Meet our team members
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          We Focus on the details of everything we do. All to help businesses around the world
          Focus on what's most important to them.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 px-6 py-3 text-sm bg-[#696CFF] text-white rounded-xl hover:bg-[#5a5ed8] transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>Get in touch</span>
        </Link>
      </div>
    </section>
  )
}

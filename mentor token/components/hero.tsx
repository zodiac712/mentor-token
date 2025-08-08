import { ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background%20image.jpg-o6L5N5jCWs7e9xXiPIaY1ur2eNOplV.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Grow your StartUp!<br />
              Monitoring and<br />
              Evaluating now is easy!
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Welcome to Mentor Token, where we redefine the dynamics of start-up success. Our innovative platform offers a transformative approach to mentorship, ensuring that mentors are not just engaged but motivated to drive the success of the ventures they support.
            </p>

            <div className="flex items-center space-x-4">
              <a 
                href="/get-started" 
                className="inline-flex items-center space-x-2 px-6 py-3 text-sm bg-[#696CFF] text-white rounded-xl hover:bg-[#5a5ed8] transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Get Started</span>
              </a>
              <a 
                href="/contact" 
                className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/*Laptop Image */}
          <div className="relative flex justify-end items-center lg:w-1/2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:h-full lg:max-w-[60%]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4a89a1857d65949c80d7c27ee55ebbec0e59524d-jFxzyIL6gM7vDVY3qhH0KHzdLV2iji.png"
              alt="Mentor Token Dashboard"
              width={800}
              height={600}
              className="w-full h-auto object-contain lg:w-[120%] lg:max-w-none lg:ml-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

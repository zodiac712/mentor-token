import { Target, TrendingUp, Gift, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          {/* Logo */}
          <div className="flex flex-col items-center space-y-12 mb-12">
            <div className="w-full max-w-4xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qP3IyX5LD1nM0p51bnqw6XDY3mJE0R.png"
                alt="Company Logos - Adobe, Brave, Hellosign, Maze, Ghost"
                width={1200}
                height={80}
                className="w-full h-auto object-contain opacity-70"
              />
            </div>
            <div className="w-full max-w-4xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eMOx76u57GK14C6g1ZgNzwre2t6ede.png"
                alt="Company Logos - Atlassian, Treehouse, Intercom, Opendoor, HubSpot"
                width={1200}
                height={80}
                className="w-full h-auto object-contain opacity-70"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              More than 25+ Startups around the world trusted Mentor Token.
            </p>
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="bg-gradient-to-br from-[#696CFF] to-[#9574FF] py-20 relative">
        <div className="absolute top-[-350px] right-[-200px] z-30 transform -rotate-12 h-[614px] opacity-100 shadow-none w-[1004px]">
          <Image
            src="/rocket.png"
            alt="Rocket Illustration"
            width={614}
            height={614}
            className="w-full h-auto opacity-100"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="text-white/60 text-sm uppercase tracking-wider">
                FEATURES
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Boost Your Startup's Journey:
              <br />
              Discover Mentor Token's Robust Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Goal Setting</h3>
              <p className="text-white/80 text-sm">
                Set clear and achievable goals for your startup's success.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Performance Tracking
              </h3>
              <p className="text-white/80 text-sm">
                Monitor mentor performance in real-time and track progress.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reward System</h3>
              <p className="text-white/80 text-sm">
                Motivate mentors with a secure and rewarding token-based reward
                system.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Knowledge Library</h3>
              <p className="text-white/80 text-sm">
                Access a comprehensive knowledge library to equip mentors with
                the skills and motivation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

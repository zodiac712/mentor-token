import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F6F7FF] flex items-center justify-center">
      <div className="flex w-[1260px] h-[728px] bg-white rounded-[10px] shadow-lg overflow-hidden">
        
        <div
          className="w-[50%] h-full relative flex flex-col justify-between"
          style={{
            background: `linear-gradient(135deg, #696CFF 0%, #9574FF 100%)`,
            overflow: "visible", 
          }}
        >
          
          <div className="absolute inset-0 z-0">
            <Image
              src="/background-logo.png"
              alt="Background Pattern"
              fill
              style={{
                objectFit: "cover",
                opacity: 0.22,
              }}
              className="pointer-events-none select-none"
              priority
            />
          </div>
          {/* Rocket slika */}
          <div
            style={{
              position: "absolute",
              left: "18%",
              bottom: "-14%",
            }}
          >
            <Image
              src="/rocket.png"
              alt="Rocket"
              width={850}
              height={320}
              priority
              style={{ maxWidth: "1080px", maxHeight: "1080px", transform: "rotate(-7deg)" }}
            />
          </div>
          
          <div className="pt-12 pl-12 pr-8 z-10 relative">
            <h2 className="text-white text-[78px] font-extrabold leading-[1.05] mb-3">
              GROW<br />YOUR<br />STARTUP!
            </h2>
            <p className="text-white text-[17.5px] font-medium mb-2">
              MONITORING AND EVALUATING NOW IS EASY!
            </p>
          </div>
          
          <div className="flex flex-col items-start pl-12 pb-8 z-20 relative">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaV2NCKR71r8AFjMPT8yOcxdKUBQrY.png"
                alt="Mentor Token Logo"
                width={24}
                height={24}
                className="mr-2 invert"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="text-white text-[18px] font-semibold">Mentor Token</span>
            </div>
            <span className="text-white text-[13px] ml-8 mt-1">mentortoken.com</span>
          </div>
        </div>
        
        <div className="w-[50%] flex flex-col justify-center items-center px-12 py-8 bg-white">
          <div className="w-full max-w-[340px]">
            <div className="flex flex-col items-center mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaV2NCKR71r8AFjMPT8yOcxdKUBQrY.png"
                alt="Mentor Token Logo"
                width={38}
                height={38}
                className="mb-2"
              />
              <h3 className="text-[#23272E] text-[22px] font-semibold text-center mb-1">
                LOG IN TO MENTOR TOKEN
              </h3>
              <p className="text-[#A0A3BD] text-[14px] text-center">
                Enter your email and pass to login.
              </p>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-[#696CFF] text-[13px] font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="mentortoken@mail.com"
                  className="w-full border border-[#696CFF] rounded-[8px] px-4 py-2 text-base focus:outline-none focus:border-[#6C63FF] transition"
                />
              </div>
              <div>
                <label className="block text-[#696CFF] text-[13px] font-medium mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-[#696CFF] rounded-[8px] px-4 py-2 text-base focus:outline-none focus:border-[#6C63FF] transition"
                />
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-[#696CFF] text-[13px] hover:underline">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#696CFF] text-white font-semibold py-2 rounded-[8px] text-[16px] hover:bg-[#5a5ed8] transition"
              >
                Log in
              </button>
              <div className="text-center text-[#A0A3BD] text-[13px] mt-2">
                Don’t have account? <Link href="/register" className="text-[#696CFF] font-semibold hover:underline">Register.</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
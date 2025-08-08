import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, LayoutDashboard, Users, Coins, LogOut, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

export default function DashboardPreview() {
  // Reusable Star SVG with linear gradient fill
  const StarIcon = () => (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.56637 0.28418L4.70904 4.04781L0.557617 4.64787L3.56199 7.57877L2.85172 11.7139L6.56637 9.76266L10.281 11.7139L9.57074 7.57877L12.5751 4.65195L8.42369 4.04781L6.56637 0.28418Z" fill="url(#paint0_linear_35_225)"/>
      <defs>
        <linearGradient id="paint0_linear_35_225" x1="6.56637" y1="0.28418" x2="6.56637" y2="11.7139" gradientUnits="userSpaceOnUse">
          <stop offset="0.161458" stopColor="#6669FB"/>
          <stop offset="0.635417" stopColor="#8E4FFF"/>
          <stop offset="0.755208" stopColor="#9059F1"/>
          <stop offset="1" stopColor="#9747FF"/>
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <>
      {/* Purple Header Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Every <span className="text-[#696CFF]">success</span> is rewarded!
            </h2>
          </div>
        </div>
      </section>

      {/* White Dashboard */}
      <section className="bg-white py-8 relative overflow-hidden">
       
        <div className="absolute w-[700px] h-[650px] right-[-100px] top-[-150px] z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-od9I6POqPhH2TeQejBE005qF3uZAr8.png"
            alt="Productivity Illustration"
            width={558}
            height={523}
            className="w-full h-full object-contain"
          />
        </div>

        {/*Blue Outline */}
        <div className="container mx-auto px-4 relative z-20 min-h-[700px] flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto border-4 border-[#696CFF] w-full">
            <div className="flex h-[600px]">
              {/* Sidebar */}
              <div className="w-64 bg-gray-50 p-6 border-r border-gray-200 flex flex-col">
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaV2NCKR71r8AFjMPT8yOcxdKUBQrY.png"
                    alt="Mentor Token Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="font-semibold text-gray-900 text-sm">Mentor Token</span>
                </div>

                {/* Navigation */}
                <nav className="space-y-1 flex-1">
                  <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-white rounded-lg text-sm">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3 px-3 py-2 bg-[#696CFF]/10 text-[#696CFF] rounded-lg text-sm border-l-2 border-[#696CFF]">
                    <Users className="w-4 h-4" />
                    <span>Mentors</span>
                  </div>
                  <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-white rounded-lg text-sm">
                    <Coins className="w-4 h-4" />
                    <span>Tokens</span>
                  </div>
                </nav>

                {/* Logout */}
                <div className="mt-auto">
                  <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-white rounded-lg cursor-pointer text-sm">
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 relative">
                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search Mentor..." className="pl-10 bg-white text-sm h-[35px] border-gray-300 w-[400px]" />
                </div>
                {/* Header i Buttons */}
                <div className="flex flex-col mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h1 className="text-xl font-bold text-gray-900">Mentors</h1>
                      <p className="text-gray-600 text-sm">Monitor and add new mentors</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button className="bg-[#696CFF] hover:bg-[#5a5ed8] text-sm h-9 px-4">
                      + Add New Mentor
                    </Button>
                    <Button variant="outline" className="text-sm h-9 px-4 border-[#696CFF] text-[#696CFF]">
                      Create New Job
                    </Button>
                  </div>
                </div>

                {/* Mentors Lista */}
                <div className="space-y-3 mb-6">
                  {/* Mentor 1 (2.5 stars) */}
                  <Card className="p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AMyYkWNL0FdZf3axnpj9VTvTyNh5fZ.png"
                          alt="Kierra Press Profile"
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-sm">Kierra Press</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ID</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-1">
                            <StarIcon />
                            <StarIcon />
                           
                            <StarIcon />
                            <Star className="w-3 h-3 text-gray-300" />
                            <Star className="w-3 h-3 text-gray-300" />
                            <span className="text-xs text-gray-600 ml-2">2.5% average focus on KPI success rate</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-1">Skills: Sales | Management | Problem-solving</p>
                          <p className="text-xs text-gray-500">Field sales training, 5+ years in an outside sales position</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-[#696CFF] hover:bg-[#5a5ed8] text-xs h-8 px-3">
                        View Mentor
                      </Button>
                    </div>
                  </Card>

                  {/* Mentor 2 (5 stars) */}
                  <Card className="p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cN4jwpXBEpBhtGnie0QRF8EHD2grrQ.png"
                          alt="Alison Vetrovs Profile"
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-sm">Alison Vetrovs</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ID</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-1">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <span className="text-xs text-gray-600 ml-2">4.9% average focus on KPI success rate</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-1">Skills: Sales | Management | Problem-solving</p>
                          <p className="text-xs text-gray-500">The sales representative position is an OR based sales role with uncapp...</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-[#696CFF] hover:bg-[#5a5ed8] text-xs h-8 px-3">
                        View Mentor
                      </Button>
                    </div>
                  </Card>

                  {/* Mentor 3 (4 stars) */}
                  <Card className="p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Image
                          src="/image.png"
                          alt="Marcus Carder Profile"
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-sm">Marcus Carder</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ID</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-1">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <Star className="w-3 h-3 text-gray-300" />
                            <span className="text-xs text-gray-600 ml-2">3.2% average focus on KPI success rate</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-1">Skills: Sales | Management | Problem-solving</p>
                          <p className="text-xs text-gray-500">Regional sales manager with a strong background in sales and marketi...</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-[#696CFF] hover:bg-[#5a5ed8] text-xs h-8 px-3">
                        View Mentor
                      </Button>
                    </div>
                  </Card>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="icon" className="border-[#696CFF] text-[#696CFF]">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <div className="text-sm text-gray-600">1-3 of 25</div>
                  <Button variant="outline" size="icon" className="border-[#696CFF] text-[#696CFF]">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

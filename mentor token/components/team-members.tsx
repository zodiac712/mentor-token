import Image from "next/image"
import Link from "next/link"
import { Github, Facebook, Linkedin } from 'lucide-react'
import { Card } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Ian Sorell",
    title: "CEO",
    description: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3edf170860bd8cbc37debc437ee46cfc812c7918%20%281%29.jpg-zIvueotlMTSV0WWufZAn0YlcicA2m7.jpeg",
    social: {
      github: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Maya Matt",
    title: "Founder",
    description: "Pop music lover, seeks joy and exciting pop concerts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6be6ecfed0aeaa1e8fbaa6f9c45badf0d7a763db%20%281%29.jpg-uRIEUiKL0mpfosMzSZL5KacBS8BK6Q.jpeg",
    social: {
      github: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Alex Jensen",
    title: "CTO",
    description: "Bookworm, creative software developer with precision",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d3Hok6wB8Ex3qLb9kn4S7Pe20WGw0s.png",
    social: {
      github: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Keira Battye",
    title: "Product Designer",
    description: "Creative painter capturing beauty with imaginative artwork",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fcf5dbf8a60f8660b370b432520d1e7ddd3cf12b%20%281%29.jpg-6mxmeOCySVNAjLjf6NImOFUYN97YK2.jpeg",
    social: {
      github: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Dominic Game",
    title: "3D Artist",
    description: "Football enthusiast, enjoys movie nights with friends",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/da6c3aff1b3f65d1bdb6107a5c79723b4e973636%20%281%29.jpg-pBV54bfEsHnwv2e7mmWJQWA5LC4lJr.jpeg",
    social: {
      github: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "James Vial",
    title: "Head of Front-End",
    description: "Culinary artist, explores diverse flavors, skilled in cooking",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a65a9a3840ceeeac2b2c8eaf436d36fc8327025d%20%281%29.jpg-CUWdaOgfBn8HDXxBnVspPlg9PCrBln.jpeg",
    social: {
      github: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
];

export default function TeamMembers() {
  const firstRowMembers = teamMembers.slice(0, 4);
  const secondRowMembers = teamMembers.slice(4); 

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/*team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-8">
          {firstRowMembers.map((member, index) => (
            <Card key={index} className="flex flex-col items-center p-6 shadow-none border-none bg-transparent text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full object-cover mb-4 w-32 h-32"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-[#696CFF] text-sm mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm mb-4 max-w-[200px]">{member.description}</p>
              <div className="flex space-x-3">
                <Link href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

     
        <div className="flex justify-center gap-8 flex-wrap"> 
          {secondRowMembers.map((member, index) => (
            <Card key={index} className="flex flex-col items-center p-6 shadow-none border-none bg-transparent text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full object-cover mb-4 w-32 h-32"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-[#696CFF] text-sm mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm mb-4 max-w-[200px]">{member.description}</p>
              <div className="flex space-x-3">
                <Link href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

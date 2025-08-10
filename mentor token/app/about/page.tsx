import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import TeamMembers from "@/components/team-members"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <TeamMembers />
      <Footer />
    </main>
  )
}

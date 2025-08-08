import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import DashboardPreview from "@/components/dashboard-preview"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DashboardPreview />
      <Footer />
    </main>
  )
}

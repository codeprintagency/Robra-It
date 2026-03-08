import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import RobraDifference from "@/components/RobraDifference"
import Trust from "@/components/Trust"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <RobraDifference />
      <Trust />
      <ContactForm />
      <Footer />
    </main>
  )
}

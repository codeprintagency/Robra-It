import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import HowItWorks from "@/components/HowItWorks"
import Trust from "@/components/Trust"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Trust />
      <ContactForm />
      <Footer />
    </main>
  )
}

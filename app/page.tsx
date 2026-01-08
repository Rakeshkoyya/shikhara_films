import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

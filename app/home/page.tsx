import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Strengths from "../components/Strengths";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#FFFBF5]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Strengths />
      <Contact />
      <Footer />
    </main>
  );
}

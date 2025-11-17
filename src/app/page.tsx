import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/ContactForm";
import About from "./components/About";
import ContactInfo from "./components/ContactInfo";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <ContactInfo />
      <Testimonials />
    </>
  );
}

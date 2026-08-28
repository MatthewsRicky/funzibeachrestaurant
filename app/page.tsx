import About from "@/components/About";
import Accommodation from "@/components/Accommodation";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Destinations from "@/components/Destinations";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
//import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-stone-100 text-slate-900">
      <Hero />
      <About />
      <WhyUs />
      <Destinations />
      <Packages />
      <Accommodation />
      <Gallery />
  {/* <Testimonials /> */}
      <CTA />
      <ContactForm />
    </main>
  );
}

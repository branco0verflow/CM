import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marcas from "@/components/Marcas";
import Destacados from "@/components/Destacados";
import TiendaMoto from "@/components/TiendaMoto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marcas />
        <TiendaMoto />
        <Destacados />
      </main>
      <Footer />
    </>
  );
}

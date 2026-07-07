import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marcas from "@/components/Marcas";
import Destacados from "@/components/Destacados";
import TiendaMoto from "@/components/TiendaMoto";
import Footer from "@/components/Footer";
import BannerStats from "@/components/BannerStats";
import WhatsAppFloat from "@/components/ui/WhatsAppFloating";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main>
        <Hero />
        <BannerStats />
        <Marcas />
        <TiendaMoto />
        <Destacados />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiendaMoto from "@/components/TiendaMoto";

export const metadata = {
  title: "Tienda de Motos — CyclesMotors",
  description: "Catálogo completo de motos disponibles en CyclesMotors.",
};

export default function TiendaPage() {
  return (
    <>
      <Navbar />
      <main>
        <TiendaMoto />
      </main>
      <Footer />
    </>
  );
}

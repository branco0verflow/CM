import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiendaEquipamiento from "@/components/TiendaEquipamiento";

export const metadata = {
  title: "Equipamiento — CyclesMotors",
  description: "Cascos, camperas, guantes y todo el equipamiento para tu moto.",
};

export default function EquipamientoPage() {
  return (
    <>
      <Navbar />
      <main>
        <TiendaEquipamiento />
      </main>
      <Footer />
    </>
  );
}

export type MotoColor = {
  nombre: string;
  imagenPrincipalColor: string;
};

export type MotoEspecificaciones = {
  motor: string;
  chasis: string;
  dimensiones: string;
};

export type Moto = {
  id: string;
  destacado: boolean;
  imagenPrincipal: string;
  otrasImagenes: string[];
  marca: string;
  modelo: string;
  version: string;
  precio: string;
  descripcion: string;
  estilo: string;
  colores: MotoColor[];
  especificaciones: MotoEspecificaciones;
};

// "USD 9.990" -> 9990
export function parsePrecio(precio: string): number {
  return Number(precio.replace(/[^\d]/g, ""));
}

// 9990 -> "USD 9.990"
export function formatPrecio(valor: number): string {
  return `USD ${valor.toLocaleString("es-UY")}`;
}

export const motos: Moto[] = [
   {
    id: "1",
    destacado: true,
    imagenPrincipal: "/images/motos/m1.png",
    otrasImagenes: [
      "/images/motos/m6.png",
      "/images/motos/m3.png"
    ],
    marca: "Benelli",
    modelo: "TRK 502",
    version: "Standard",
    precio: "USD 9.990",
    descripcion: "Moto touring versátil, cómoda para viajes largos y uso diario.",
    estilo: "TURISMO",
    colores: [
      {
        nombre: "Naranja",
        imagenPrincipalColor: "/images/motos/m4.png"
      },
      {
        nombre: "Negro",
        imagenPrincipalColor: "/images/motos/m5.png"
      }
    ],
    especificaciones: {
      motor: "Bicilíndrico 500cc, 4T, refrigeración líquida, inyección electrónica",
      chasis: "Estructura tubular de acero",
      dimensiones: "Largo 2200 mm, ancho 915 mm, alto 1450 mm"
    }
  },
  {
    id: "2",
    destacado: false,
    imagenPrincipal: "/images/motos/m6.png",
    otrasImagenes: [
       "/images/motos/m6.png",
      "/images/motos/m11.png"
    ],
    marca: "Benelli",
    modelo: "Leoncino 500",
    version: "Trail",
    precio: "USD 8.990",
    descripcion: "Scrambler moderna con diseño clásico y buena respuesta urbana.",
    estilo: "CLASSIC",
    colores: [
      {
        nombre: "Verde",
        imagenPrincipalColor: "/images/motos/m11.png"
      },
      {
        nombre: "Rojo/Negro",
        imagenPrincipalColor: "/images/motos/m6.png"
      }
    ],
    especificaciones: {
      motor: "Bicilíndrico 500cc, 4T, DOHC, refrigeración líquida",
      chasis: "Estructura tubular de acero",
      dimensiones: "Largo 2140 mm, ancho 875 mm, alto 1160 mm"
    }
  },
  {
    id: "3",
    destacado: false,
    imagenPrincipal: "/images/motos/m8.png",
    otrasImagenes: [
       "/images/motos/m6.png",
      "/images/motos/m3.png"
    ],
    marca: "Benelli",
    modelo: "302S",
    version: "ABS",
    precio: "USD 6.990",
    descripcion: "Naked compacta, ágil y pensada para ciudad y ruta corta.",
    estilo: "NAKED",
    colores: [
      {
        nombre: "Negro",
        imagenPrincipalColor: "/images/motos/m8.png"
      },
      {
        nombre: "Rojo/Negro",
        imagenPrincipalColor: "/images/motos/m6.png"
      },
      {
        nombre: "Amarillo/Negro",
        imagenPrincipalColor: "/images/motos/m11.png"
      }
    ],
    especificaciones: {
      motor: "Bicilíndrico 300cc, 4T, refrigeración líquida",
      chasis: "Tubular de acero",
      dimensiones: "Largo 2130 mm, ancho 800 mm, alto 1120 mm"
    }
  },
  {
    id: "4",
    destacado: false,
    imagenPrincipal: "/images/motos/m10.png",
    otrasImagenes: [
       "/images/motos/m7.png",
      "/images/motos/m5.png"
    ],
    marca: "Kawasaki",
    modelo: "Z900",
    version: "ABS",
    precio: "USD 14.990",
    descripcion: "Supernaked potente con motor de cuatro cilindros y diseño agresivo.",
    estilo: "NAKED",
    colores: [
      {
        nombre: "Negro",
        imagenPrincipalColor: "/images/motos/m5.png"
      },
      {
        nombre: "Rojo/Negro",
        imagenPrincipalColor: "/images/motos/m10.png"
      },
      {
        nombre: "Beige/Negro",
        imagenPrincipalColor: "/images/motos/m7.png"
      }
    ],
    especificaciones: {
      motor: "4 cilindros en línea 948cc, refrigeración líquida",
      chasis: "Trellis de acero de alta resistencia",
      dimensiones: "Largo 2070 mm, ancho 825 mm, alto 1080 mm"
    }
  },
  {
    id: "5",
    destacado: false,
    imagenPrincipal: "/images/motos/m7.png",
    otrasImagenes: [
      "/images/motos/m7.png",
      "/images/motos/m5.png"
    ],
    marca: "Kawasaki",
    modelo: "Versys 650",
    version: "Tourer",
    precio: "USD 12.990",
    descripcion: "Adventure touring cómoda para viajes largos y uso mixto.",
    estilo: "TURISMO",
    colores: [
      {
        nombre: "Beige",
        imagenPrincipalColor: "/images/motos/m7.png"
      }
    ],
    especificaciones: {
      motor: "Bicilíndrico paralelo 649cc, refrigeración líquida",
      chasis: "Doble viga de acero",
      dimensiones: "Largo 2165 mm, ancho 840 mm, alto 1400 mm"
    }
  },
  {
    id: "6",
    destacado: false,
    imagenPrincipal: "/images/motos/m9.png",
    otrasImagenes: [
      "/images/motos/m7.png",
      "/images/motos/m5.png"
    ],
    marca: "Kawasaki",
    modelo: "Ninja 400",
    version: "ABS",
    precio: "USD 9.490",
    descripcion: "Deportiva liviana, ideal para quienes buscan estética racing.",
    estilo: "SPORT",
    colores: [
      {
        nombre: "Beige",
        imagenPrincipalColor: "/images/motos/m7.png"
      },
      {
        nombre: "Azul",
        imagenPrincipalColor: "/images/motos/m3.png"
      },
      {
        nombre: "Verde",
        imagenPrincipalColor: "/images/motos/m10.png"
      }
    ],
    especificaciones: {
      motor: "Bicilíndrico 399cc, refrigeración líquida",
      chasis: "Trellis de acero",
      dimensiones: "Largo 1990 mm, ancho 710 mm, alto 1120 mm"
    }
  },
  {
    id: "7",
    destacado: false,
    imagenPrincipal: "/images/motos/m4.png",
    otrasImagenes: [
      "/images/motos/m8.png",
      "/images/motos/m4.png"
    ],
    marca: "KTM",
    modelo: "390 Duke",
    version: "Standard",
    precio: "USD 8.490",
    descripcion: "Naked deportiva, liviana y muy divertida para ciudad.",
    estilo: "NAKED",
    colores: [
      {
        nombre: "Naranja",
        imagenPrincipalColor: "/images/motos/m9.png"
      },
      {
        nombre: "Azul",
        imagenPrincipalColor: "/images/motos/m4.png"
      },
      {
        nombre: "Bordo",
        imagenPrincipalColor: "/images/motos/m3.png"
      }
    ],
    especificaciones: {
      motor: "Monocilíndrico 399cc, DOHC, refrigeración líquida",
      chasis: "Trellis de acero",
      dimensiones: "Largo 2072 mm, ancho 831 mm, alto 1109 mm"
    }
  },
  {
    id: "8",
    destacado: false,
    imagenPrincipal: "/images/motos/m9.png",
    otrasImagenes: [
      "/images/motos/m8.png",
      "/images/motos/m4.png"
    ],
    marca: "KTM",
    modelo: "250 Duke",
    version: "Standard",
    precio: "USD 6.990",
    descripcion: "Naked compacta con estética deportiva y excelente maniobrabilidad.",
    estilo: "NAKED",
    colores: [
      {
        nombre: "Negro / Naranja",
        imagenPrincipalColor: "/images/motos/m5.png"
      },
      {
        nombre: "Blanco",
        imagenPrincipalColor: "/images/motos/m12.png"
      },
      {
        nombre: "Celeste",
        imagenPrincipalColor: "/images/motos/m11.png"
      }
    ],
    especificaciones: {
      motor: "Monocilíndrico 249cc, refrigeración líquida",
      chasis: "Trellis de acero",
      dimensiones: "Largo 2070 mm, ancho 830 mm, alto 1100 mm"
    }
  },
  {
    id: "9",
    destacado: false,
    imagenPrincipal: "/images/motos/m2.png",
    otrasImagenes: [
      "/images/motos/m6.png",
      "/images/motos/m3.png",
      "/images/motos/m11.png",
      "/images/motos/m12.png"
    ],
    marca: "Vespa",
    modelo: "GTS 300",
    version: "Super",
    precio: "USD 10.990",
    descripcion: "Scooter premium de diseño italiano, cómoda y elegante.",
    estilo: "Scooter",
    colores: [
      {
        nombre: "Blanco",
        imagenPrincipalColor: "/images/motos/m12.png"
      },
      {
        nombre: "Azul",
        imagenPrincipalColor: "/images/motos/m4.png"
      },
      {
        nombre: "Rojo",
        imagenPrincipalColor: "/images/motos/m12.png"
      }
    ],
    especificaciones: {
      motor: "Monocilíndrico 278cc, 4T, refrigeración líquida",
      chasis: "Carrocería portante de acero",
      dimensiones: "Largo 1950 mm, ancho 755 mm, alto 1170 mm"
    }
  },
  {
    id: "10",
    destacado: true,
    imagenPrincipal: "/images/motos/m12.png",
    otrasImagenes: [
      "/images/motos/m2.png",
      "/images/motos/m5.png",
      "/images/motos/m12.png",
      "/images/motos/m11.png"
    ],
    marca: "Vespa",
    modelo: "Primavera 150",
    version: "ABS",
    precio: "USD 7.990",
    descripcion: "Scooter clásico, liviano y elegante para ciudad.",
    estilo: "Scooter",
    colores: [
      {
        nombre: "Celeste",
        imagenPrincipalColor: "/images/motos/m12.png"
      },
      {
        nombre: "Negro",
        imagenPrincipalColor: "/images/motos/m2.png"
      }
    ],
    especificaciones: {
      motor: "Monocilíndrico 155cc, 4T, inyección electrónica",
      chasis: "Carrocería monocasco de acero",
      dimensiones: "Largo 1860 mm, ancho 735 mm, alto 1150 mm"
    }
  },
  {
    id: "11",
    destacado: false,
    imagenPrincipal: "/images/motos/m3.png",
    otrasImagenes: [
      "/images/motos/m6.png",
      "/images/motos/m3.png",
      "/images/motos/m11.png",
      "/images/motos/m12.png",
      "/images/motos/m2.png"
    ],
    marca: "Bajaj",
    modelo: "Dominar 400",
    version: "Touring",
    precio: "USD 6.790",
    descripcion: "Moto sport touring de buen rendimiento para ruta y ciudad.",
    estilo: "TURISMO",
    colores: [
      {
        nombre: "Negro",
        imagenPrincipalColor: "/images/motos/m13.png"
      },
      {
        nombre: "Azul",
        imagenPrincipalColor: "/images/motos/m12.png"
      },
      {
        nombre: "Naranja",
        imagenPrincipalColor: "/images/motos/m4.png"
      }
    ],
    especificaciones: {
      motor: "Monocilíndrico 373cc, 4T, refrigeración líquida",
      chasis: "Perimetral de acero",
      dimensiones: "Largo 2156 mm, ancho 836 mm, alto 1112 mm"
    }
  },
  {
    id: "12",
    destacado: false,
    imagenPrincipal: "/images/motos/m13.png",
    otrasImagenes: [
      "/images/motos/m8.png",
      "/images/motos/m4.png",
      "/images/motos/m12.png"
    ],
    marca: "Bajaj",
    modelo: "Pulsar N250",
    version: "ABS",
    precio: "USD 4.990",
    descripcion: "Naked urbana con buena potencia, diseño moderno y bajo consumo.",
    estilo: "NAKED",
    colores: [
      {
        nombre: "Amarillo",
        imagenPrincipalColor: "/images/motos/m13.png"
      },
      {
        nombre: "Rojo/Negro",
        imagenPrincipalColor: "/images/motos/m6.png"
      },
      {
        nombre: "Naranja",
        imagenPrincipalColor: "/images/motos/m4.png"
      }
    ],
    especificaciones: {
      motor: "Monocilíndrico 249cc, 4T, refrigerado por aceite",
      chasis: "Tubular de acero",
      dimensiones: "Largo 1989 mm, ancho 743 mm, alto 1050 mm"
    }
  },
  {
    id: "13",
    destacado: false,
    imagenPrincipal: "/images/motos/m3.png",
    otrasImagenes: [
      "/images/motos/m8.png",
      "/images/motos/m4.png",
      "/images/motos/m12.png"
    ],
    marca: "Keeway",
    modelo: "RKF 125",
    version: "Standard",
    precio: "USD 3.490",
    descripcion: "Naked liviana, económica y ágil para uso urbano.",
    estilo: "NAKED",
    colores: [
      {
        nombre: "Negro",
        imagenPrincipalColor: "/images/motos/m3.png"
      },
      {
        nombre: "Amarillo",
        imagenPrincipalColor: "/images/motos/m13.png"
      },
      {
        nombre: "Azul",
        imagenPrincipalColor: "/images/motos/m12.png"
      }
    ],
    especificaciones: {
      motor: "Monocilíndrico 125cc, 4T, refrigeración líquida",
      chasis: "Tubular de acero",
      dimensiones: "Largo 2030 mm, ancho 780 mm, alto 1070 mm"
    }
  },
  {
    id: "14",
    destacado: false,
    imagenPrincipal: "/images/motos/m4.png",
    otrasImagenes: [
      "/images/motos/m8.png",
      "/images/motos/m4.png",
      "/images/motos/m12.png"
    ],
    marca: "Beta",
    modelo: "RR 300",
    version: "2T",
    precio: "USD 11.990",
    descripcion: "Enduro de alto rendimiento para uso off-road exigente.",
    estilo: "BKX",
    colores: [
      {
        nombre: "Rojo Beta",
        imagenPrincipalColor: "/images/motos/m8.png"
      },
      {
        nombre: "Azul",
        imagenPrincipalColor: "/images/motos/m6.png"
      },
      {
        nombre: "Violeta",
        imagenPrincipalColor: "/images/motos/m1.png"
      }
    ],
    especificaciones: {
      motor: "Monocilíndrico 293cc, 2T, refrigeración líquida",
      chasis: "Doble cuna de acero molibdeno",
      dimensiones: "Largo 2172 mm, ancho 815 mm, alto 1270 mm"
    }
  },
  {
    id: "15",
    destacado: false,
    imagenPrincipal: "/images/motos/m11.png",
    otrasImagenes: [
      "/images/motos/m8.png",
      "/images/motos/m4.png",
      "/images/motos/m12.png"
    ],
    marca: "Yumbo",
    modelo: "GS 200",
    version: "Adventure",
    precio: "USD 2.990",
    descripcion: "Moto accesible para ciudad, caminos y uso diario.",
    estilo: "TURISMO",
    colores: [
      {
        nombre: "Amarillo",
        imagenPrincipalColor: "/images/motos/m11.png"
      },
      {
        nombre: "Azul",
        imagenPrincipalColor: "/images/motos/m1.png"
      }
    ],
    especificaciones: {
      motor: "Monocilíndrico 200cc, 4T, refrigeración por aire",
      chasis: "Tubular de acero",
      dimensiones: "Largo 2080 mm, ancho 820 mm, alto 1180 mm"
    }
  }
];

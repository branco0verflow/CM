"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function SafeImage({
  src,
  alt,
  className,
  fallback,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
  loading?: "lazy" | "eager";
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [broken, setBroken] = useState(false);

  // Al cambiar de src (galería / color) le damos una chance limpia a la nueva imagen.
  useEffect(() => {
    setBroken(false);
  }, [src]);

  useEffect(() => {
    // Si ya falló antes de que React hidrate/monte, el evento "error" no
    // burbujea y se pierde: lo detectamos acá también.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setBroken(true);
    }
  }, [src, broken]);

  if (broken) return <>{fallback}</>;

  return (
    <img
      key={src}
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setBroken(true)}
    />
  );
}

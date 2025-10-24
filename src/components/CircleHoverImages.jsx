import React from "react";

export default function CircleHoverImages({ items }) {
  /*
    items = [
      {
        primary: "url-imagen-principal.jpg",
        secondary: "url-imagen-hover.jpg",
        alt: "Descripción",
        link: "https://pagina-destino.com"
      },
      ...
    ]
  */

  return (
    <section
      id="contacto"
      className="w-full flex flex-col justify-center items-center text-center px-4 sm:px-8 py-12"
    >
      {/* Título */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-10">
        Medios de contacto
      </h2>

      {/* Contenedor de íconos */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {items.map(({ primary, secondary, alt, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden cursor-pointer block transition-transform duration-300 hover:scale-110"
          >
            {/* Imagen principal */}
            <img
              src={primary}
              alt={alt}
              className="w-full h-full object-cover rounded-full transition-opacity duration-300 ease-in-out"
            />
            {/* Imagen secundaria en hover */}
            <img
              src={secondary}
              alt={alt}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

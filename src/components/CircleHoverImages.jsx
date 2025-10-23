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
        <section className="max-w-3xl mx-auto p-20">
            <h2 id="contacto" className="text-3xl font-bold text-pink-500 mb-8 text-center">Medios de contacto</h2>
            <div className="flex space-x-6 justify-center flex-wrap">

                {items.map(({ primary, secondary, alt, link }, i) => (
                    <a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-24 h-24 rounded-full overflow-hidden cursor-pointer block"
                    >
                        {/* Imagen principal */}
                        <img
                            src={primary}
                            alt={alt}
                            className="w-full h-full object-cover rounded-full transition-opacity duration-300 ease-in-out"
                        />
                        {/* Imagen secundaria que aparece al hacer hover */}
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

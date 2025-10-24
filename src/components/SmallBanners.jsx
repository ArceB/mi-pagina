export default function SmallBanners({ items }) {
  try {
    return (
      <section
        id="sobre-mi"
        className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-8 py-12"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-8 text-center">
            Mis pasatiempos
          </h2>

          {/* Contenedor principal responsivo */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-gray-300 shadow-md hover:shadow-lg transition-all duration-200 bg-white"
                title={item.title}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />
                )}

                {/* Título opcional debajo del banner 
                <div className="p-2 bg-white text-center text-sm sm:text-base font-semibold text-gray-700">
                  {item.title}
                </div>*/}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error en SmallBanners:", error);
    return <div>Error al cargar banners.</div>;
  }
}

export default function SmallBanners({ items }) {
    try {
        return (
            <section id="sobre-mi" className="min-h-screen w-screen flex flex-col justify-center items-center text-center">
                <div className="max-w-screen-lg mx-auto overflow-x-auto">
                    <h2 className="text-3xl font-bold text-pink-500 mb-8 text-center">Pasatiempos</h2>
                    <div className="flex space-x-4 w-max">
                        
                        {items.map((item, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-60 rounded-lg overflow-hidden border border-gray-300 shadow"
                                title={item.title}
                            >
                                {item.type === 'image' ? (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-60 object-cover"
                                        loading="lazy"
                                    />
                                ) : (
                                    <video
                                        src={item.src}
                                        controls
                                        className="w-full h-60 object-cover"
                                    />
                                )}
                                {/**
            <div className="p-2 bg-white text-center text-sm font-semibold text-gray-700">
              {item.title}
            </div>
             */}
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

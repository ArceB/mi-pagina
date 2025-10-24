export default function TwoCards({ cards }) {
  return (
    <section
      id="cripto"
      className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-8 py-12"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-10">
        Criptografía
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8">
        {cards.map(({ title, description, image }, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center bg-pink-50 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 flex-1 min-w-[280px] max-w-md md:max-w-none transition-transform hover:scale-[1.02]"
          >
            <img
              src={image}
              alt={title}
              className="w-full sm:w-40 md:w-48 h-40 md:h-48 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
            />

            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-pink-700 mb-2">
                {title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

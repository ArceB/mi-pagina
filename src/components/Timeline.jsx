export default function Timeline({ events }) {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-8 py-10">
      <h2
        id="escuela"
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-8 text-center"
      >
        Formación Académica
      </h2>

      <div className="relative border-l-2 sm:border-l-4 border-pink-500 pl-6 sm:pl-10 w-full max-w-3xl">
        {events.map((event, idx) => (
          <div key={idx} className="mb-8 sm:mb-10 relative">
            {/* Circulo */}
            <span className="absolute -left-3 sm:-left-5 top-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full border-2 sm:border-4 border-white"></span>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-rose-500">
              {event.title}
            </h3>

            <time className="block mb-1 text-rose-400 text-sm sm:text-base">
              {event.date}
            </time>

            <p className="text-rose-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

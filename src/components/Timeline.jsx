export default function Timeline({ events }) {
  return (
    <section className="min-h-screen w-screen flex flex-col justify-center items-center text-center px-6">
      <h2 id="escuela"  className="text-3xl font-bold text-pink-500 mb-8 text-center">Formación Académica</h2>
      <div className="relative border-l-4 border-pink-500 pl-8">
        {events.map((event, idx) => (
          <div key={idx} className="mb-10 relative">
            {/* Circulo */}
            <span className="absolute -left-5 top-1.5 w-4 h-4 bg-pink-500 rounded-full border-4 border-white"></span>

            <h3 className="text-xl font-semibold text-rose-500">{event.title}</h3>
            <p className="text-rose-700">{event.description}</p>
            <time className="block mb-2 text-rose-500">{event.date}</time>
            
          </div>
        ))}
      </div>
    </section>
  );
}

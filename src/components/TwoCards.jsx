export default function TwoCards({ cards }) {
    return (
        <section id="cripto" className="min-h-screen w-screen flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-3xl font-bold text-pink-500 mb-8 text-center">Criptografía</h2>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                {cards.map(({ title, description, image }, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row items-center bg-pink-100 rounded-xl shadow-lg p-6 flex-1"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-pink-700 mb-2">{title}</h3>
                            <p className="text-gray-700">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

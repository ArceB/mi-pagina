export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-pink-100 shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex flex-wrap justify-center sm:justify-between items-center p-4 text-center">
        {/* Contenedor de enlaces */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base">
          <a href="#escuela" className="text-pink-800 hover:text-pink-600">
            Formación Académica
          </a>
          <a href="#cripto" className="text-pink-800 hover:text-pink-600">
            Criptografía
          </a>
          <a href="#sobre-mi" className="text-pink-800 hover:text-pink-600">
            Sobre mí
          </a>
          <a href="#contacto" className="text-pink-800 hover:text-pink-600">
            Medios de contacto
          </a>
          <a href="#cv" className="text-pink-800 hover:text-pink-600">
            CV
          </a>
          <a
            href="https://drive.google.com/file/d/1Lhq8u5y8Mrj4VHyks5jNcT5T7M4GF6l5/view?usp=drive_link"
            className="text-pink-800 hover:text-pink-600"
          >
            Llave pública
          </a>
        </div>
      </nav>
    </header>
  );
}

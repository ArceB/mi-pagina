export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-pink-100 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">

        <div className="space-x-6">
          <a href="#escuela" className="text-pink-800 hover:text-pink-600">Formación Académica</a>
          <a href="#cripto" className="text-pink-800 hover:text-pink-600">Criptografía</a>
          <a href="#sobre-mi" className="text-pink-800 hover:text-pink-600">Sobre mí</a>
          <a href="#contacto" className="text-pink-800 hover:text-pink-600">Medios de contacto</a>
          <a href="#cv" className="text-pink-800 hover:text-pink-600">CV</a>
          <a
            href="/Alicia_public.pem"
            download="Alicia_public.pem"
            className="text-pink-800 hover:text-pink-600"
          >Llave pública</a>
        </div>
      </nav>
    </header>
  );
}

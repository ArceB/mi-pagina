export default function Inicio() {
  return (
    <section
      id="inicio"
      className="min-h-screen w-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Imagen o avatar opcional */}
      <img
        src="https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/365557971_6436060649845866_1696875577930442924_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5APtg_6QenRaWdi1GnbLZIAKvDrhwLyQgAq8OuHAvJHjN7XaWS2sGgQtyvJhSASysqm6tzgbMBLhU8yYSXG8u&_nc_ohc=BDjd3NLIEo0Q7kNvwHaWQ41&_nc_oc=AdnOOLR7bocqO18qDR_j7CsH2Ig4RJCmfC4-wF3voajgdGi0OCYMPXPVbfcMXcFnngY&_nc_zt=23&_nc_ht=scontent.fmex23-1.fna&_nc_gid=0ZxytExxDcs7mu95EAemAA&oh=00_Affi4Pt2iOdVWcX6xipQFQr9A8qR2viSkH13Lo2LpjTKwQ&oe=68FFA44C" 
        alt="Foto de Arcelia"
        className="w-32 h-32 rounded-full object-cover border-4 border-pink-500 shadow-lg mb-6"
      />

      {/* Título principal */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-pink-400 mb-4">
        <span className="text-pink-500">Arcelia Ameyalli Bermúdez Moreno</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-lg md:text-xl text-rose-200 max-w-2xl mb-8">
        "Esta vida te golpeará; esto es solo un obstáculo temporal, pero el fracaso te trae libertad" - Taylor Swift
      </p>
    </section>
  );
}

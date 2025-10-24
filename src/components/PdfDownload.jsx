export default function PdfDownload({
  pdfSrc,
  previewImgSrc,
  altText = "PDF preview",
  fileName = "archivo.pdf",
}) {
  return (
    <section
      id="cv"
      className="w-full flex flex-col justify-center items-center text-center px-4 sm:px-8 py-12"
    >
      {/* Título responsivo */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-8">
        Curriculum Vitae
      </h2>

      {/* Contenedor del PDF */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg cursor-pointer text-center">
        <a
          href={pdfSrc}
          download={fileName}
          title="Descargar PDF"
          className="block"
        >
          <img
            src={previewImgSrc}
            alt={altText}
            className="rounded-xl shadow-lg hover:opacity-85 transition-opacity w-full h-auto"
            loading="lazy"
          />
          <p className="mt-4 text-pink-700 font-semibold text-base sm:text-lg md:text-xl">
            Descargar PDF
          </p>
        </a>
      </div>
    </section>
  );
}

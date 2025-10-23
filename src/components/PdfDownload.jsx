export default function PdfDownload({ pdfSrc, previewImgSrc, altText = "PDF preview", fileName = "archivo.pdf" }) {
    return (
        <section className="max-w-3xl mx-auto p-20">
            <h2 id="cv"  className="text-3xl font-bold text-pink-500 mb-8 text-center">Curriculum vitae</h2>
            <div className="pdf-download cursor-pointer inline-block" style={{ maxWidth: "200px", textAlign: "center" }}>
                <a href={pdfSrc} download={fileName} title="Descargar PDF">
                    <img
                        src={previewImgSrc}
                        alt={altText}
                        className="rounded-lg shadow-md hover:opacity-80 transition-opacity"
                        style={{ width: "100%", height: "auto" }}
                    />
                    <p className="mt-2 text-pink-700 font-semibold">Descargar PDF</p>
                </a>
            </div>
        </section>

    );
}

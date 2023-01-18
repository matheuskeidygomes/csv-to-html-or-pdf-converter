import pdf from 'html-pdf';

class PDFWriter {

    static PDFWrite(filename, html) {
        pdf.create(html,{}).toFile(filename, (err) => {})
    }
}

export default PDFWriter;
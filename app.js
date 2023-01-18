import Reader from './classes/Reader.js';
import Processor from './classes/Processor.js';
import Table from './classes/Table.js';
import HtmlParser from './classes/HtmlParser.js';
import Writer from './classes/Writer.js';
import PdfWrite from './classes/PdfWriter.js';

let Read = new Reader();
let Write = new Writer();

async function HTMLCompile(file) {
    let dados = Read.Read(file);
    let process = Processor.Process(dados);
    let users = new Table(process);
    let html = await HtmlParser.Parse(users);
    Write.Write(`${Date.now()}.html`, html);
}

async function PDFCompile(file) {
    let dados = await Read.Read(file);
    let process = Processor.Process(dados);
    let users = new Table(process);
    let html = await HtmlParser.Parse(users);
    PdfWrite.PDFWrite(`${Date.now()}.pdf`, html);
}


HTMLCompile("./files/postos.csv");
PDFCompile("./files/postos.csv");
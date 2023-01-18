import ejs from 'ejs';
import path from 'path';
const __dirname = path.resolve(); 

class HtmlParser {

    static async Parse(table){
        try { 
            return await ejs.renderFile(path.join( __dirname, '/views/table.ejs'), {header: table.header, rows: table.rows});
        } catch(err) {
            return undefined;
        }
    }
}

export default HtmlParser;
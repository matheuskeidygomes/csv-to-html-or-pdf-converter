import fs from 'fs';

class Reader {

    constructor() {
        this.reader = fs.promises.readFile;     
        //this.reader = fs.readFileSync;  // Synchronous Option
    }

    async Read(file) {
        try {
            return this.reader(file, 'utf8');
        } catch (err) {
            return undefined;
        }
    }
}

export default Reader;
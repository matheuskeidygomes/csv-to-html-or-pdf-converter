import fs from 'fs';

class Reader {

    constructor() {
        this.reader = fs.promises.readFile;     
    }

    async Read(file) {
        try {
            return await this.reader(file, 'utf8');
        } catch (err) {
            return undefined;
        }
    }
}

export default Reader;
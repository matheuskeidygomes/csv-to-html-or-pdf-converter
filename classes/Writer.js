import fs from 'fs';

class Writer {
    
    constructor() {
        this.writer = fs.promises.writeFile;
    }

    async Write(filename, data) {
        try {
            await this.writer(filename, data);
        } catch(err) {
            return undefined;
        }
    }
}

export default Writer;
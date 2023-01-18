class Processor {

    static Process(file) {
        let data = file.split("\r\n");
        let rows = [];
        data.forEach(item => {
            let row = item.split(";");
            rows.push(row);
        });
        return rows;
    }
}

export default Processor;
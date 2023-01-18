class Table {

    constructor(array){ 
        this.header = array[0];
        array.shift();
        this.rows = array;
    }

    RowCount(){
        return this.rows.length;
    }

    ColumnCount(){
        return this.header.length;
    }
}

export default Table;
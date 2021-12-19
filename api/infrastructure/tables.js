class Tables {
    init(connection) {
        this.connection = connection

        this.createFinances();
    }

    createFinances() {
        const sql = 'CREATE TABLE IF NOT EXISTS finances (id int NOT NULL AUTO_INCREMENT, titulo varchar(50) NOT NULL, lancamento float NOT NULL, dia date NOT NULL, PRIMARY KEY(id))'

        this.connection.query(sql, erro => {
            if(erro) {
                console.log(erro);
            } else {
                console.log('Tabela finances criada com sucesso')
            }
        });
    }
}

module.exports = new Tables;
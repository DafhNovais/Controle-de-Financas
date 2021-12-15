const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection');
const Tables = require('./infrastructure/tables');

connection.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('Conectado com sucesso');

        Tables.init(connection);
        const app = customExpress();

        // Rodando aplicação na porta setada
        app.listen(3004, () => console.log('Servidor rodando na porta 3004')); 

        // app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'));
    }
});

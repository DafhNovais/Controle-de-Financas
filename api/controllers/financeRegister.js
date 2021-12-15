const financeRegister = require('../models/financeRegister');

module.exports = app => {
    app.get('/finance-register', (req, res) => {
        financeRegister.list(res);
    });

    app.get('/finance-register/:id', (req, res) => {
        const id = parseInt(req.params.id)

        financeRegister.searchForId(id, res);
    });

    app.post('/finance-register', (req, res) => {
        const register = req.body;

        financeRegister.add(register, res);  
    });

    app.patch('/finance-register/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        financeRegister.change(id, values, res);
    });

    app.delete('/finance-register/:id', (req, res) => {
        const id = parseInt(req.params.id);

        financeRegister.remove(id, res);
    });
}

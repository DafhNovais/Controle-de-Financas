const moment = require('moment');
const connection = require('../infrastructure/connection');

class FinanceRegister {
    add(financeRegister, res) {
        // const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
        const dia = moment(financeRegister.dia, 'YY/YY/MMDD').format('YYYY-MM-DD');
        const registerDate = {...financeRegister, dia}
        const sql = 'INSERT INTO finances SET ?'

        connection.query(sql, registerDate, (error, result) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(financeRegister);
            }
        });
    }

    list(res) {
        const sql = "SELECT id, titulo, lancamento, DATE_FORMAT(dia, '%d/%m/%Y') AS dia FROM finances";

        connection.query(sql, (error, result) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(result);
            }
        });
    }

    searchForId(id, res) {
        const sql = `SELECT * FROM finances WHERE id=${id}`;

        connection.query(sql, (error, result) => {
            const finance = result[0];
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(finance);
            }
        });
    }

    total(res) {
        const sql = 'SELECT SUM(lancamento) AS total FROM finances'

        connection.query(sql, (error, result) => {
            const total = result[0];
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(total);
            }
        });
    }

    change(id, values, res) {
        if(values.dia) {
            values.dia = moment(values.dia, 'DD/MM/YYYY').format('YYYY-MM-DD');
        }

        const sql = 'UPDATE finances SET ? WHERE id=?';

        connection.query(sql, [values, id], (error, result) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({...values, id});
            }
        });
    }

    remove(id, res) {
        const sql = 'DELETE FROM finances WHERE id=?'

        connection.query(sql, id, (error, result) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({id});
            }
        });
    }
}

module.exports = new FinanceRegister;

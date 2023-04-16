const db = require('../config/db');
const bcrypt = require('bcrypt');

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        const sqlGetUser = `SELECT  id, display_name, first_name, last_name, email, phone, 
    address, gender, dob, image, roles FROM users where id = ?`;
        db.query(sqlGetUser, [id], (err, result) => {
            if (err) {
                console.log(err);
                return reject({
                    status: 500,
                    result: { err: 'Something went wrong' },
                });
            }
            if (result.length === 0)
                return resolve({
                    status: 404,
                    result: { errMsg: 'Data cannot be found' },
                });
            return resolve({
                status: 200,
                result: { msg: 'Get user data success.', data: result[0] },
            });
        });
    });
};

module.exports = {
    getUserById,
};
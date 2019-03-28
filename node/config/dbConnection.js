var mysql = require('mysql');

var connMysql = function () {

    // return mysql.createConnection({
    //     host : 'localhost',
    //     user : 'root',
    //     password : '1234567',
    //     database : 'pn'
    // });

    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'bandtec',
        database : 'node'
    });

}

module.exports = function () {
    return connMysql;
}
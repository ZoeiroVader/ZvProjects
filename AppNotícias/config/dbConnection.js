var mysql = require('mysql');
var cMysql = () =>{
    console.log("porra");
    
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'bandtec',
        database : 'node'
    });
}
module.exports = () => {   
    return cMysql; 
}
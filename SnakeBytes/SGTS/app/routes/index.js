var config = require('../../config/db')
var sql = require('mssql')


module.exports = function(app){

	app.get('/', function(req, res){
		// res.send('Bem vindo a sua app NodeJS <br>');
		sql.connect(config).then(() => {
			return sql.query`Select * from Clientes`
		}).then(result => {
			console.log(result);
			res.send(result);
			sql.close()
		}).catch(err => {
			console.log(err);
			sql.close()		
		})
			
		sql.on('error', err => {
			sql.close();
		});
			
	});

	app.get('/insert', function(req, res){
		sql.connect(config).then(() => {
			return sql.query`INSERT INTO Clientes
			VALUES (123, 1212,'Messias', 3123123, 4524,'Joelson@comercial.com'); `
		}).then(result => {
			res.send(result);
			sql.close()
		}).catch(err => {
			console.log(err);
			sql.close();	
		});

		sql.on('error', err => {
			sql.close();
		});
	})

}

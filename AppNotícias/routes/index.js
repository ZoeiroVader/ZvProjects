
module.exports = (app) =>{
    app.get('/',(req,res) =>{
        res.statusCode = 200;
        res.end("<h1>COMI O CU DE QUEM TA LENDO")

    });

};
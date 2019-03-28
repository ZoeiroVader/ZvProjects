var http = require('http');

var server =http.createServer( function (req, res) {
    var categoria = req.url;
    if(categoria == "/disney"){
        res.end("<html><body>Ta na disney Fiato</body></html>");
    }else if (categoria == "/marte") {
        res.end("<html><body>Vai da não</body></html>");
    }else{
        res.end("<html><body>Portal de Notícias</body></html>");
    }

});

server.listen(3000);
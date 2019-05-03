module.exports = function (app) {
    app.get('/addnoticia', function (req, res) {
        res.render("admin/form_add_noticia");
    });
}

module.exports = function (app) {
    app.post('/noticias/salvar', function (req, res) {
        var noticias = req.body;
        res.send(noticias);
    });
}
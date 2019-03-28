module.exports = function (app) {
    app.get('/addnoticia', function (req, res) {
        res.render("admin/form_add_noticia")
    });
}
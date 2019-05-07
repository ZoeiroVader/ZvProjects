module.exports.form = (app, req, res)=>{
    res.render('admin/form_add_noticia', {err : {}, n: {}});
};

module.exports.salvarNoticia = (app, req, res)=>{
    var noticia = req.body;
        req.assert('titulo',"Não deixa o titulo vazio karalho").notEmpty();
        req.assert('noticia',"Não deixa a noticia vazia karalho").notEmpty();
        var validacao = req.validationErrors();
        console.log(noticia);
        
        if (validacao) {
            res.render('admin/form_add_noticia', {err : validacao, n: noticia});
            return false;
        }
        //Conexão
        var con = app.config.dbConnection();
        //Model
        var noticiasDAO = new app.app.models.noticiasDAO(con);
        //Salvar Notícia
        noticiasDAO.salvarNoticia(noticia, (err, result)=>{            
            res.redirect('/noticias');
        })
}

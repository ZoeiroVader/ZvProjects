var con = app.config.dbConnection();

module.exports.noticias = (app, req, res)=>{
    var noticiasDAO = new app.app.models.noticiasDAO(con);
    
    noticiasDAO.getNoticias((err, result)=>{            
        res.render('noticias/noticias', {noticias : result});
    })
};

module.exports.noticia = (app, req, res)=>{
    
    var noticiasDAO = new app.app.models.noticiasDAO(con);

    noticiasDAO.getNoticia((err, result)=>{            
        res.render('noticias/noticia', {noticia : result});
    });
};
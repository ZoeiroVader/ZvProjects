
module.exports = (app) =>{
    app.get('/noticias', (app, req, res)=>{  
        app.app.controllers.noticias.noticias(app, req, res);
        //res.render('noticias/noticias');
    });

    app.get('/noticia', (app, req, res)=>{
        app.app.controllers.noticias.noticia(app, req, res);
    });
}
module.exports = (app) =>{
    app.get('/form', (req, res)=>{
        app.app.controllers.admin.form(app, req, res);
    });

    app.post('/noticias/salvar', (req, res)=>{
        app.app.controllers.admin.salvarNoticia(app, req, res);
           
        //res.render('admin/form_add_noticia');
    });
}
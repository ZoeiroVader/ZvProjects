class NoticiasDAO {
    constructor(con) {
        this._con = con;
    }
    getNoticias(callback) {
        this._con.query('select * from noticias', callback);
    }
    getNoticia(callback) {
        this._con.query('select * from noticias where id = 1', callback);
    }
    salvarNoticia(noticia, callback) {
        this._con.query('insert into noticias set ? ', noticia, callback);
    }
}

module.exports = ()=>{    
    return NoticiasDAO;
}
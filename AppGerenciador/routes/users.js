const NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) =>{
    let route = app.route('/users');

    route.get((req, res)=>{
        db.find({}).sort({name:1}).exec((err,users) =>{
            if(err){
                app.utils.error.send(err, req, res);
            } else{
                res.status(200).json({
                    users
                });
            }
        });
    });
    
    route.post((req, res)=>{
        req.assert('name', 'nome é obrigatório').notEmpty();
        req.assert('email', 'email é INVALIDO').notEmpty();
        req.assert('password', 'senha é obrigatória').notEmpty();

        let error = req.validationErrors();
        if (error) {
            app.utils.error.send(error, req, res);
            
        }else{
            db.insert(req.body,(err, user)=>{
                if(err){
                    app.utils.error.send(err, req, res);
                } else{
                    res.status(200).json(user);
                }
            });
        }
        
    });

    let routeId = app.route('/users/:id');
    routeId.get((req, res) =>{
        db.findOne({_id: req.params.id}).exec((err, user) =>{
            if(err){
                app.utils.error.send(err, req, res);
            } else{
                res.status(200).json(user);
            }
        })
    });

    routeId.put((req, res) =>{
        db.update({_id: req.params.id}, req.body, err =>{
            if(err){
                app.utils.error.send(err, req, res);
            } else{
                res.status(200).json(Object.assign(req.body, req.params));
            }
        })
    });

    routeId.delete((req, res) => {
        db.remove({_id: req.params.id}, {}, err=>{
            if(err){
                app.utils.error.send(err, req, res);
            } else{
                res.status(200).json(Object.assign(req.body, req.params));
            }
        });
    });


}; 
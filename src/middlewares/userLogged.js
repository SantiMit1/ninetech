const db = require("../database/models")

async function userLogged(req, res, next) {
    try {
        res.locals.isLogged = false;
        let userLogged
        if(req.cookies.token) {
            userLogged = await db.user.findOne({
                where: {
                    token: req.cookies.token
                },
                include: ["domicilio"]
            })
        }
        
        if(userLogged) {
            req.session.userLogged = userLogged;
        }
    
        if(req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
    
        next();
    } catch (e) {
        res.json(e)
    }
}

module.exports = userLogged;
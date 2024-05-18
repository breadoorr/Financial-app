const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, 'my financial secret', (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.redirect('/login');
            }
            else {
                console.log(decodedToken);
                // res.status(200);
                res.cookie('id', decodedToken.id.toString());
                next();
            }
        })
    }
    else {
        res.redirect('/login');
    }
}

module.exports = { requireAuth };
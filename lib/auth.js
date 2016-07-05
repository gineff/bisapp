/**
 * Created by Andrey on 28.06.2016.
 */
var express = require('express');
var router = express.Router();

var expressJwt = require('express-jwt');
var jwt = require( 'jsonwebtoken');
var jwtSecret  = require( '../config').jwtSecret;

module.exports = function (User) {

  return router.all('/:node', function (req, res, next) {
    if(req.params.node == 'login') {
      const password = req.query.password;
      User.find({password}, function (err, docs) {

        if(!docs.length) {
          next(new Error('неправильный пароль'))
        }else{
          const user = docs[0].toObject();
          const expiresIn = 60 * 60 * 24 * 180; // 180 days
          const token = jwt.sign(user, jwtSecret, { expiresIn });
          res.json({token, user})
        }

      });
    }else if(req.params.node == 'logout'){
    }

  });


}
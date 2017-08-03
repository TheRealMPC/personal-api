var exports = module.exports = {}
const skills = require('../skillz.js')
const secrets = require('../secrets.js')
exports.addHeaders = function(req, res, next) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  });

  next();
}

exports.generateId = function (req, res, next) {
  req.body.id = skills.length + 1
  next();
}

exports.verify = function (req, res, next) {
  console.log(req.params);
  if (req.params.username === secrets.username && req.params.pin === secrets.pin) {
    next();
  } else {
    res.status(401).send({"message": "not allowed"})
  }

}

var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

/* GET home page. */
router.get('/', function(req, res, next) {
//   var sts = new AWS.STS({accessKeyId: 'AKIAJQ66SOY2N3RPPO5A', secretAccessKey: '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'});
//   sts.getSessionToken({DurationSeconds: 3600}, function (err, data) {
//   if (err) console.log("Error getting credentials %o", err);
//   else {
//     console.log(data)
//     console.log( sts.credentialsFrom(data));
//     // var tempCreds = new AWS.TemporaryCredentials();
//     // res.render('index', { title: 'Express', tempCreds: tempCreds });
//   }
// });
var sts = new AWS.STS({accessKeyId: 'AKIAJQ66SOY2N3RPPO5A', secretAccessKey: '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'});
var tempCreds = new AWS.Credentials;
sts.getSessionToken(function (err, data) {
  if (err) console.log("Error getting credentials");
  else {
    res.render('index', { title: 'Express', tempCreds: data.Credentials});
  }
});
});

module.exports = router;

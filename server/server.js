var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var AWS = require('aws-sdk');

var s3 = new AWS.S3({region: 'eu-west-1', profile: 'developerPlayground'});
var app = express();
app.use(bodyParser.text({
  type: function(req) {
    return 'text';
  }
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/post', function (req, res) {
  res = res.status(200);
  if (req.get('Content-Type')) {
    console.log('Got POSTed data');
    console.log("Content-Type: " + req.get('Content-Type'));
    res = res.type(req.get('Content-Type'));
  }

  // Bucket names must be unique across all S3 users

  var myBucket = 'joseph-smith-support-frontend-config';
  var myKey = 'amounts.json';

  params = {Bucket: myBucket, Key: myKey, Body: req.body, ACL: 'public-read'};
  s3.putObject(params, function(err, data) {
    if (err) {
      const msg = `Error: ${err}`;
      res.send(msg);
      console.error(msg);
    } else {
      const msg = `Successfully uploaded data to ${myBucket}/${myKey}`;
      res.send(msg);
      console.log(msg);
      console.log(res.body);
    }
  });

  // res.send(req.body);
});

http.createServer(app).listen(7000);
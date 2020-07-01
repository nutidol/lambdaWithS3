const AWS = require('aws-sdk');
const s3 = new AWS.S3();

function getMessage(callback) {
  var params = {
    Bucket: 'nat-test-hello',
    Key: 'hello.json',
  };
  
  s3.getObject(params, function (err, data) {
        if (err) {
          console.log(err, err.stack);
        }
        else {
          let jsondata = JSON.parse(data.Body.toString('utf-8')); 
          
          callback(jsondata);
        }
  });
}

module.exports = {
  getMessage
}

// var message = require('./manageFile');
const aws = require('aws-sdk');
const s3 = new aws.S3();


// exports.hello = (event, context, callback) => {
//     message.getMessage((jsonresult)=>{
//     const response = {
//       statusCode: 200,
//       body: jsonresult
//     };
//     callback(null, response);
//   });
// };

exports.hello = function (event, context, callback) {

  // check event info
  console.log('Received event:', JSON.stringify(event, null, 2));

  //get bucket and key from uploading s3 object and to trigger lambda
  var new_bucket = event.Records[0].s3.bucket.name;
  var new_key = event.Records[0].s3.object.key;
  var params = {
    Bucket: new_bucket,
    Key: new_key,
  };

  s3.getObject(params, function (err, data) {
    if (err) {
      console.log('ERROR' + err);
      exit(err);
    } else {
      console.log("from S3:\n" + data.Body.toString('ascii'));
      callback(null, null);
    }
  }
  );
};

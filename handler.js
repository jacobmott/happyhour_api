'use strict';

module.exports.post = (event, context, callback) => {
  
  let postinfo = JSON.parse(event.body);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      username: postinfo.name,
      posttext: postinfo.text
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

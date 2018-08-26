import AWS from 'aws-sdk';

let options = {
  params: {
    TableName: process.env.DYNAMODB_TABLE
  }
};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    ...options,
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

export default client;

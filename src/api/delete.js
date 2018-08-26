import client from './client';

export default async event => {
  const {
    pathParameters: { id }
  } = event;
  const params = { TableName: process.env.DYNAMODB_TABLE, Key: id };
  return client.delete(params).promise();
};

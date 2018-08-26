import client from './client';

export const all = async () => {
  const { Items } = await client
    .scan({ TableName: process.env.DYNAMODB_TABLE })
    .promise();
  return {
    statusCode: 200,
    body: JSON.stringify(Items)
  };
};

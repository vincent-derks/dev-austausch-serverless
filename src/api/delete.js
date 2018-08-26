import client from './client';

export default async event => {
  const {
    pathParameters: { id }
  } = event;
  const params = { Key: { id } };
  return client.delete(params).promise();
};

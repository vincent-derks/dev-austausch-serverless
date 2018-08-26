import uuid from 'uuid';
import client from './client';

export default async event => {
  const item = JSON.parse(event.body);
  const id = uuid();
  const now = +new Date();
  await client
    .put({
      Item: {
        id,
        inserted_at: now,
        ...item
      }
    })
    .promise();
  return {
    statusCode: 200,
    body: `Succesfully insert item with id ${id}`
  };
};

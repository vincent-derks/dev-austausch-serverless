import uuid from 'uuid';
import client from './client';

export default async event => {
  console.log(event);
  const item = {
    title: 'test'
  };
  try {
    const id = uuid();
    await client
      .put({
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
          id,
          ...item
        }
      })
      .promise();
    return {
      statusCode: 200,
      body: `Succesfully insert item with id ${id}`
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};

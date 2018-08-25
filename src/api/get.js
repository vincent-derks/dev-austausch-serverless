import client from './client';

export const all = async event => {
  try {
    const { Items } = await client
      .scan({ TableName: process.env.DYNAMODB_TABLE })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify(Items)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};

export const byId = async event => {
  const {
    pathParameters: { id }
  } = event;
  try {
    const { Item } = await client.get({
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id
      }
    });
    return {
      statusCode: 200,
      body: JSON.stringify(Item)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};

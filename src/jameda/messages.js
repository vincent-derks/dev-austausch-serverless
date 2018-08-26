import fs from 'fs';
import { readableToString } from '@rauschma/stringio';

export default async () => {
  const template = fs.ReadStream('src/jameda/messagesTemplate.html');
  const html = await readableToString(template);
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: html
  };
};

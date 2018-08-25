import fs from 'fs';
import path from 'path';

export default async () => {
  const template = fs.readFile(path.join(__DIR__, 'src/jameda/messages.html'));
  console.log(template);
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: html
  };
};

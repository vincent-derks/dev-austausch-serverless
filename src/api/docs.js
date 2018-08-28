export default async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
  };
};

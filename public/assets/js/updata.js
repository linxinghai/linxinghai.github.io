const options = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    }
  };
  
  fetch('https://api.notion.com/v1/databases/06dc5ca8e18e4bc2bd4dd59aa570b522', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
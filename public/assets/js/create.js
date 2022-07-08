const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({parent: '06dc5ca8e18e4bc2bd4dd59aa570b522'})
  };
  
  fetch('https://api.notion.com/v1/databases', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
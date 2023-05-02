var fs = require('fs');
const axios = require('axios');

async function request ()  {
const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v3/detail',
  params: {
    id: '9851906',
    lang: 'en-US',
    store: 'US',
    sizeSchema: 'US',
    currency: 'USD'
  },
   headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'cb1f42c4a6mshdd5a14040644cd9p1bafe9jsn2a0cb650f715',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  }
}

try {
  const response = await axios.request(options);
  console.log(response.data);
  fs.writeFile('product.js', JSON.stringify(response.data), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
} catch (error) {
  console.error(error);
}

}
request()
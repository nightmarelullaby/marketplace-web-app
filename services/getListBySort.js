const axios = require("axios");

const getListBySort = async (sort) => {
console.log("query is ", sort)
const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '48',
    country: 'US',
    sort: sort,
    q: "",
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
   headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  }
}
try{
  const request = await axios.request(options)
  console.log(request)
  return request
}
catch(e){
  console.log(e)
  return e
}
}

export default getListBySort
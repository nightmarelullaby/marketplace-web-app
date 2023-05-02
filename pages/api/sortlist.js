// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getListBySort from "../../services/getListBySort"

export default async function sortlist(req, res) {
  const {query} = req.body
  console.log("in api"+ query)
  try{
    // const data = await getListBySort(query)
    // const products = await data.data
    // return res.status(200).json(products)
    return res.status(200).json()
    
  } catch(e){
    return res.status(400).json({error:e.response})
  }
  
}

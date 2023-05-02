// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getListByQuery from "../../services/getListByQuery"
import allProductsFallback from "../../api/asos.js"

export default async function listbyquery(req, res) {
  const {query} = req.body
  console.log("in api",query)
  try{
    // const data = await getListByQuery(query)
    // const products = await data.data
    // res.status(200).json(products)
    // return res.end()
    return res.status(200).json(allProductsFallback)
    
  } catch(e){
    return res.status(400).json({error:"e.response"})
  }
  
}

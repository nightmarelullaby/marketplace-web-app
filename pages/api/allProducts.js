// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getAllProducts from "../../services/getAllProducts"
import allProductsFallback from "../../apiInfo/asos.js"

export default async function allProducts(req, res) {
  try{
    // const data = await getAllProducts()
    // const products = await data.data
    // return res.status(200).json(products)
    return res.status(200).json(allProductsFallback)
    
  } catch(e){

    return res.status(400).json(allProductsFallback)
  }
  
}

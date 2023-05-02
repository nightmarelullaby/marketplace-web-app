// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getAllProducts from "../../services/getAllProducts"
import product from "../../apiInfo/product.js"

export default async function productDetails(req, res) {
  try{
    // const data = await getAllProducts()
    // const products = await data.data
    // return res.status(200).json(products)
    return res.status(200).json(product)
    
  } catch(e){

    return res.status(400).json(product)
  }
  
}

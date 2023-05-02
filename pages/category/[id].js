
import {RecoilRoot} from "recoil"


export default function Id({response}) {


  return (
    <div style={{padding:"0 32px"}}>
    </div>

  )
}
export async function getServerSideProps(){
  let data = await axios("https://marketplace-web-d9tfdf3up-nightmarelullaby.vercel.app/api/allProducts")
  const response = await JSON.parse(JSON.stringify(data.data))
  // console.log(data)
  return{
    props:{
      response
    }
  }
}
Id.Layout = function Layout(page) {
  return (
    <>
          <RecoilRoot>
          {page}  
        
        </RecoilRoot>
    </>
    )
  
}

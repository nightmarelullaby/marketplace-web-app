import Filters,{FilterCheckBox,FilterCategoryHeader,WrapperFilterCheckBox} from "../../components/Filters/Filters.js"
import Button from "../Buttons/Button"
import useSetQueryRouter from "../../hooks/useSetQueryRouter"
import {useRef} from "react"
export default function FilterLayout ({children}){
  const test = useRef()
  const {setQueryCategory} = useSetQueryRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    // const a = Object.fromEntries(new FormData(e.target))
    // const children = Array.from(e.target.elements)
    // children.forEach(e => e.setAttribute("checked",false))
    // console.log(test.current.checked = false)
    // const query = Object.keys(a)
    // setQueryCategory()
  }
  const handleChange = (value)=> {
    console.log(value)

  }
	return (
		<div style={{display:"flex",gap:24,marginTop:38,padding:"0 24px 0 0"}}>
			<Filters onSubmit={handleSubmit}style={{minWidth:400}}>
            <p style={{fontWeight:600}}>Filtros de búsqueda</p>
            <hr style={{margin:"16px 0",border:"none",height:1,backgroundColor:"lightgray"}}/> 
			         <div style={{display:"flex",flexDirection:"column",gap:8}}>
               <FilterCategoryHeader>Ordernar por</FilterCategoryHeader>

               <WrapperFilterCheckBox>
                  <FilterCheckBox name="freshness" title="Más nuevo" />
                  <FilterCheckBox name="freshness" title="Menos costoso" />
                  <FilterCheckBox name="freshness" title="Más caro" />
               </WrapperFilterCheckBox>
                 
                </div>
                <Button 
                    customStyles={{cursor:"pointer",border:"none",width:"100%",backgroundColor:"rgb(6, 10, 15)",borderRadius:6,padding:"16px 16px",marginTop:16}}>
                  <small style={{color:"white",fontWeight:600}}>Aplicar</small> 
                </Button>
			</Filters>
			{children}
		</div>)
}
import Filters from "../Filters/Filters"
import Button from "../Buttons/Button"

export default function FilterLayout ({children}){
	return (
		<div style={{display:"flex",gap:24,marginTop:38,padding:"0 24px"}}>
			<Filters>
			       <div style={{display:"flex",flexDirection:"column",gap:8}}>
          <p style={{color:"black",fontWeight:600}}>Ordenar por</p>
            <div style={{display:"flex",gap:8}}>
              <input type="checkbox"/>
              <label><p style={{color:"gray"}}>Más nuevos</p></label>
            </div>
            <div style={{display:"flex",gap:8}}>
              <input type="checkbox"/>
              <label><p style={{color:"gray"}}>Más caros</p></label>
            </div>
        </div>
        <Button customStyles={{cursor:"pointer",border:"none",width:"100%",backgroundColor:"rgb(6, 10, 15)",borderRadius:6,padding:"16px 16px",marginTop:16}}>
                            <small style={{color:"white",fontWeight:600}}>Aplicar</small> 
                    </Button>
			</Filters>
			{children}
		</div>)
}
import MoreButton from "../Buttons/MoreButton"

export default function PromoSection({customStyle,children}){

	return(<article style={customStyle?customStyle:{}}><div style={{display:"flex",alignItems:"center",maxHeight:350,borderRadius:8,overflow:"hidden",backgroundColor:"rgb(6, 10, 15)"}}>
			{children}

		</div>
		</article>)
}
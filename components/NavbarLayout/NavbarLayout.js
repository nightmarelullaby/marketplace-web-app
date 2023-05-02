
import {memo} from "react"
import { useRecoilState } from "recoil"




function NavbarLayout({children}){
	return(
			<div>
				
				{children}
			</div>
	)
}
export default memo(NavbarLayout)
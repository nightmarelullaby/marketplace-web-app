
import {memo} from "react"
import { useRecoilState } from "recoil"




function FooterLayout({children}){
	return(
			<div>				
				{children}
			</div>
	)
}
export default memo(FooterLayout)
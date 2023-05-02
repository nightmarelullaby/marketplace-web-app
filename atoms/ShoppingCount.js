import {atom} from "recoil"
import { useSetRecoilState } from "recoil"
const ShoppingCount = atom({
    key:"cart",
    default:[]
})
// const AddShoppingCount = () => {  
//     const state = useSetRecoilState(ShoppingCount)
//     return state(count+1)
// }

export default ShoppingCount

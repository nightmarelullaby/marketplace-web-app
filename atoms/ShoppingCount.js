import {atom,selector} from "recoil"
import { useSetRecoilState } from "recoil"

const ShoppingCount = atom({
    key:"cart",
    default:[]
})

export const item = atom({
    key:"item",
    default:{action:"null",element:null}
})

export const FilterShoppingCart = selector({
  key: 'FilterShoppingCart',
  get: ({get}) => {
    get(ShoppingCount);
    get(item);
    return ShoppingCount
  },
  set:({set},newValue) =>{ 
    // return set(ShoppingCount,ShoppingCount.filter((item) => e !== item.element));
    if(newValue.type === "add"){
        return set(ShoppingCount,(prev)=>{
            const checkIfElementAlreadyExist = prev.filter(e => e=== newValue.element)
            if(checkIfElementAlreadyExist.length <= 0) return [...prev,newValue.element]});    
            return;

            
    }
    if(newValue.type === "remove"){
        return set(ShoppingCount,(prev)=> prev.filter(e=> e !== newValue.element))
    }    
    // switch (item.action) {
    //   case 'remove':
        
    //   case 'add': 
    //     return set(ShoppingCount,[...ShoppingCount,item.element]);
    //   default:
    //     return ShoppingCount;
    // }
}


});

export default ShoppingCount

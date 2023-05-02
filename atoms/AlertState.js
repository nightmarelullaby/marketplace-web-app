import { atom } from "recoil";

export const AlertState = atom({
    key:"alert",
    default:{
        show:true,
        title:"Some wnt wrong",
        //Consider that rendered component is determinated by type. Types are: error success loading//
        type:"error",
        //Consider that rendered component is determinated by type. Types are: error success loading//
        description:"Please try again"}
})

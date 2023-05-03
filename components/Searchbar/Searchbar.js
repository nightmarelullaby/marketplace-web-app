import React from 'react';
import {useRouter} from "next/router"
import CloseButton from "../Buttons/CloseButton"
import styles from "./Searchbar.module.css"
import {useState,useRef,useEffect} from "react"

const Searchbar = ({placeholder,style,action,inputStyle,iconStyle}) => {
    const [formClass,setFormClass] = useState(styles.form)
    const formRef= useRef()
    const router = useRouter()
    const [input,setInput] = useState()

    function handleClickInside(event) {
        if(formRef.current.contains(event.target)){
            return;
        }   
        return setFormClass(styles.form)
    }
    //this function manages the state when the user clicks outside


useEffect(() => {
    document.addEventListener("click", handleClickInside,true);
    return () => document.removeEventListener("click", handleClickInside,true)
    //listener with the function above
  }, []);

    const handleChange = (e) => {
        e.preventDefault()
        const inputValue = e.target.value
        return setInput(inputValue)
    }
    const resetInput = (e)=>{
        e.preventDefault()
        return setInput("")

    }
    const searchDefault = (input) =>{
        input.preventDefault()

        const formObj = Object.fromEntries(new FormData(input.target))
        if(formObj.searchbar === "") return;
        const queries = router.query
        queries.q = formObj.searchbar

        return router.push({
            pathname:"/results/"+formObj.searchbar,
            query:{q:formObj.searchbar}})
      }
    const increaseWidthAtFocus = (e) => {
        console.log(formClass)

    }
    return (
        <div className={styles.cd}
         style={{position:"relative"}}>

        <form 
            ref={formRef}
            onFocus={increaseWidthAtFocus}
            onClick={()=>setFormClass(styles.formActive)}
            className={formClass}
            style={style?style:{display:"flex",borderRadius:32,}}
            onSubmit={action ? action : searchDefault}>
            <label style={{display:"flex"}}>
                <svg 
                    
                    htmlFor="searchbar" 
                    width="18" 
                    height="18"
                    style={iconStyle?iconStyle:{marginLeft:"16px",alignSelf:"center"}}
                     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </label>
            <input  
                className={styles.searchbar}
                name="searchbar"
                style={inputStyle?inputStyle:null}
                id="searchbar"
                value={input}
                onChange={handleChange}
                placeholder={placeholder} 
                type="text"/>
                
        </form>
        <CloseButton 
            width={24}
            height={24}
            action={(e)=>resetInput(e)}
            stroke="var(--black)" 
            customStyle={{marginRight:16,alignSelf:"center",position:"absolute",right:16,top:"50%",translate:"50% -50%"}}/>
        </div>
    );
}

export default Searchbar;

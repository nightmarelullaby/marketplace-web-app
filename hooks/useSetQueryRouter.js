import {useRouter} from "next/router"

const useSetQueryRouter = () =>{
    const router = useRouter()

    const setQuerySearch = (query="all") => {
        const queries = router.query
        queries.q = query    
        return router.push({...router,query:queries},null,{scroll:false})
    }   
    const setQueryCategory = (query="all") => {
        const queries = router.query
        queries.sort = query    
        return router.push({...router,query:queries},null,{scroll:false})
    }
    const setNewUrl = (url="") => {
        console.log("xx")
        return router.push(url)
    }
    
    return {
        router,
        setNewUrl,
        setQuerySearch,
        setQueryCategory}
  }
export default useSetQueryRouter
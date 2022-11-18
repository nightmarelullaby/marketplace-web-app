import DisplaySection from "../DisplaySection/DisplayOptions";

export default function Layout({children}){
    return(
        <>
            <DisplaySection/>
            {children}
        </>
    )
}
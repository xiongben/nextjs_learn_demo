
import "./../components/xbComponent"
import XbComponent from "../components/xbComponent";
import Link from 'next/link'
import {Router, useRouter} from "next/router";



function Xb(){
    var router = useRouter()

    function gotoHome(){
        router.push("/")
    }

    return(
        <div>
            <h1>Xiong Ben test page</h1>
            <XbComponent></XbComponent>
            <Link href="/"><a>to home page ===></a></Link>
            <button onClick={()=>{gotoHome()}}>to home</button>
        </div>
    )
}


export default Xb

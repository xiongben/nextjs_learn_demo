import dynamic from "next/dynamic";

import Link from 'next/link'
import {Router, useRouter} from "next/router";


// import XbComponent from "../components/xbComponent";

//lazy loading component
const OnePart = dynamic(import('../components/xbComponent'))

function Xb() {
    var router = useRouter()

    function gotoHome() {
        router.push("/")
    }

    function gotoApage() {
        // router.push("/page/apage?name=xiaohong")
        router.push({
                pathname: "/page/apage",
                query: {name: 'xiaojiang'}
            }
        )
    }

    return (
        <div>
            <h1>Xiong Ben test page</h1>
            <OnePart></OnePart>
            <Link href="/"><a>to home page ===></a></Link><br/>
            <p>======</p>
            <Link href="/page/apage?name=xiaoming"><a>to a page ===></a></Link><br/>
            <p>======</p>
            <Link href={{pathname:'/page/apage',query:{name:'kakaxi'}}}><a>to a page ===></a></Link><br/>
            <p>======</p>
            <Link href={{pathname:'/page/time',query:{name:'kakaxi'}}}><a>to time page ===></a></Link><br/>
            <p>======</p>
            <button onClick={() => {
                gotoHome()
            }}>to home
            </button>
            <button onClick={() => {
                gotoApage()
            }}>to a page
            </button>
        </div>
    )
}


export default Xb

import Link from "next/link";
import {withRouter} from "next/router";
import axios from 'axios'
import styles from '../../styles/xb.module.css'
import Head from 'next/head'

function APage({router,data}){

    return(
        <>
            <Head>
                <title>xiongben</title>
            </Head>
            <h2 className="text1">this is a page</h2>
            <p >{data.userName}</p>
            <p className={styles.text2}>{router.query.name}</p>
            <Link href="/"><a>to home page ===></a></Link><br/>

            <style jsx>
                {`
                   .text1{color:red}
                `}
            </style>
        </>
    )
}

APage.getInitialProps = async ()=>{
    // const promise = new Promise((resolve)=>{
    //     axios("http://10.30.0.30:2080/reward/badge/get-progress-and-details?uid=465300&userId=465300&badgeId=1").then((res)=>{
    //         console.log(res.data);
    //         resolve(res.data)
    //     })
    // })
    // return await promise

    var res = await axios("http://10.30.0.30:2080/reward/badge/get-progress-and-details?uid=465300&userId=465300&badgeId=1");

    return {data : res.data}
}

export default withRouter(APage)

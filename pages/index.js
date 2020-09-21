import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'

export default function Home() {


  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
         xiong ben test
        </h1>
        <Link href="/xb"><a>to xb page ==></a></Link>
    </div>
  )
}

import Head from 'next/head'
import styles from './Layout.module.css'
import {useEffect,useState} from "react"
import Link from "next/link"

export default function Layout({children,title="Student Dashboard"}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}><small>&copy; Copyright 2021, Student Dashboard</small></footer>
    </div>
  )
}

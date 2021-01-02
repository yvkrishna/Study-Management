import Head from 'next/head'
import styles from './Layout.module.css'
import {useEffect,useState} from "react"
import { signIn, signOut, useSession } from "next-auth/client"
import Link from "next/link"
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'

export default function Layout({children,title="Student Dashboard"}) {

  // Authentication 
  const [session,loading] = useSession();

  // Router
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session && (
        <>
          Not Signed In <br />
          <button onClick={signIn}>SignIn</button>
        </>
      )}
      {session && (
        <>
          Signed In as {session.user.email} <br />
          <div>You can now access secret pages.</div>
          <button><Link href="/dashboard/dashboard">To the secret.</Link></button><br />
          <button onClick={signOut}>Signout</button>
        </>
      )}
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}><small>&copy; Copyright 2021, Student Dashboard</small></footer>
    </div>
  )
}

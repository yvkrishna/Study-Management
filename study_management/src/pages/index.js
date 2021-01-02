import styles from '../styles/Home.module.css'
import Layout from "./Layout/layout"
import { signIn, signOut, useSession } from "next-auth/client"
import Link from "next/link"
import { useRouter } from 'next/router'

export default function Home() {

  // Authentication 
  const [session,loading] = useSession();

  const router = useRouter()
  
  const retSignLink = (username) => {
    router.push("/dashboard/" + username);
  } 

  return (
    <div className="Application">
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
          <button onClick={() => retSignLink(session.user.email)}>To the secret.</button><br />
          <button onClick={signOut}>Signout</button>
        </>
      )}
      <Layout>
    </Layout>
    </div>
  )
}

import React, {useState,useEffect} from "react"
import {options, setOptions, useSession} from "next-auth/client"
import TestPage from "./examForm"
import Dexie from "dexie"

export default function TestApp({username,email,rollNumber,tests}){

    const [session,loading] = useSession();
    const [content,setContent] = useState();
    
    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch("/api/is_authenticated/getSession");
            const json = await res.json();
            if(json.usr.isAuth){
                setContent(json.usr.usrmail);
            }
        }
        fetchData();
    },[session]);

    if( typeof window !== "undefined" && loading )return null;

    if(!session){
        return(
            <main>
                <div>
                    <h1>Please Login to Appear For Examination.</h1>
                </div>
            </main>
        )
    }
    return(
    <div className="Exam_Test_app">
        <TestPage username={username} email={email} rollNumber={rollNumber} tests={tests} />
    </div>
    )
}

export const getStaticProps = async (context) => {

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },body: JSON.stringify({username:context.params.userpage}) 
      }

    const res = await fetch("http://localhost:3000/api/get_test/get_profile_and_test",options);
    const student_and_test = await res.json();
    const std = Object.values(student_and_test)[0];
    const  {username,email,rollNumber} = std;
    const tests = Object.values(student_and_test)[1];

    return{
        props:{
            username:username,
            email:email,
            rollNumber:rollNumber,
            tests:tests
        }
    }
}

export const getStaticPaths = async () =>{
    
    // Need to add only for registered courses
    const paths = []

    return{
        paths,
        fallback:true
    }
}
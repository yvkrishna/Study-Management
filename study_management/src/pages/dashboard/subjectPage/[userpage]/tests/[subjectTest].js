import React, {useState,useEffect} from "react"
import {useSession} from "next-auth/client"

export default function Dashboard(){

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
        hello
    </div>
    )
}
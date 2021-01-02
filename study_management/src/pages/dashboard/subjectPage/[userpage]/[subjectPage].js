import React, {useState,useEffect} from "react"
import {useSession} from "next-auth/client"
import SideBar from "../../dashboard_components/SideBar"
import NavBar from "../../dashboard_components/NavBar"
import SubPage from "./subDisc"

export default function Subject({username,email,rollNumber}){

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
                    <h1>You need to login first.</h1>
                </div>
            </main>
        )
    }
    return(
    <div className="Subject_Page_app">
        <div className="row">
            <div class="col-md-2 col-sm-3 col-12">
                <SideBar username={username} email={email} rollNumber={rollNumber} />
            </div>
            <div class="col-md-10 col-sm-9 col-12">
                <NavBar />
            </div>
        </div>
        <div className="row">
            <div class="col-md-2 col-sm-3 col-12"></div>
            <div class="col-md-10 col-sm-9 col-12">
                <SubPage username={username} email={email} rollNumber={rollNumber}/>
            </div>
        </div>
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

    const res = await fetch("http://localhost:3000/api/profile/getprofile_username",options);
    const student = await res.json();
    const std = Object.values(student)[1];
    const  {username,email,rollNumber} = std;

    return{
        props:{
            username:username,
            email:email,
            rollNumber:rollNumber
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
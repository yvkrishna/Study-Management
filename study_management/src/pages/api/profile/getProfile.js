import {getSession} from "next-auth/client";

export default async (req,res) => {
    const session = await getSession({req});
    if(session){
        const username = session.user.email;
        res.send({
            usr:{
                isAuth:true,
                usrmail:username
            }
        })
    }else{
        res.send({
            usr:{
                isAuth:false
            }
        })
    }
}
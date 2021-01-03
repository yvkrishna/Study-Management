import { connectToDatabase } from "../../../../utils/mongodb_setup";

export default async (req,res) => {

    const getDetails = async (email) => {
        const { db } = await connectToDatabase();

        const member = await db
            .collection("members")
            .findOne({email:email})

          if(member){
              return member;
          }else{
              return null;
          }
      }
      var user = await getDetails(req.body.email);

    if(user){
        res.send({
                isAuth:true,
                usrData:user
        })
    }else{
        res.send({
                isAuth:false,
                usrData:null
        })
    }
}
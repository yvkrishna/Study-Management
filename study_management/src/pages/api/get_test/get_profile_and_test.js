import { connectToDatabase } from "../../../../utils/mongodb_setup";

export default async (req,res) => {

    const getDetails = async (username) => {
        const { db } = await connectToDatabase();

        const member = await db
            .collection("members")
            .findOne({username:username})

          if(member){
              return member;
          }else{
              return null;
          }
      }

    const getTest = async () => {
        const { db } = await connectToDatabase();

        const testData = await db
            .collection("test")
            .find({})
            .toArray();

          if(testData){
              return testData;
          }else{
              return null;
          }
      }


      var user = await getDetails(req.body.username);
      var test = await getTest();

    if(test && user){
        res.send({
            user:user,
            testData:test
        })
    }else{
        res.send({
            user:null,
            testData:null
        })
    }
}
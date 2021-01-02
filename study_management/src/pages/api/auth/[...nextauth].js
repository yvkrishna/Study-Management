import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { connectToDatabase } from "../../../../utils/mongodb_setup";
import bcrypt from 'bcrypt'

const rounds = 10

const options = {
    providers:[
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "Enter Username" },
              password: {  label: "Password", type: "password", placeholder: "Enter Password" }
            },
            authorize: async (credentials) => {

              const user_details = { username: credentials.username, password: credentials.password }
              
              const verifyLogin = async (unp_details) => {
                const { db } = await connectToDatabase();
                var {username, password} = unp_details;
                const member = await db
                    .collection("members")
                    .findOne({username:username})
                var isAuth = await bcrypt.compare(password, member.password);

                  if(isAuth){
                      return member;
                  }else{
                      return null;
                  }
              }

              var user = await verifyLogin(user_details);
              
              if (user){
                // Any object returned will be saved in `user` property of the JWT
                return Promise.resolve(user)
              }else{
                // If you return null or false then the credentials will be rejected
                return Promise.resolve(null); 
              }
            }
          })
    ],
    session: {
      jwt: true,
      maxAge: 30 * 24 * 60 * 60 // 30 days 
    },
    site: process.env.NEXTAUTH_URL,
    pages: {
        signIn: '/authenticate/LogIn',
        signOut: '/authenticate/LogIn',
    },
}

export default (req,res) => NextAuth(req,res,options);
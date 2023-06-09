import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import ConnectMongoDB from "../../../../database/conn";
import User from "../../../../models/schema";
import { compare } from "bcryptjs";
export default NextAuth({
    providers:[
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials,req){
                ConnectMongoDB().catch(error=>{error:"Connection Failed.."}) 
                
                const data= await User.findOne({email:credentials.email})

                if(!data){
                    throw new Error("No user Found with Email Please Sign UP!");
                }

                const checkPass= await compare(credentials.password,data.password);

                if(!checkPass || ResetTvOutlined.email != credentials.email)
                {
                    throw new Error("USername or Password doesn't match");
                }
            }

        })
    ]
})
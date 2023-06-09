import ConnectMongoDB from "../../../database/conn";
import User from "../../../models/schema";
import { hash } from "bcryptjs";
export default async function handler(req,res){
    
    ConnectMongoDB().catch(error=>res.json({error:"Connection Failed....!"}))

    if(req.method==="POST")
    {
        if(!req.body)
            return res.status(404).json({error:"Dont have form data"});
         
        const {username,email,password}=req.body;
        const checkexisting = await User.findOne({email});

        if(checkexisting)
            return res.status(422).json({message:"User already exist"});
        
        User.create({username,email,password:await hash(password,12)})
        .then((data)=>{
            return res.status(201).json({status:"true",user:data});
        })
        .catch((err)=>{
            return res.status(404).json({err});
        });
    }
    else
        return res.status(500).json({message:"HTTP Method is not POST"});
}
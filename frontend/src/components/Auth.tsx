import { ChangeEvent, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
// import { signupInput } from "@pransh03/common1-app";
import axios from "axios";
import {BACKEND_URL} from "../config"

export const Auth = ({type}:{type:"signup"|"signin"})=>{
    const navigate = useNavigate();
    const [postInputs,setpostInputs]=useState({
        name:"",
        email:"",
        password:""
    });

    async function sendRequest() {
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs)
            const jwt = response.data;
            localStorage.setItem("token",jwt);
            navigate('/blogs')
        }catch(e){
            alert("Error while signing up")
        }
    }

    return <div>
        <div className="ml-3 mt-1 text-lg font-semibold"> 
        ThoughtEcho</div>
        <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="text-center px-10">
                    
                    <div className="text-3xl font-bold text-left">
                        Create an account
                    </div>
                    <div className="text-slate-400 pt-2">
                        {type==="signin"?"Don't have an account?":"Already have an account?"}<Link className="underline ml-1 text-purple-900" to={type==="signin"?"/signup":"/signin"}>{type==="signin"?"Sign up":"Sign in"}</Link>
                    </div>
                </div>
                <div className="pt-5">
                    {type==="signup"?
                    <LabelledInput label="Name" placeholder="Enter your name" onChange={(e)=>{
                        setpostInputs(({
                            ...postInputs,name:e.target.value
                        }))
                    }}/>:null}
                    <LabelledInput label="Email" placeholder="you@example.com" onChange={(e)=>{
                        setpostInputs(({
                            ...postInputs,email:e.target.value
                        }))
                    }}/>
                    <LabelledInput type="password" label="Password" placeholder="123456" onChange={(e)=>{
                        setpostInputs(({
                            ...postInputs,password:e.target.value
                        }))
                    }}/>
                    <button onClick={sendRequest} className="w-full text-center bg-gray-500 mt-5 p-3 text-white border rounded-lg hover:bg-gray-300 font-semibold hover:text-gray-500 ">{type==="signup"?"Sign Up":"Sign In"}</button>
                </div>
            </div>

        </div>
    </div>
</div>
}

interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
}

function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
    return <div>
        <div>
        <label className="block mb-2 text-sm text-black font-bold pt-4">{label}</label>
        <input onChange={onChange}  id="first_name" type={type || 'text'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
    </div>
}


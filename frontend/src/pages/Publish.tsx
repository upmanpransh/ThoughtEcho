import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
export const Publish=()=>{
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar/>
        <div className="pt-8 flex justify-center w-full">
            <div className="max-w-screen-lg w-full ">
                <input onChange={(e)=>{
                    setTitle(e.target.value)
                }} type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Title"/>
                <TextEditor onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                />
                <button onClick={async()=>{
                    try{
                    const response =await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content:description,
                    },{
                        headers:{
                            Authorization:`Bearer ${localStorage.getItem("token")}`,
                        },
                    });
                    navigate(`/blog/${response.data.id}`)
                }catch(error){
                    console.error("Error publishing post:",error);
                    alert("error publishing post. Please try again.");
                }
                }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return <div>
           <div className=" py-2 bg-white rounded-b-lg">
               <textarea onChange={onChange} id="editor" rows="8" className="block w-full px-2 py-1 text-sm text-gray-800 bg-white border bg-slate-50 border-slate-300 rounded-lg focus:ring-0 " placeholder="Write an article..." required ></textarea>
           </div>
       
    </div>
    
}
import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog{
    "content":string;
    "title":string;
    "id":number
    "author":{
        "name":string;
    }
}

export const useBlog=({id}:{id:string})=>{
    const[loading,setLoading]=useState(true);
    const[blog,setBlog]=useState<Blog[]>([]);

    useEffect(()=>{
        const fetchBlogs=async()=>{
            try{
                const response=await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setBlog(response.data);
            }catch(error){
                console.error("Error fetching blogs:",error);
            }finally{
                setLoading(false);
            }
        };
        fetchBlogs();
    },[id]);
    return{loading,blog};
};

export const useBlogs = () =>{
    const[loading,setLoading]=useState(true);
    const[blogs,setBlogs]=useState<Blog[]>([]);

    useEffect(()=>{
        const fetchBlogs=async()=>{
            try{
                const response=await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setBlogs(response.data);
            }catch(error){
                console.error("Error fetching blogs:",error);
            }finally{
                setLoading(false);
            }
        };
        fetchBlogs();
    },[]);
    return{loading,blogs};
};
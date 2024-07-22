interface BlogCardProps{
    id:number,
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
}
import { Link } from "react-router-dom";


export const BlogCard=({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps)=>{
    return <Link to={`/blog/${id}`}> <div className="p-4 border-b border-slate-200 cursor-pointer w-screen max-w-screen-md">
            <div className="flex">
                <Avatar name={authorName} size={"small"}/> 
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle/>
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div> 
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+"..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)} minutes`}
        </div>
    </div></Link>
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({name,size}:{name:string,size:string}){
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small"?"w-6 h-6":"w-10 h-10"}`}>
        <span className={`font-medium ${size==="small"?"xs":"xl"} text-gray-600 dark:text-gray-300 uppercase`}>{name[0]}</span>
    </div>
    
}
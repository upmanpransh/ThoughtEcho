import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
import { ProfileHover } from "./profilehover"
import { useNavigate } from "react-router-dom"
export const Appbar =()=>{
    const navigate=useNavigate();
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={"/blogs"} className="flex justify-center flex-col">
            ThoughEcho
        </Link>
        <div>
            <Link to="/publish">
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-5 text-center me-2 mb-2">+</button></Link>
            <Avatar name="prashun" size={"big"}/>
            <button onClick={()=>{
                localStorage.removeItem("token");
                navigate('/signin')
            }} type="button" className=" ml-5 text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 mr-5 text-center me-2 mb-2">Logout</button>
        </div>
        
    </div>
}
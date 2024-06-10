import { Link } from "react-router-dom";

const ErrorPage = ()=>{
    return (<div className="h-screen w-screen bg-error-poster bg-cover">
        <div className="h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center flex-col"><div className="text-white text-center"><h1 className="text-5xl font-bold">Lost your Way?</h1>
            <div className="p-2 font-mono mt-2">Sorry we can't find that page.</div>
            <button className="rounded-md bg-white text-black p-2 font-bold shadow-md mt-4"><Link to={"/browse"}>Netflix Home</Link></button>
            <div className="border-l-2 border-red-600 p-2 w-1/2 mt-6 mx-auto font-thin text-xl"> Error 404</div>
            </div></div>
            
</div>)
}

export default ErrorPage;
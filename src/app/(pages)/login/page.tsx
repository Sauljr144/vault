import Link from "next/link";
import "./login.css"

export default function Login(){




    return (
    <>
        <div className="flex justify-center">
            <div className="flex  flex-col  mt-40">
                
                <h1 className="font-semibold text-3xl mb-10 text-center">Login</h1>
            

                <form action="" className="flex flex-col w-80">
                    <input className="py-2 mt-2 mb-5 bg-transparent border-b focus:outline-none myColor" type="text" placeholder="Username"/>

                    <input className="mb-12 py-2 mt-2 bg-transparent border-b focus:outline-none myColor" type="text" placeholder="Password"/>
                </form>

                <div className="flex justify-center">
                    <button className="rounded-full border font-bold flex justify-center px-9 py-2 myColor">Sign In</button>
                </div>
               
            
                <div className="flex flex-col mt-12">
                    <Link className="w-32" href={"/"}>Create Account?</Link>
                    <Link className="w-36" href={"/"}>Forgot Password?</Link>
                </div>
            </div>
   
        </div>
    </>
    )
}
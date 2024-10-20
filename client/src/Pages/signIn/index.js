import { useContext, useEffect } from "react";
import { Mycontext } from "../../App";

const SignIn = () => {
   
    const context = useContext(Mycontext);
    useEffect(()=>{
        context.setisHeaderFooterShow(false);
    },[]);
  return (
     <section className="section signInPage">
        <div className="container">
            <h1> SignIn</h1>
        </div>
     </section>
  )
};

export default SignIn;

import { useContext, useEffect } from "react";
import { Mycontext } from "../../App";
import Logo from '../../assets/images/logo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import GoogleImg from "../../assets/images/google_image.png"

const SignIn = () => {

    const context = useContext(Mycontext);
    useEffect(() => {
        context.setisHeaderFooterShow(false)
    }, []);
    return (
        <section className="section signInPage">
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center">
                        <img className="logo" src={Logo} />
                    </div>



                    <form className="mt-3">
                        <h2 className="mb-4">Sign In</h2>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Email" type="email" required variant="standard" className="w-100" />
                        </div>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Password" type="password" required variant="standard" className="w-100" />
                        </div>

                        <a className="border-effect cursor txt">Forgot Password?</a>

                        <div className="d-flex align-items-center mt-3 mb-3 ">
                            <Button className="btn-blue col btn-lg btn-big " variant="outlined">Sign In</Button>
                            <Link to="/"> <Button className=" btn-lg btn-big col ml-3" variant="outlined" onClick={()=>context.setisHeaderFooterShow(true)}>Cancel</Button> </Link>
                        </div>

                        <p className="mt-3 txt">Not Registered? <Link to="/signUp" className="border-effect">Sign Up</Link></p>

                        <h6 className="mt-4 text-center font-weight-bold">Or continue with social account</h6>

                        <Button className="loginWithGoogle mt-2" variant="outlined"><img src={GoogleImg} />Sign In with Google</Button>


                    </form>
                </div>
            </div>
        </section>
    )
};

export default SignIn;

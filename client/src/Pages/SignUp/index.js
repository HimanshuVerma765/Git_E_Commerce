import { useContext, useEffect } from "react";
import { Mycontext } from "../../App";
import Logo from '../../assets/images/logo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import GoogleImg from "../../assets/images/google_image.png"

const SignUp = () => {

    const context = useContext(Mycontext);
    useEffect(() => {
        context.setisHeaderFooterShow(false)
    }, []);
    return (
        <section className="section signInPage signUpPage">
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center">
                        <img className="logo" src={Logo} />
                    </div>



                    <form className="mt-2">
                        <h2 className="mb-3">Sign Up</h2>

                        <div className="row">
                            <div className="col md-6">
                                <div className="form-group">
                                    <TextField label="Name" type="text" required variant="standard" className="w-100" />
                                </div>
                            </div>

                            <div className="col md-6">
                                <div className="form-group">
                                    <TextField label="Phone No." type="text" required variant="standard" className="w-100" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <TextField id="standard-basic" label="Email" type="email" required variant="standard" className="w-100" />
                        </div>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Password" type="password" required variant="standard" className="w-100" />
                        </div>

                        <a className="border-effect cursor txt">Forgot Password?</a>

                        <div className="d-flex align-items-center mt-3 mb-3 ">
                            <div className="row w-100 ">
                                <div className="col md-6">
                                    <Button className="btn-blue w-100 col btn-lg btn-big " variant="outlined">Sign In</Button>
                                </div>
                                <div className="col md-6">
                                    <Link to="/" className="d-block w-100"> <Button className=" btn-lg btn-big w-100 col " variant="outlined" onClick={() => context.setisHeaderFooterShow(true)}>Cancel</Button> </Link>
                                </div>
                            </div>


                        </div>

                        <p className="mt-3 txt">Not Registered? <Link to="/signIn" className="border-effect">Sign In</Link></p>

                        <h6 className="mt-4 text-center font-weight-bold">Or continue with social account</h6>

                        <Button className="loginWithGoogle mt-2" variant="outlined"><img src={GoogleImg} />Sign In with Google</Button>


                    </form>
                </div>
            </div>
        </section>
    )
};

export default SignUp;

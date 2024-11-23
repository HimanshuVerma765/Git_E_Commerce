import { useContext, useEffect } from "react";
import { Mycontext } from "../../App";
import Logo from '../../assets/images/logo.png'
import TextField from '@mui/material/TextField';
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
                        <img className="logo" src={Logo}/>
                    </div>

                    <h2>Sign In</h2>

                    <form>
                        <div className="form-group">
                        <TextField id="standard-basic" label="Email" variant="standard" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default SignIn;

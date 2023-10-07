import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";
import { Result } from "postcss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')






    const handleRegister = e => {

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value

        setSuccess('')
        setRegisterError('')


        createUser(email, password)
            .then(result => {
                console.log(result);
                
            })
            .catch(error => {
                console.log(error);
            })

        if (password.length < 6) {
            setRegisterError('password Should be At Least 6 Characters')
            return;
        }
        else if (!/[A-Z]/.test(password)){
            setRegisterError("Password Should Have At Least One Uppercase")
            return
        }
        else if (!/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(password)){
            setRegisterError('You Should Have At Least One Special Character')
            return
        }
        else {
            setSuccess('Registration Successful')
        }
        
        
    }


    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="  rounded-lg pb-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleRegister}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-600 text-center">{registerError}</p>
                }
                {
                    success && <p className="text-green-600 text-center">{success}</p>
                }
                <p className="text-center">Already Have an account? Please <Link to="/login" className="text-blue-600">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;
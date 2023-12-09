import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth Context/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import Swal from "sweetalert2";


const Login = () => {
    const { signin, googleLogin, githubLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handelLogin = e => {
        e.preventDefault()
        console.log(e)
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signin(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate(location?.state ? location?.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                // ...

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorMessage){
                    Swal.fire({
                        title: 'Something went wrong! please chack your email and password',
                        text: `${errorCode}`,
                        
                    })
                }
                console.log(errorCode)
                console.log(errorMessage)
            });
    }
    const google = () => {
        googleLogin()
            .then(result => {
                console.log(result)
                navigate(location?.state ? location?.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const github = () => {
        githubLogin()
            .then(result => {
                console.log(result)
                navigate(location?.state ? location?.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>

            <div className=" flex justify-center items-center p-20">
                <div className="w-[800px] bg-gray-300 flex justify-center items-center gap-20 p-10">

                    <div className="card w-[400px] flex-shrink-0  max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <button className="btn w-36 btn-primary"> Login </button>
                                <Link to={`/regster`}><button className="btn w-36 btn-primary">Regster</button></Link>
                                {/* <input className="btn w-36 btn-primary" type="submit" value="Regster" /> */}

                            </div>
                            <h1 className="font-medium text-xl mt-5">Login With</h1>
                            <div className=" flex justify-center items-center gap-5">
                                <button onClick={google} className="btn btn-outline"><FcGoogle className="text-5xl"></FcGoogle></button>
                                <button onClick={github} className="btn btn-outline"><BsGithub className="text-5xl"></BsGithub></button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;
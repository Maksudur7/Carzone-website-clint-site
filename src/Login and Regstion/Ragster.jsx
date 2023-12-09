// import { Link } from "react-router-dom";

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth Context/AuthProvider";
import Swal from "sweetalert2";


const Ragster = () => {
    const { regster, profileAdnName } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handelRagster = e => {
        e.preventDefault()
        console.log(e)
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, password, photo)
        if (password.length < 6) {
            Swal.fire('password must me 6 charackter')
        } else if (!/[A-Z]/.test(password)) {
            Swal.fire('password must be capitaliz')
        } else if (!/[~!@#$%^&*_|?/`]/.test(password)) {
            Swal.fire('password must be spasal charackter')
        }
        regster(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location?.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Regster successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error)
                if (error.message) {
                    Swal.fire('This email alrady used please Login!')
                }
            })
        console.log(name, photo)
        profileAdnName(name, photo)
            .then(result => {
                console.log(result)
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
                        <form onSubmit={handelRagster} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="image" name="photo" className="input input-bordered" />
                            </div>
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
                                <button className="btn w-36 btn-primary">Regster</button>
                                <Link to={`/login`}><button className="btn w-36 btn-primary">Login</button></Link>
                                {/* <input className="btn w-36 btn-primary" type="submit" value="Regster" /> */}

                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Ragster;
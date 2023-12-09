import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Auth Context/AuthProvider";


const Navbar = () => {
    const { users, logOut, name, photo } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut()
    }

    const navbar = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myCard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                My Card
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Add Product
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Log in
            </NavLink>
        </li>
    </>


    return (
        <div>
            <div className="navbar  flex justify-between  ">
                <div className="navbar-start md:w-1/4  w-full ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-10">
                            <ul className="menu menu-horizontal px-1 gap-10  justify-center items-center">


                                {
                                    users ? <li>{name}</li> : ''
                                }
                                {
                                    users ? <img className="h-14 w-14 rounded-full " src={photo} alt="" /> : ''
                                }

                                {users ? <button onClick={handelLogOut} className="btn btn-neutral text-white"><li>Log Out</li></button> : <button className="btn btn-neutral"><NavLink to={`/login`}><li>Login</li></NavLink></button>}


                            </ul>
                            {navbar}
                        </ul>

                    </div>
                    <a className=" flex md:justify-center items-center normal-case text-xl "><img className="h-16 rounded-lg border px-3 py-1 ml-40 md:ml-0  w-52 " src="https://i.ibb.co/w4svx9c/brand-logo.jpg" alt="" /></a>
                </div>
                <div className="navbar-center text-start ">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-10">
                            {navbar}
                        </ul>

                    </div>

                </div>
                <div className="flex justify-end px-7 w-1/2 m-0 p-0 ">
                    <ul className="menu menu-horizontal px-1 gap-10  justify-center items-center hidden md:inline-block">

                        <div className="flex justify-center items-center gap-10">
                            {
                                users ? <li>{name}</li> : ''
                            }
                            {
                                users ? <img className="h-14 w-14 rounded-full " src={photo} alt="" /> : ''
                            }

                            {users ? <button onClick={handelLogOut} className="btn btn-neutral text-white"><li>Log Out</li></button> : <button className="btn btn-neutral"><NavLink to={`/login`}><li>Login</li></NavLink></button>}

                        </div>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;
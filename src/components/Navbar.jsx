import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';




const Navbar = () => {

    const { user, logOut } = UserAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/')
        }
        catch (error) {
            console.log(error)
        }
    }




    return (
        <>
            <div className='text-white'>

                <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
                    < NavLink to="/">
                        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
                    </NavLink >

                    {user?.email ? (
                        <div>


                            <NavLink to="/account">
                                <button className='text-white pr-4'>Account</button>
                            </NavLink>
                            <Link to="/login">
                                <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>LogOut</button>
                            </Link>
                        </div>
                    ) : (
                        <div>


                            <NavLink to="/login">
                                <button className='text-white pr-4'>Sign In</button>
                            </NavLink>
                            <Link to="/signup">
                                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
Navbar.propTypes = {};
export default Navbar;
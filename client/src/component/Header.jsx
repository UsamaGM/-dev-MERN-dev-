import { useState } from 'react';
import searchLogo from '../assets/images/SearchLogo.png';
import profileIcon from '../assets/images/LoginLogo.png';
import logout from '../assets/images/blackLogout.png'
import profile from '../assets/images/blackProfile.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            setShowDropdown(false);
            navigate('/')
        }
    };

    return (
        <>
            <div className="bg-white w-full p-2 flex justify-between pb-3 pt-3">
                <div>
                    <p className="text-2xl font-medium ml-2">Hello newUser</p>
                </div>
                <div className="relative">
                    <input
                        className="md:block hidden border-1 border-slate-800 rounded-3xl px-2 py-2 w-90 pr-10"
                        type="text"
                        placeholder="Search Your Courses"
                    />
                    <img
                        className="absolute top-1/2 right-3 transform -translate-y-1/2"
                        src={searchLogo}
                        alt="Search Icon"
                    />
                </div>

                <div className="relative">
                    <div
                        className="bg-sky-700 px-6 py-2 text-white text-xl rounded-3xl w-38 flex justify-center items-center cursor-pointer hover:bg-sky-600 mr-2"
                        onClick={toggleDropdown}
                    >
                        <img className="px-2" src={profileIcon} alt="Profile Icon" />
                        <p>username</p>
                    </div>

                    {showDropdown && (
                        <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg w-40 mt-2 py-2">
                            <div className='flex justify-start items-center p-2 hover:bg-slate-200 hover:rounded-xl cursor-pointer mb-3 mt-3'>
                                <img className='w-5 h-5 mx-2' src={profile}></img>
                                <a className="">MyProfile</a>
                            </div>
                            <div className='flex justify-start items-center p-2 hover:bg-slate-200 hover:rounded-xl cursor-pointer'>
                                <img className='w-5 h-5 mx-2' src={logout}></img>
                                <p className="" onClick={handleLogout}>Logout</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <hr />
        </>
    );
}

export default Header;

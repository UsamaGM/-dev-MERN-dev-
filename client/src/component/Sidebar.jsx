import logout from '../assets/images/logout.png'
import profile from '../assets/images/person.png'
import home from '../assets/images/home.png'
import presentation from '../assets/images/myPresentation.png'
import grades from '../assets/images/gradesstatus.png'
import mycourses from '../assets/images/mycourses.png'
import quizzes from '../assets/images/muquizzes.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SideBar() {
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
            <div className="bg-sky-700 flex flex-col min-h-full w-55 py-4 pr-4 pl-3 text-white line text-lg/6 ">
                <div className='text-4xl mb-10 mt-5 font-medium'>VirtualClass</div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer mb-3'>
                    <img className='w-5 h-5 mx-2' src={home}></img>
                    <Link to='/studentDashBoard' className="">Home</Link>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer mb-3'>
                    <img className='w-5 h-5 mx-2' src={mycourses}></img>
                    <Link to='/myCourses' className="">Enrolled Courses</Link>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer mb-3'>
                    <img className='w-5 h-5 mx-2' src={quizzes}></img>
                    <Link to='/quizzes' className="">Quizzes</Link>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer mb-3'>
                    <img className='w-5 h-5 mx-2' src={grades}></img>
                    <Link to='/grades' className="">Grades</Link>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer mb-3'>
                    <img className='w-5 h-5 mx-2' src={presentation}></img>
                    <Link to='/presentation' className="">Presentation</Link>
                </div>
                <br></br><br></br><hr></hr>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer mb-3 mt-3'>
                    <img className='w-5 h-5 mx-2' src={profile}></img>
                    <Link to='/profile' className="">MyProfile</Link>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer'>
                    <img className='w-5 h-5 mx-2' src={logout}></img>
                    <a className="" onClick={handleLogout}>Logout</a>
                </div>
            </div>
        </>
    )
}
export default SideBar

<<<<<<< HEAD
import logout from '../assets/images/logout.png'
import profile from '../assets/images/person.png'
import home from '../assets/images/home.png'
import presentation from '../assets/images/myPresentation.png'
import grades from '../assets/images/gradesstatus.png'
import mycourses from '../assets/images/mycourses.png'
import quizzes from '../assets/images/muquizzes.png'

function SideBar() {
    return (
        <>
            <div className="bg-sky-700 flex flex-col w-60 p-6 text-white line text-lg/6">
            <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer'>
                    <img className='w-5 h-5 mx-2' src={home}></img>
                    <a className="">Home</a>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer'>
                    <img className='w-5 h-5 mx-2' src={mycourses}></img>
                    <a className="">Enrolled Courses</a>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer'>
                    <img className='w-5 h-5 mx-2' src={quizzes}></img>
                    <a className="">Quizzes</a>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer'>
                    <img className='w-5 h-5 mx-2' src={grades}></img>
                    <a className="">Grades</a>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer'>
                    <img className='w-5 h-5 mx-2' src={presentation}></img>
                    <a className="">Presentation</a>
                </div>
                <br></br><br></br><br></br><hr></hr>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer'>
                    <img className='w-5 h-5 mx-2' src={profile}></img>
                    <a className="">MyProfile</a>
                </div>
                <div className='flex justify-start items-center p-2 hover:bg-sky-600 hover:rounded-xl cursor-pointer'>
                    <img className='w-5 h-5 mx-2' src={logout}></img>
                    <a className="">Logout</a>
                </div>

            </div>
        </>
    )
}
export default SideBar
=======
import React from "react";
import img from "../assets/images/blackboard-class.svg";

const Sidebar = () => {
  return (
    <div className="bg-sky-700 px-6 py-2 text-white text-xl rounded-3xl w-40 flex justify-center items-center cursor-pointer hover:bg-sky-600 mr-6">
                  <img className="p-2" src={img} alt="Search Icon" />
                  <p> username</p>
    </div>



    // <div className="w-52 h-screen bg-white border-r p-5 space-y-6">
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">⏱️</span>
    //     <span className="text-base">Dashboard</span>
    //   </div>
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">🏬</span>
    //     <span className="text-base">Restautant’s</span>
    //   </div>
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">👤</span>
    //     <span className="text-base">Manage User’s</span>
    //   </div>
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">📦</span>
    //     <span className="text-base">Manage Order’s</span>
    //   </div>
    //   <div className="flex items-center space-x-2 cursor-pointer">
    //     <span className="text-xl">🏷️</span>
    //     <span className="text-base">Manage Coupon’s</span>
    //   </div>
    // </div>
  );
};

export default Sidebar;
>>>>>>> 4cbcadb8da0249fceff0274d193dcda04e5f9be1

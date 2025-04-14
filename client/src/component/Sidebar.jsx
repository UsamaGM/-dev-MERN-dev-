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

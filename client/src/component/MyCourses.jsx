import Courses from "./Courses"
<<<<<<< HEAD

function MyCourses(){
    return(
        <>
            <Courses/>
=======
import Sidebar from './Sidebar'

function MyCourses() {
    return (
        <>
            <div className='flex h-screen'>
                <div>
                    <Sidebar />
                </div>
                <div className={`mt-10 overflow-y-auto`}>
                    <Courses />
                </div>
            </div>
>>>>>>> 4e2ba8c1f747a4c4f2c880703452c752242ff1dd
        </>
    )
}
export default MyCourses
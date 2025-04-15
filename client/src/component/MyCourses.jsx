import Courses from "./Courses"
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
        </>
    )
}
export default MyCourses
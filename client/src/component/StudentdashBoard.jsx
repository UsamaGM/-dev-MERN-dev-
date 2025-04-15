import Header from './Header'
import Courses from './Courses'
import Card from './Card'
import ProgressBar from './ProgressBar'
import Sidebar from './Sidebar'
import RightSideBar from './RightSideBar'

function StudentDashBoard() {
    return (
        <>
            <div className='flex h-screen'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Header />
                    <Card />
                    <Courses />
                </div>
                <div>
                    <RightSideBar />
                </div>
            </div>
        </>
    )
}
export default StudentDashBoard
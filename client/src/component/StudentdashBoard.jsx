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
<<<<<<< HEAD
                <div>
                    <Header />
                    <Card />
                    <Courses />
                </div>
                <div>
                    <RightSideBar />
                </div>
=======
                <div >
                    <Header />
                    <div className='flex'>
                    <div>
                        <Card />
                        <Courses />
                    </div>
                    <div>
                        <RightSideBar />
                    </div>
                    </div>
                </div>

>>>>>>> 4e2ba8c1f747a4c4f2c880703452c752242ff1dd
            </div>
        </>
    )
}
export default StudentDashBoard
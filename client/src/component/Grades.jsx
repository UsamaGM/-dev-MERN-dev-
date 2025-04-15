import ProgressBar from "./ProgressBar"
import SideBar from "./Sidebar"

function Grades() {
    return (
        <>
            <div className='flex h-screen'>
                <div>
                    <SideBar />
                </div>
                <div>
                    <ProgressBar/>
                </div>
            </div>
        </>
    )
}
export default Grades
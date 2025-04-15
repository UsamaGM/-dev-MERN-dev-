import ProgressBar from "./ProgressBar"
import SideBar from "./Sidebar"

function Grades() {
    return (
        <>
            <div className='flex h-screen'>
                <div>
                    <SideBar />
                </div>
                <div className="flex justify-center items-center w-full">
                    <ProgressBar/>
                </div>
            </div>
        </>
    )
}
export default Grades
import SideBar from "./Sidebar"
import icon from '../assets/images/blackProfile.png'

function Profile() {
    return (
        <div className="flex h-screen">
            <SideBar/>
            <div className="px-13"> 

                <h1 className="text-2xl font-medium mb-6 mt-15">My Profile</h1>
                <div className="flex">
                     
                    <div >
                        <h2>Sarah Shaikh</h2>  
                        <p>xyz@gmail.com</p>  
                        <p>0323****123</p>  
                    </div>
                    <img className="w-30 h-30" src={icon} />
                </div>
                <br /><br />
            </div>
        </div>
    )
}
export default Profile


import SideBar from "./Sidebar"
import icon from '../assets/images/blackLogoIcon.webp'

function Profile() {
    return (
        <div className="flex h-screen w-full bg-slate-200">
            <SideBar/>
            <div className="px-13 rounded-3xl p-4 bg-white pb-10 m-15"> 
                <h1 className="text-4xl font-medium mb-6 mt-15 px-9">My Profile</h1>
                <div className="flex w-full">
                     
                    <div className="text-xl font-base mb-6 mt-3 text-slate-600">
                        <h2 className="py-6 px-10">FullName: Sarah Shaikh</h2>  
                        <p className="py-6 px-10">Email: xyz@gmail.com</p>  
                        <p className="py-6 px-10">Role: Teacher</p>  
                    </div>
                    <img className="w-70 h-70 ml-60" src={icon} />
                </div>
                <br /><br />
            </div>
        </div>
    )
}
export default Profile


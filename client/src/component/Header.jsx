// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import searchLogo from '../assets/images/searchLogo.png'
import profileIcon from '../assets/images/LoginLogo.png'
function Header() {
    return (
        <>
            <div className="bg-white w-full p-5 flex justify-between">
                <div>
                    <p className="text-2xl font-medium ml-6">Hello newUser</p>
                </div>
                <div className="relative">
                    <input className="md:block hidden border-1 border-slate-800 rounded-3xl p-2 py-3 w-90 pr-10" type="text" placeholder="Search Your Courses" />
                    <img className="absolute top-1/2 right-3 transform -translate-y-1/2" src={searchLogo} alt="Search Icon" />
                </div>

                <div className="bg-sky-700 px-6 py-2 text-white text-xl rounded-3xl w-40 flex justify-center items-center cursor-pointer hover:bg-sky-600 mr-6">
                <img className="p-2" src={profileIcon} alt="Search Icon" />
                   <p> username</p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}
export default Header
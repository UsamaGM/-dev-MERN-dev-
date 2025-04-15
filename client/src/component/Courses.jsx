import pic from '../assets/images/pic2.png'
function Courses() {
    return (
        <>
            <div className={`p-4 bg-slate-100 pb-10 overflow-y-auto ${window.location.pathname === '/myCourses' ? 'h-[500px]' : 'h-[252px]'}`}>
                <p className="text-2xl font-medium mb-6 px-13">My Courses</p>
                <div className="grid grid-cols-2 px-7">
                    <div className="max-w-sm bg-amber-50 rounded-2xl overflow-hidden md:flex md:max-w-lg shadow-2xl mx-5 mb-5">
                        <div>
                            <img className="h-40 md:w-lg object-cover" src={pic} />
                        </div>
                        <div className="p-4 w-lg">
                            <p className="font-semibold text-sm text-slate-700 uppercase">Web Development</p>
                            <p className="font-medium cursor-pointer mt-1">Department of Computer Science</p>
                            <p className="font-medium cursor-pointer mt-2">5/10</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-amber-50 rounded-2xl overflow-hidden md:flex md:max-w-lg shadow-2xl mx-5 mb-5">
                        <div>
                            <img className="h-40 md:w-lg object-cover" src={pic} />
                        </div>
                        <div className="p-4 w-lg">
                            <p className="font-semibold text-sm text-slate-700 uppercase">Web Development</p>
                            <p className="font-medium cursor-pointer mt-1">Department of Computer Science</p>
                            <p className="font-medium cursor-pointer mt-2">5/10</p>
                        </div>
                    </div>


                    
                    <div className="max-w-sm bg-amber-50 rounded-2xl overflow-hidden md:flex md:max-w-lg shadow-2xl mx-5 mb-5">
                        <div>
                            <img className="h-40 md:w-lg object-cover" src={pic} />
                        </div>
                        <div className="p-4 w-lg">
                            <p className="font-semibold text-sm text-slate-700 uppercase">Web Development</p>
                            <p className="font-medium cursor-pointer mt-1">Department of Computer Science</p>
                            <p className="font-medium cursor-pointer mt-2">5/10</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-amber-50 rounded-2xl overflow-hidden md:flex md:max-w-lg shadow-2xl mx-5 mb-5">
                        <div>
                            <img className="h-40 md:w-lg object-cover" src={pic} />
                        </div>
                        <div className="p-4 w-lg">
                            <p className="font-semibold text-sm text-slate-700 uppercase">Web Development</p>
                            <p className="font-medium cursor-pointer mt-1">Department of Computer Science</p>
                            <p className="font-medium cursor-pointer mt-2">5/10</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-amber-50 rounded-2xl overflow-hidden md:flex md:max-w-lg shadow-2xl mx-5 mb-5">
                        <div>
                            <img className="h-40 md:w-lg object-cover" src={pic} />
                        </div>
                        <div className="p-4 w-lg">
                            <p className="font-semibold text-sm text-slate-700 uppercase">Web Development</p>
                            <p className="font-medium cursor-pointer mt-1">Department of Computer Science</p>
                            <p className="font-medium cursor-pointer mt-2">5/10</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Courses
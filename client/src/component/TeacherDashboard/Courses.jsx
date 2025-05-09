import pic from '../../assets/images/pic2.png'
function Courses() {
    return (
        <>
            <div className="mx-2 rounded-3xl p-4 bg-slate-100  pb-10">
                <p className="text-2xl font-medium mb-6 px-10">My Courses</p>
                <div className="grid grid-cols-2 px-7">
                    <div class="max-w-sm bg-amber-50 rounded-2xl overflow-hidden md:flex md:max-w-lg shadow-2xl mx-5">
                        <div>
                            <img class="h-40 md:w-lg object-cover" src={pic} />
                        </div>
                        <div class="p-4 w-lg">
                            <p class="font-semibold text-sm text-slate-700 uppercase">Web Development</p>
                            <p class="font-medium cursor-pointer mt-1">Department of Computer Science</p>
                            <p class="font-medium cursor-pointer mt-2">5/10</p>
                        </div>
                    </div>
                    <div class="max-w-sm bg-amber-50 rounded-2xl overflow-hidden md:flex md:max-w-lg shadow-2xl mx-5">
                        <div>
                            <img class="h-40 md:w-lg object-cover" src={pic} />
                        </div>
                        <div class="p-4 w-lg">
                            <p class="font-semibold text-sm text-slate-700 uppercase">Web Development</p>
                            <p class="font-medium cursor-pointer mt-1">Department of Computer Science</p>
                            <p class="font-medium cursor-pointer mt-2">5/10</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Courses
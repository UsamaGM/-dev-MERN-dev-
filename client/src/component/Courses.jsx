import pic from '../assets/images/pic2.png'
function Courses() {
    const courses = [{title: "International Relations", subtitle: "Education Department", grade: "3/10"}, {title: "Web Development", subtitle: "Department of Computer Science", grade: "5/10"}, {title: "Enterprise Appliaction Development", subtitle: "Department of Computer Science", grade: "6/10"}, {title: "Software Engineering", subtitle: "Department of Computer Science", grade: "8/10"}, {title: "Micro Economics", subtitle: "Business Administration", grade: "10/10"}]

    return (
        <>
            <div className={`p-4 bg-slate-100 pb-10 overflow-y-auto ${window.location.pathname === '/myCourses' ? 'h-[500px]' : 'h-[252px]'}`}>
                <p className="text-2xl font-medium mb-6 px-13">My Courses</p>
                <div className="grid grid-cols-2 px-7">
                    {courses.map(course => (
                        <div class="max-w-sm bg-amber-50 rounded-2xl overflow-hidden md:flex md:max-w-lg shadow-2xl mx-5 mb-5">
                        <div>
                            <img className="h-40 md:w-lg object-cover" src={pic} />
                        </div>
                        <div class="p-4 w-lg">
                            <p class="font-semibold text-sm text-slate-700 uppercase">{course.title}</p>
                            <p class="font-medium cursor-pointer mt-1">{course.subtitle}</p>
                            <p class="font-medium cursor-pointer mt-2">{course.grade}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Courses
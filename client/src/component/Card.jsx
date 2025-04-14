import quiz from '../assets/images/quiz.jpg'
import courses from '../assets/images/courses.jpg'
function Card() {
    return (
        <>
            <div className="m-4 rounded-3xl p-4 bg-slate-100 px-10 grid grid-cols-4 ">
                <div class="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-10">
                    <div className='p-4'>
                        <img class=" object-cover" src={courses} />
                    </div>
                    <div class="p-3 pb-5">
                        <p class="font-semibold text-md text-slate-700 uppercase">Enrolled Courses</p>
                        <p class="font-medium cursor-pointer mt-2">8</p>
                    </div>

                </div>
                <div class="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-10">
                    <div className='p-4'>
                        <img class=" object-cover" src={quiz} />
                    </div>
                    <div class="p-3 pb-5">
                        <p class="font-semibold text-lg text-slate-700 uppercase">My Quizzez</p>
                        <p class="font-medium cursor-pointer mt-2">8</p>
                    </div>

                </div>
                <div class="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-10">
                    <div className='p-4'>
                        <img class=" object-cover" src={quiz} />
                    </div>
                    <div class="p-3 pb-5">
                        <p class="font-semibold text-lg text-slate-700 uppercase">Enrolled Courses</p>
                        <p class="font-medium cursor-pointer mt-2">8</p>
                    </div>

                </div>
                <div class="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-10">
                    <div className='p-4'>
                        <img class=" object-cover" src={quiz} />
                    </div>
                    <div class="p-3 pb-5">
                        <p class="font-semibold text-lg text-slate-700 uppercase">My Presentations</p>
                        <p class="font-medium cursor-pointer mt-2">8</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Card
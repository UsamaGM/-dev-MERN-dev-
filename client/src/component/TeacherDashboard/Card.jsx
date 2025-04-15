import quiz from '../../assets/images/quiz.jpg'
import profilricon from '../../assets/images/profile.png'
import courses from '../../assets/images/courses.jpg'
import grade from '../../assets/images/score.png'
import presentaion from '../../assets/images/presentation.png'
import book from   '../../assets/images/Book.png'
import add from '../../assets/images/add.png'
import addcircle from '../../assets/images/addcircle.png'

function Card({ course, quizzez, presentation, grades }) {
    return (
        <>
            <div className="rounded-3xl p-4 bg-slate-100 px-10 grid grid-cols-4 gap-6 pb-10 mt-10">
                <div className="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
                    <div className='pt-4'>
                        <img className="object-cover" src={courses} />
                    </div>
                    <div className="pb-5">
                        <p className="font-semibold text-sm text-slate-700 uppercase">Enrolled Courses</p>
                        <p className="font-medium mt-2">8</p>
                    </div>
                </div>

                <div className="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
                    <div className='pt-4'>
                        <img className="object-cover" src={quiz} />
                    </div>
                    <div className="p-3 pb-5">
                        <p className="font-semibold text-sm text-slate-700 uppercase">My Quizzes</p>
                        <p className="font-medium cursor-pointer mt-2">8</p>
                    </div>
                </div>

                <div className="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
                    <div className='pt-4'>
                        <img className="object-cover" src={grade} />
                    </div>
                    <div class="p-3 pb-5">
                        <p className="font-semibold text-sm text-slate-700 uppercase">My Grades</p>
                        <p className="font-medium cursor-pointer mt-2">8</p>
                    </div>
                </div>

                <div className="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
                    <div className='pt-4'>
                        <img className="object-cover mt-10" src={presentaion} />
                    </div>
                    <div className="pb-5">
                        <p className="font-semibold text-sm text-slate-700 uppercase">My Presentations</p>
                        <p className="font-medium cursor-pointer mt-2">8</p>
                    </div>
                </div>

                
            </div>


            <div className="p-4 bg-slate-200 px-10 grid grid-cols-4 gap-6 pb-10 mt-10">
            <div className="bg-amber-50 overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
                    <div className='pt-4 w-10'> 
                        <img className="object-cover mt-10" src={addcircle} />
                    </div>
                    <div className="pb-5 justify-center items-center flex-col">
                        <p className="font-semibold text-sm text-custom-blue uppercase">Create Presentation</p>
                    </div>
                </div>                

                <div className="bg-amber-50 overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
                    <div className='pt-4'>
                        <img className="object-cover" src={courses} />
                    </div>
                    <div className="pb-5">
                        <p className="font-semibold text-sm text-custom-blue uppercase">Create Classroom</p>
                        <p className="font-medium cursor-pointer mt-2">Create</p>
                    </div>
                </div>
                <div className="bg-amber-50 overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5 h-min">
                    
                    <div className="pb-5">
                <div className="text-center">
                <button type="submit" className="bg-blue-600 transition text-white font-semibold px-6 py-2 rounded shadow-md mt-5">Create Quiz</button>
                </div>
                    </div>
                </div>

                <div className="bg-slate overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
                    <div className='pt-4'>
                        <img className="object-cover max-w-xl mt-10" src={book} />
                    </div>
                    <div className="pb-5">
                        <p className="font-semibold text-sm text-custom-blue uppercase">My Courses</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

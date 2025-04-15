import quiz from "../assets/images/quiz.jpg";
import courses from "../assets/images/courses.jpg";
import grade from "../assets/images/score.png";
import presentaion from "../assets/images/presentation.png";
function Card({ course, quizzez, presentation, grades }) {
  return (
    <>
      <div className="p-4 bg-slate-100 px-10 grid grid-cols-4">
        <div className="bg-amber-50 ease-in-out hover:scale-105 cursor-pointer rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
          <div className="pt-4">
            <img className="object-cover" src={courses} />
          </div>
          <div className="pb-5">
            <p className="font-semibold text-sm text-slate-700 uppercase">
              Enrolled Courses
            </p>
            <p className="font-medium mt-2">8</p>
          </div>
        </div>
        <div className="bg-amber-50 ease-in-out hover:scale-105 cursor-pointer rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
          <div className="pt-4">
            <img className=" object-cover" src={quiz} />
          </div>
          <div className="p-3 pb-5">
            <p className="font-semibold text-sm text-slate-700 uppercase">
              My Quizzes
            </p>
            <p className="font-medium cursor-pointer mt-2">8</p>
          </div>
        </div>
        <div className="bg-amber-50 ease-in-out hover:scale-105 cursor-pointer rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
          <div className="pt-4">
            <img className=" object-cover" src={grade} />
          </div>
          <div className="p-3 pb-5">
            <p className="font-semibold text-sm text-slate-700 uppercase">
              My Grades
            </p>
            <p className="font-medium cursor-pointer mt-2">8</p>
          </div>
        </div>
        <div className="bg-amber-50 ease-in-out hover:scale-105 cursor-pointer rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
          <div className="pt-4">
            <img className=" object-cover" src={presentaion} />
          </div>
          <div className="pb-5">
            <p className="font-semibold text-sm text-slate-700 uppercase">
              My Presentations
            </p>
            <p className="font-medium cursor-pointer mt-2">8</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

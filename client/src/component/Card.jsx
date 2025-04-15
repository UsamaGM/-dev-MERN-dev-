import quiz from "../assets/images/quiz.jpg";
import courses from "../assets/images/courses.jpg";
import grade from "../assets/images/score.png";
import presentaion from "../assets/images/presentation.png";
function Card({ course, quizzez, presentation, grades }) {
  return (
    <>
      <div className=" rounded-3xl p-4 bg-slate-100 px-10 grid grid-cols-4 pb-10">
        <div class="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
          <div className="pt-4">
            <img class="object-cover" src={courses} />
          </div>
          <div class="pb-5">
            <p class="font-semibold text-sm text-slate-700 uppercase">
              Enrolled Courses
            </p>
            <p class="font-medium mt-2">8</p>
          </div>
        </div>
        <div class="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
          <div className="pt-4">
            <img class=" object-cover" src={quiz} />
          </div>
          <div class="p-3 pb-5">
            <p class="font-semibold text-sm text-slate-700 uppercase">
              My Quizzes
            </p>
            <p class="font-medium cursor-pointer mt-2">8</p>
          </div>
        </div>
        <div class="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
          <div className="pt-4">
            <img class=" object-cover" src={grade} />
          </div>
          <div class="p-3 pb-5">
            <p class="font-semibold text-sm text-slate-700 uppercase">
              My Grades
            </p>
            <p class="font-medium cursor-pointer mt-2">8</p>
          </div>
        </div>
        <div class="bg-amber-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between items-center mx-5">
          <div className="pt-4">
            <img class=" object-cover" src={presentaion} />
          </div>
          <div class="pb-5">
            <p class="font-semibold text-sm text-slate-700 uppercase">
              My Presentations
            </p>
            <p class="font-medium cursor-pointer mt-2">8</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

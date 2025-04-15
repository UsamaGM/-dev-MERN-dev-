import MyCourses from './component/MyCourses';
<<<<<<< HEAD
import Quiz from './component/Quiz'
import StudentDashBoard from './component/StudentdashBoard'
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from './component/TeacherDashboard/TeacherDashboard';
=======
import Presentation from './component/Presentation';
import Quizzes from './component/Quizzes';
import StudentDashBoard from './component/StudentdashBoard'
import Grades from './component/Grades'
import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
>>>>>>> 4e2ba8c1f747a4c4f2c880703452c752242ff1dd

function App() {
  return (
    <>
<<<<<<< HEAD
      {/* <Routes>
        <Route path='/' element={<StudentDashBoard />}></Route>
        <Route path='/myCourses' element={<MyCourses/>}></Route>
      </Routes> */}
      {/* <Quiz /> */}
      <TeacherDashboard />
=======
      <Routes>
      <Route path='/' element={<Login />}></Route>
        <Route path='/studentDashBoard' element={<StudentDashBoard />}></Route>
        <Route path='/myCourses' element={<MyCourses/>}></Route>
        <Route path='/quizzes' element={<Quizzes/>}></Route>
        <Route path='/presentation' element={<Presentation/>}></Route>
        <Route path='/grades' element={<Grades/>}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      {/* <Quiz /> */}
>>>>>>> 4e2ba8c1f747a4c4f2c880703452c752242ff1dd
    </>
  );
}

export default App;

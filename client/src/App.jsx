import MyCourses from './component/MyCourses'
import StudentDashBoard from './component/StudentdashBoard';
import Presentation from './component/Presentation';
import Quiz from './component/Quiz'
import Quizzes from './component/Quizzes';
import Grades from './component/Grades'
import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Profile from './component/Profile';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/studentDashBoard' element={<StudentDashBoard />}></Route>
        <Route path='/myCourses' element={<MyCourses />}></Route>
        <Route path='/quizzes' element={<Quizzes />}></Route>
        <Route path='/presentation' element={<Presentation />}></Route>
        <Route path='/grades' element={<Grades />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </>
  );
}

export default App;

import MyCourses from './component/MyCourses';
import Quiz from './component/Quiz'
import StudentDashBoard from './component/StudentdashBoard'
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from './component/TeacherDashboard/TeacherDashboard';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<StudentDashBoard />}></Route>
        <Route path='/myCourses' element={<MyCourses/>}></Route>
      </Routes> */}
      {/* <Quiz /> */}
      <TeacherDashboard />
    </>
  )
}

export default App

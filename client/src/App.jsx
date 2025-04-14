import { useState } from 'react'
import Header from './component/Header'
import Courses from './component/Courses'
import ProgressBar from './component/ProgressBar'
import Sidebar from './component/Sidebar'
import Quiz from './component/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Courses/>
      <ProgressBar />
      <Sidebar />
      <Quiz />
    </>
  )
}

export default App

import { useState } from 'react'
import Header from './component/Header'
import Courses from './component/Courses'
import Card from './component/Card'
import ProgressBar from './component/ProgressBar'
import Sidebar from './component/Sidebar'
import Quiz from './component/Quiz'
import Sidebar from './component/Sidebar'
import Quiz from './component/Quiz'


function App() {
  return (
    <>
      <Header/>  
      <Card/>
      <Courses/>   
      <ProgressBar />
      <Sidebar />
      <Quiz />
      <Courses/>
      <ProgressBar />
      <Sidebar />
      <Quiz />
    </>
  )
}

export default App

import { useState } from 'react'
import Header from './component/Header'
import Courses from './component/Courses'
import Card from './component/Card'
import ProgressBar from './component/ProgressBar'
import SideBar from './component/Sidebar'
import Sidebar from './component/Sidebar'
import Quiz from './component/Quiz'


function App() {
  return (
    <>
      <Header/>  
      <Card/>
      <Courses/>
      <ProgressBar />
      <SideBar/>
      <Quiz />
    </>
  )
}

export default App

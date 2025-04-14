import { useState } from 'react'
import Header from './component/Header'
import Courses from './component/Courses'
import Card from './component/Card'
import ProgressBar from './component/ProgressBar'
import SideBar from './component/Sidebar'

function App() {
  return (
    <>
      <Header/>  
      <Card/>
      <Courses/>
      <ProgressBar />
      <SideBar/>
    </>
  )
}

export default App

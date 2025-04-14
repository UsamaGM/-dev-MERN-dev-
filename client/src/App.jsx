import { useState } from 'react'
import Header from './component/Header'
import Courses from './component/Courses'
import Card from './component/Card'
import ProgressBar from './component/ProgressBar'

function App() {
  return (
    <>
      <Header/>  
      <Card/>
      <Courses/>
     
      <ProgressBar />
    </>
  )
}

export default App

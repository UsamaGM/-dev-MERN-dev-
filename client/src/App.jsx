import { useState } from 'react'
import Header from './component/Header'
import Courses from './component/Courses'
import Card from './component/Card'
import ProgressBar from './component/ProgressBar'
import Login from './component/Login'

function App() {
  return (
    <>
      <Header/>
      <Courses/>
      <Card/>
      <ProgressBar />
      <Login />
    </>
  )
}

export default App

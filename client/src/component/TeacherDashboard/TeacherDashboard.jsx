import React from 'react'
import Card from './Card'
import Courses from './Courses'
import Header from './Header'
import SideBar from './Sidebar'


const TeacherDashboard = () => {
  return (
    <>
        <div className='flex h-screen'>
            <div>
                <SideBar />
            </div>
            <div className='w-full'>
                <Header />
                <Card />
            </div>
        </div>
    </>
)
}

export default TeacherDashboard

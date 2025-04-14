import React from 'react'

const Quiz = () => {
  return (
    <div>
      <form action="" className='shadow-2xl rounded-3xl bg-blue  w-1/2 mx-auto mt-10 '>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2>What is the capital city of Pakistan?</h2>
            <div><input type="radio" id="islamabad" name="capital" value="islamabad" />
            <label htmlFor="islamabad">Islamabad</label><br /></div>
            <div>
            <input type="radio" id="lahore" name="capital" value="lahore" />
            <label htmlFor="lahore">Lahore</label><br />    
            </div>
            <div>
            <input type="radio" id="karachi" name="capital" value="karachi" />
            <label htmlFor="karachi">Karachi</label><br />
            </div>            
            <div>
            <input type="radio" id="peshawar" name="capital" value="peshawar" />
            <label htmlFor="peshawar">Peshawar</label><br />
            </div>            
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      </form>
    </div>
  )
}

export default Quiz

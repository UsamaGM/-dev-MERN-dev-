import React from 'react'

const Quiz = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 p-6">
      <form className="bg-white shadow-2xl rounded-3xl w-full max-w-xl p-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          What is the capital city of Pakistan?
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input type="radio" id="islamabad" name="capital" value="islamabad" className="accent-blue-600 w-5 h-5" />
            <label htmlFor="islamabad" className="text-lg text-gray-700">Islamabad</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" id="lahore" name="capital" value="lahore" className="accent-blue-600 w-5 h-5" />
            <label htmlFor="lahore" className="text-lg text-gray-700">Lahore</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" id="karachi" name="capital" value="karachi" className="accent-blue-600 w-5 h-5" />
            <label htmlFor="karachi" className="text-lg text-gray-700">Karachi</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" id="peshawar" name="capital" value="peshawar" className="accent-blue-600 w-5 h-5" />
            <label htmlFor="peshawar" className="text-lg text-gray-700">Peshawar</label>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-2 rounded-full shadow-md"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default Quiz

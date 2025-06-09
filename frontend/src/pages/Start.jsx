import React from 'react' 
import {Link} from "react-router-dom"

const Start = () => {
  return (
    <div className = "h-screen pt-8 flex justifly-between flex-col w-full bg-red-400">
        <img className='w-16 ml-8' src='uberlogo' />
        <div className='bg-white py-5 px-10'>
            <h2>Get Started with Uber</h2>
            <Link to="/login" className=''>Continue</Link>
        </div>
    </div>
  )
}

export default Start
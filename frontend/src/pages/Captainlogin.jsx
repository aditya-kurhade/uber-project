import React, {useState} from 'react'
import {Link} from "react-router-dom"

const Captainlogin = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState("")
        const [captainData, setCaptainData] = useState({})

const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
        email:email,
        password:password
    })

    setEmail("")
    setPassword("")
}
return (
   <><div>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
              <h3>What your email</h3>
              <input required type="email" value={email} onchange = {(e)=> { setEmail(e.target.value );}}
                placeholder='Email' />
              <h3>Enter Password</h3>
              <input required type="Password" value={password} onChange={(e) => {
                setPassword(e.target.value)
              }}   placeholder='Password' />
              <button>Login</button>
          </form>
              <p>Join a fleet<Link to="/captain-signup ">Register as a captain</Link></p>
      </div>
       <div>
            <Link to="/login">Sign in as User</Link>
        </div></>
  )
}
export default Captainlogin
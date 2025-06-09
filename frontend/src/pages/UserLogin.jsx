import React, {useState} from 'react'
import {Link} from "react-router-dom"

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({})

const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
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
              }}   placeholder='Passeord' />
              <button>Login</button>
          </form>
              <p>New here <Link to="/signup ">Create new Account</Link></p>
      </div>
       <div>
            <Link to="/captain-login">Sign in as Captain</Link>
        </div></>
  )
}

export default UserLogin
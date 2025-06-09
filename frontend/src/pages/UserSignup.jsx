import React , {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom '
import axios from 'axios'
import UserContext from '../context/UserContext'


const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userData, setUserData] = useState({})

  const navigate = useNavigate();

  const {user, setUser} = React.userContext(UserContext)

  const submitHandler = async (e) => {
    e.preventDefault()

    const newUser = {
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/regiister`, newUser)

    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      navigate('/home')
    }


    setEmail("")
    setFirstName("")
    setPassword("")
    setLastName("")


  }

  return (
    <><div>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <h3>Whats your name </h3>
            <div className='flex'>
              <input required type="text" value={firstName} onChange={(e) => {
                setFirstName(e.target.value)
              }}
                placeholder='First name ' />

              <input required type="text"  value={lastName} onChange={(e) => {
                setLastName(e.target.value)
              }}
                placeholder='Last name' />
            </div>
              <h3>What your email</h3>
              <input required type="email" value={email} onChange={(e) => {
                setEmail(e.target.value)
              }}
                placeholder='Email' />
              <h3>Enter Password</h3>
              <input required type="Password" value={password} onChange={(e) => {
                setPassword(e.target.value)
              }}  placeholder='Passeord' />
              <button>Login</button> 
          </form>
              <p>Already have Account<Link to="/signup">login</Link></p>
      </div>
       <div>
            <Link to="/captain-login">Sign in as Captain</Link>
        </div></>
  )
}

export default UserSignup
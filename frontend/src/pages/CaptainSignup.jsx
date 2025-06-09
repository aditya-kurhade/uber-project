import React , {useState} from 'react'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
    })
   
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
            <h3>Whats is captain name </h3>
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
              <h3>What is captain  email</h3>
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

export default CaptainSignup
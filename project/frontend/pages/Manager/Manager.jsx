import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import './Manager.scss'

const Manager = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
       const user = jwt_decode(token)
        if(!user) {
          console.log('Something went wrong')
          localStorage.removeItem('token')
          navigate('/login')
        }
        else {
          alert("FUNZIONA")
        }
    }
  }, [])

  return (
    <div id='main-container'>
      <div className='flex box-container'>
        <p>Manager here</p>
      </div>
    </div>
  )
}

export default Manager

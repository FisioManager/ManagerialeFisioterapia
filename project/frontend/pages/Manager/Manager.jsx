import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Manager.scss'

const Manager = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken) {

        // VALIDATE TOKEN BY ASKING SERVER

        // IF NOT VALID THEN:
        // console.log('Something went wrong')
        // localStorage.removeItem('accessToken')
        // localStorage.removeItem('refreshToken')
        // navigate('/login')
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

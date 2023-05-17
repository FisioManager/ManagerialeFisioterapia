import './Login.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const Login = () => {
  const [focusedElement, setFocusedElement] = useState('email')
  const [theme, setTheme] = useState('light')
  const location = useLocation()

  // credential state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser() {
    const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
    }, {
        headers: {
          'Content-Type': 'application/json',
        },
    })

    const data = response.data

    if (data.token) {
      localStorage.setItem('token', data.token)
      alert('Login successful')
      window.location.href = '/manager'
    } else {
      alert('Email or Password inccorect')
    }
  }

  // useEffect is called every time the location variable change (that is passed as second parameter with [location])
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? setTheme('dark')
      : setTheme('light')
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const colorScheme = event.matches ? 'dark' : 'light'
        setTheme(colorScheme)
      })
  }, [location])

  return (
    <div id='main-container'>
      <div className='flex box-container'>
        <div className='flex box-30'>
          <img src='/images/place-holder-500.png' alt='login' />
        </div>
        <div className='flex col box-30 gap-4'>
          <h1>Buongiorno Dottore</h1>
          <div>
            <form className='flex col'>
              <div
                className={
                  'form-field flex gap ' +
                  (focusedElement === 'email' ? 'active' : ' ')
                }
                id='email-container'
                onClick={() => setFocusedElement('user')}
              >
                <img
                  src={
                    theme === 'dark'
                      ? 'images/icons/email-negative.png'
                      : 'images/icons/email.png'
                  }
                  alt='email'
                />
                <input
                  className={focusedElement === 'email' ? 'active' : ''}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id='email'
                  type='email'
                  placeholder='example@gmail.com'
                />
              </div>
              <div
                className={
                  'form-field flex gap ' +
                  (focusedElement === 'password' ? 'active' : ' ')
                }
                id='password-container'
                onClick={() => setFocusedElement('password')}
              >
                <img
                  src={
                    theme === 'dark'
                      ? 'images/icons/password-negative.png'
                      : 'images/icons/password.png'
                  }
                  alt='psw'
                />
                <input
                  className={focusedElement === 'password' ? 'active' : ''}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  type='password'
                  placeholder='password'
                />
              </div>
            </form>
            <div className='options flex space-evenly'>
              <div className='flex gap-05'>
                <input
                  type='checkbox'
                  id='ricordami'
                  name='ricordami'
                  value='0'
                />
                <p>ricordami</p>
              </div>
              <a href='/'>dimenticato la password?</a>
            </div>
          </div>
          <div className='flex col gap'>
            <button onClick={loginUser}>Log In</button>
            <Link to='/register'>
              <button>Crea un Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

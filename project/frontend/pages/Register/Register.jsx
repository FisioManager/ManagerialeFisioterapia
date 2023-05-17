import './Register.scss'
import Introduction from '../../components/Introduction/Introduction'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Register = () => {
  const [focusedElement, setFocusedElement] = useState('user')
  const [theme, setTheme] = useState('light')
  const location = useLocation()
  const navigate = useNavigate()

  // credential state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser() {
    const [firstName, lastName] = name.split(' ')

    const response = await axios.post('http://localhost:3000/api/register', {
      firstName,
      lastName,
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = response.data

    if (data.status === 'ok') {
      navigate('/log-in')
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
      <Introduction
        titolo={'Registrati alla nostra piattaforma gratuitamente'}
        testo={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velligula venenatis, vehicula velit id, aliquet nibh.'
        }
      />
      <div className='flex box-container'>
        <div className='flex col box-30 gap-4'>
          <h1>Compila i seguenti campi</h1>
          <form className='flex col'>
            <div
              className={
                'form-field flex gap ' +
                (focusedElement === 'user' ? 'active' : '')
              }
              id='user-container'
              onClick={() => setFocusedElement('user')}
            >
              <img
                src={
                  theme === 'dark'
                    ? 'images/icons/user-negative.png'
                    : 'images/icons/user.png'
                }
                alt='user'
              />
              <input
                id='user'
                type='text'
                placeholder='Nome Cognome'
                className={focusedElement === 'user' ? 'active' : ''}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
              className={
                'form-field flex gap ' +
                (focusedElement === 'email' ? 'active' : ' ')
              }
              id='email-container'
              onClick={() => setFocusedElement('email')}
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
                id='email'
                type='email'
                placeholder='example@gmail.com'
                className={focusedElement === 'email' ? 'active' : ''}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                id='password'
                type='password'
                placeholder='password'
                className={focusedElement === 'password' ? 'active' : ''}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <Link to='/'>
            {' '}
            {/*add here api register*/}
            <button onClick={registerUser}>Continua</button>
          </Link>
        </div>
        <div className='flex box-30'>
          <img src='/images/place-holder-500.png' alt='register' />
        </div>
      </div>
    </div>
  )
}

export default Register

import React, { useState } from 'react'
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core'
import { LoginPage } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/auth/login/actions'

const Login = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.loginReducer)
  const [error, setError] = useState('')
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = (name) => (event) =>
    setCredentials((prevState) => ({
      ...prevState,
      [name]: event.target.value
    }))

  const handleLogin = () => {
    if (credentials.username && credentials.password) {
      setError('')
      dispatch(login(credentials))
    } else {
      setError('The username and the password are required')
    }
  }

  return (
    <LoginPage>
      <form className="form" autoComplete="off">
        <h1>Welcome!</h1>
        <div className="input">
          <TextField
            required
            id="username"
            value={credentials.username}
            onChange={handleChange('username')}
            label="Username"
            placeholder="Username"
            variant="outlined"
            inputProps={{
              'data-testid': 'loginUsernameInput'
            }}
            style={{ width: '100%' }}
          />
        </div>
        <div className="input">
          <TextField
            required
            id="password"
            value={credentials.password}
            onChange={handleChange('password')}
            label="Password"
            placeholder="Password"
            variant="outlined"
            inputProps={{
              'data-testid': 'loginPasswordInput'
            }}
            type="password"
            style={{ width: '100%' }}
          />
        </div>
        {Boolean(error) && <Typography role="error" variant="subtitle1" gutterBottom color="error">{error}</Typography>}
        <Button variant="contained" color="primary" onClick={handleLogin} style={{ width: '100%' }}>
          {loading ? <CircularProgress color="secondary" size={20} /> : 'Login'}
        </Button>
      </form>
    </LoginPage>
  )
}

export default Login

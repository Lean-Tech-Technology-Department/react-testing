import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router'

export const Login = () => {
  const history = useHistory()
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
    if (credentials.username === 'test@gmail.com' && credentials.password === '123456') {
      history.push('/home')
    } else {
      history.push('/auth/login')
    }
  }

  return (
    <div>
      <form autoComplete="off">
        <h1>Welcome!</h1>
        <TextField
          required
          id="loginUsernameInput"
          value={credentials.username}
          onChange={handleChange('username')}
          label="Username"
          variant="outlined"
          inputProps={{
            'data-testid': 'd'
          }}
        />
        <TextField
          required
          id="loginPasswordInput"
          value={credentials.password}
          onChange={handleChange('password')}
          label="Password"
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleLogin} id="loginButton">
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login

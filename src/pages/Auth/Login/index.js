import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { LoginPage } from './styles'

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = (name) => (event) =>
    setCredentials((prevState) => ({
      ...prevState,
      [name]: event.target.value
    }))

  const handleLogin = () => {}

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
            variant="outlined"
            inputProps={{
              'data-testid': 'd'
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
            variant="outlined"
            type="password"
            style={{ width: '100%' }}
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleLogin} style={{ width: '100%' }}>
          Login
        </Button>
      </form>
    </LoginPage>
  )
}

export default Login

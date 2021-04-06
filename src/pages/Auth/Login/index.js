import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

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
    <div>
      <form autoComplete="off">
        <h1>Welcome!</h1>
        <TextField
          required
          id="username"
          value={credentials.username}
          onChange={handleChange('name')}
          label="Username"
          variant="outlined"
          inputProps={{
            'data-testid': 'd'
          }}
        />
        <TextField
          required
          id="password"
          value={credentials.password}
          onChange={handleChange('password')}
          label="Password"
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login

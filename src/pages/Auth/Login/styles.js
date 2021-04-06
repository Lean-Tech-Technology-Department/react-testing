import styled from 'styled-components'

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form {
    width: 100%;
    max-width: 350px;
    padding: 10px 40px 40px 40px;
    box-shadow: 1px 1px 5px gray;
    border-radius: 5px;
  }

  .input {
    margin: 15px 0px;
  }
`

export { LoginPage }
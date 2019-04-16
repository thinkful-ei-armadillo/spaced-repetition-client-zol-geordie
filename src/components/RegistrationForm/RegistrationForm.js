import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
        className='registration-form'
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div className='registration-inputs'>
          <Label htmlFor='registration-name-input'>
            Enter your name<Required />
          </Label>
          <Input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            placeholder='please enter your name'
            required
          />
        </div>
        <div className='registration-inputs'>
          <Label htmlFor='registration-username-input'>
            Choose a username<Required />
          </Label>
          <Input
            id='registration-username-input'
            name='username'
            placeholder='please enter a user name'
            required
          />
        </div>
        <div className='registration-inputs'>
          <Label htmlFor='registration-password-input'>
            Choose a password<Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            placeholder='please enter a password'
            required
          />
        </div>
        <footer>
          <Button className = 'registration-submit' type='submit'>
            Sign up
          </Button>
          {' '}
          <div className='login-link'>Already have an account? <Link to='/login'>Login here.</Link></div>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm

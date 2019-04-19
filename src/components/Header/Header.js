import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import logo from '../../images/flag.png'
import './Header.css'

class Header extends Component {
  state = {hover: false}
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className='logout'>
        <span className='logged-in-username'>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login' className="logout">
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login' className="login">Login</Link>
        {' '}
        <Link to='/register' className="register">Sign up</Link>
      </nav>
    )
  }

  hoverOn = () => {
    this.setState({ hover: true });
  }

  hoverOff = () => { 
      this.setState({ hover: false });    
  }

  render() {
    return (
      <header>
        <div className="title-container">
          <img src={logo} alt='italian flag' className='logo'/>
          <h1>
            <Link to='/' data-hover='Spaced repetition' onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
              {this.state.hover ? "Ripetizione spaziale" : "Spaced repetition"}
            </Link>
          </h1>
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Dashboard from '../../components/Dashboard/Dashboard'


class DashboardRoute extends Component {

  render() {
    return (
      <section className="dashboard">
        <div className="banner">
            <p>Improve your learning</p>
            <p>with Ripetizione!</p>
        </div>
        <Link to='/learn' className="learn-link">Start practicing</Link>
        <Dashboard />
      </section>
    );
  }
}

//h2 with language.name
//`Total correct answers: ${language.total_score}`
//a should have href to /learn and text 'Start practicing'
//h3 should have 'Words to practice'

export default DashboardRoute

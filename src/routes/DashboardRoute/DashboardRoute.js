import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'


class DashboardRoute extends Component {

  render() {
    return (
      <section className="dashboard">
        <Dashboard />
      </section>
    )
  }
}

//h2 with language.name
//`Total correct answers: ${language.total_score}`
//a should have href to /learn and text 'Start practicing'
//h3 should have 'Words to practice'

export default DashboardRoute

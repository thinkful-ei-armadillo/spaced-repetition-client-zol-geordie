import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LanguageContext from '../../contexts/LanguageContext'
import './DashboardRoute.css'


class DashboardRoute extends Component {

  static contextType = LanguageContext;

  renderLanguageContent = () => {
    return (
      <div>
        <h2>{this.context.language.name}</h2>
        <Link to='/learn'>Start practicing</Link>
        <h3>Words to practice</h3>
      </div> )
  }

  renderWordContent = () => {
    let list = this.context.words.map((word) => {
      console.log(word);
      return (<li key={word.id}>
            <h4>{word.original}</h4>
            <p>correct answer count: {word.correct_count}</p>
            <p>incorrect answer count: {word.incorrect_count}</p>
          </li>)
    })
    return (
      <ul>
        {list}
      </ul>)
  }

  render() {
    return (
      <section>
        {Object.keys(this.context.language).length !== 0 && this.renderLanguageContent()}
        {this.context.words.length !== 0 && this.renderWordContent()}
      </section>
    );
  }
}

//h2 with language.name
//`Total correct answers: ${language.total_score}`
//a should have href to /learn and text 'Start practicing'
//h3 should have 'Words to practice'

export default DashboardRoute

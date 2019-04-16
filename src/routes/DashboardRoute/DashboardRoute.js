import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import './DashboardRoute.css'


class DashboardRoute extends Component {

  static contextType = UserContext;

  renderLanguageContent = () => {
    return (
      <div>
        <span>Improve your <h2>{this.context.language.name}</h2></span>
        <span>with Ripetizione!</span>
      </div> 
      )
  }

  renderWordContent = () => {
    let list = this.context.words.map((word) => {
      // console.log(word);
      return (<li key={word.id} className="word">
            <h4>{word.original}</h4>
            <p>correct answer count: {word.correct_count}</p>
            <p>incorrect answer count: {word.incorrect_count}</p>
          </li>)
    })
    return (<ul>{list}</ul>)
  }

  render() {
    console.log(this.context.language.name)
    return (
      <section className="dashboard">
        <h2>{this.context.language.name}</h2>
        <div className="lang-title">
          {/* {Object.keys(this.context.language).length !== 0 && this.renderLanguageContent()} */}
          <div>
            <span>Improve your learning</span>
            <span>with Ripetizione!</span>
          </div> 
        </div>
        <div>
          <Link to='/learn' className="learn-link">Start practicing</Link>
        </div>
        <div className="words">
          <h3>Words to practice</h3>
          {this.context.words.length !== 0 && this.renderWordContent()}
        </div>
      </section>
    );
  }
}

//h2 with language.name
//`Total correct answers: ${language.total_score}`
//a should have href to /learn and text 'Start practicing'
//h3 should have 'Words to practice'

export default DashboardRoute

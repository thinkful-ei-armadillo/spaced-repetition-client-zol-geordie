import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LanguageContext from '../../contexts/LanguageContext'
import LanguageService from '../../services/language-api-service'
import './Dashboard.css'

class Dashboard extends Component {
    state = {hover: false}
    static contextType = LanguageContext

    componentDidMount(){
        LanguageService.getUserLanguage()
          .then(res => {
            this.context.clearError();
            this.context.setLanguage(res.language);
            this.context.setWords(res.words);
          })
          .catch(error => {
            this.context.setError(error);
          })      
   }

    renderWordContent = () => {
        let list = this.context.words.map((word) => {
        return (   
            <li key={word.id} className="word">
                <h4>{word.original}</h4>
                <p>correct answer count: {word.correct_count}</p>
                <p>incorrect answer count: {word.incorrect_count}</p>
            </li>
            )
    })

    return <ul>{list}</ul>
   }

    hoverOn = () => {
        this.setState({ hover: true });
    }

    hoverOff = () => { 
        this.setState({ hover: false });    
    }



    render(){
        const {language, error} = this.context
        return (
            <>
                <div className="banner">
                    <p>Improve your learning</p>
                    <p>with Ripetizione!</p>
                </div>
                <div className="learn-link">
                    <Link to='/learn'   onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                        {this.state.hover ? "Inizia a praticare" : "Start practicing"}
                    </Link>
                </div>
                    
                <div className="words">
                    <div role='alert'>
                        {error && <p>{error}</p>}
                    </div>
                    <div className="language-score">
                        <h3>Words to practice</h3>
                        <span>&nbsp;in&nbsp;</span>
                        <h2>{language.name}</h2>
                    </div>
                    <p className="language">Total correct answers: {language.total_score}</p>
                    {this.context.words.length !== 0 && this.renderWordContent()}
                </div>
            </>

        )
    }
}

export default Dashboard
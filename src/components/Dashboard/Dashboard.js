import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import LanguageService from '../../services/language-api-service'
import './Dashboard.css'

class Dashboard extends Component {

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



    render(){
        const {language, error} = this.context
        return (
            <div className="words">
                <div role='alert'>
                    {error && <p>{error}</p>}
                </div>
                <h2>{language.name}</h2>
                <p>Total correct answers: {language.total_score}</p>
                <h3>Words to practice</h3>
                {this.context.words.length !== 0 && this.renderWordContent()}
            </div>
        )
    }
}

export default Dashboard
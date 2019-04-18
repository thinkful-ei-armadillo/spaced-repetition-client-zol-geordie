import React, { Component } from 'react'
import { Input, Label } from '../Form/Form'
import Button from '../Button/Button'
import LanguageService from '../../services/language-api-service'
import LearningContext from '../../contexts/LearningContext'
import './Learning.css'
class Learning extends Component {
    static contextType = LearningContext

    componentDidMount(){
        LanguageService
            .getLanguageHead()
            .then(languageHead => {
                this.context.clearError()
                this.context.setLanguageHead(languageHead)
            })
            .catch(this.context.setError)
    }

    render(){
        const languageHead = this.context.languageHead;
        return (
            <div className="learning-page">
                <div className="left">
                    <div className="word-info">
                        <h2>Translate the word:</h2>&nbsp;
                        <span>{languageHead.nextWord}</span>
                    </div>
                    <div className='result'>
                        <p>Your total score is: {languageHead.totalScore}</p>
                        <p>You have answered this word correctly {languageHead.wordCorrectCount} times.</p>
                        <p>You have answered this word incorrectly {languageHead.wordIncorrectCount} times.</p>
                    </div>
                </div>
            
                <form className="guess-form right">
                    <Label htmlFor='learn-guess-input' className='guess-label'>
                        What's the translation for this word?
                    </Label>
                    <Input 
                        id='learn-guess-input'
                        name='guess'
                        type='text'
                        required
                    />
                    <Button type='submit' className='guess-btn'>
                        Submit your answer
                    </Button>
                </form>
            </div>
        )
    }
}

export default Learning
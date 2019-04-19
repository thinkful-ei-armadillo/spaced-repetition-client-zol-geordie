import React, { Component } from 'react'
import { Input, Label } from '../Form/Form'
import Button from '../Button/Button'
import LanguageService from '../../services/language-api-service'
import LearningContext from '../../contexts/LearningContext'
import './Learning.css'

class Learning extends Component {
    static contextType = LearningContext
    state = {
        displayMode: false,
        userGuess: '',

    }

    componentDidMount(){
        LanguageService
            .getLanguageHead()
            .then(languageHead => {
                this.context.clearError()
                this.context.setLanguageHead(languageHead)
            })
            .catch(this.context.setError)
    }

    handleSubmitGuess = (e) => {
        e.preventDefault();
        const { guess } = e.target
        console.log(guess.value)
        LanguageService
            .getListGuess({guess: guess.value})
            .then(guessList => {
                this.context.clearError()
                this.context.setGeussResult(guessList)
                this.setState({displayMode: true})
                this.setState({userGuess: guess.value})
            })
            .catch(this.context.setError)
    }

    handleNextword = () => {
        LanguageService
            .getLanguageHead()
            .then(languageHead => {
                this.setState({displayMode: false})
                this.context.clearError()
                this.context.setLanguageHead(languageHead)
                this.setState({userGuess: ''})
            })
            .catch(this.context.setError)        
    }

    renderLanguageHead = (language) =>{
        return (
            <>
                <div className="left">
                    <div className="word-info">
                        <h2>Translate the word:</h2>&nbsp;
                        <span>{language.nextWord}</span>
                    </div>
                    <div className='result'>
                        <p>Your total score is: {language.totalScore}</p>
                        <p>You have answered this word correctly {language.wordCorrectCount} times.</p>
                        <p>You have answered this word incorrectly {language.wordIncorrectCount} times.</p>
                    </div>
                </div>
            
                <form className="guess-form right" onSubmit={this.handleSubmitGuess}>
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
            </>
        )
    }

    renderGuessFeed = (guess, language) => {
        console.log(guess)
        return (
            <div className='FeedbackForm'>
                <h2>{guess.isCorrect ? 'You were correct! :D' : 'Good try, but not quite right :('}</h2>
                <div className="DisplayScore">
                    <p>Your total score is: {guess.totalScore}</p>
                </div>
                <div className="DisplayFeedback">
                    <p>The correct translation for {language.nextWord} was {guess.answer} and you chose {this.state.userGuess}!</p>
                </div>
                <Button type="button" className='next-question' onClick={this.handleNextword}>Try another word!</Button>
            </div>
        )
    }


    render(){
        const { languageHead, guessResult } = this.context;

        return (
            <div className="learning-page">
               {!this.state.displayMode && this.renderLanguageHead(languageHead)}
               {this.state.displayMode && this.renderGuessFeed(guessResult, languageHead)}
            </div>
        )
    }
}

export default Learning
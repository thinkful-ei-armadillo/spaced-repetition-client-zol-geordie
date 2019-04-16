import React, {Component} from 'react';
import LanguageService from '../services/language-api-service'

const LanguageContext = React.createContext({
    setLanguage: () => {},
    setWords: () => {},
    setError: () => {},
    clearError: () => {},
    language: {},
    words: [],
    error: null
});

export default LanguageContext;

export class LanguageProvider extends Component {
    state = {
        language: {},
        words: [],
        error: null
    }

    componentWillMount() {
    LanguageService.getUserLanguage()
      .then(res => {
        this.clearError();
        this.setLanguage(res.language);
        this.setWords(res.words);
      })
      .catch(error => {
        this.setError(error);
      })
    }

    setLanguage = (language) => {
        this.setState({language});
    }

    setWords = (words) => {
        this.setState({words});
    }

    setError = (error) => {
        this.setState({error});
    }

    clearError = () => {
        this.setError(null);
    }

    render() {
        console.log(this.state.language)
        console.log(this.state.words)
        const contextValue = {
            language: this.state.language,
            words: this.state.words,
            setWords: this.setWords,
            setLanguage: this.setLanguage,

            setError: this.setError,
            clearError: this.clearError,
            error: this.state.error
        }
        return (
            <LanguageContext.Provider value={contextValue}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}
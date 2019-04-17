import React, {Component} from 'react';

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
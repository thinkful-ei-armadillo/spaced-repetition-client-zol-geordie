import React, {Component} from 'react';

const LearningContext = React.createContext({
    setLanguageHead: () => {},
    setGeussResult: () => {},
    // setShowWord: () => {},
    setError: () => {},
    clearError: () => {},
    languageHead: {},
    guessResult: {},
    // showWord: null,
    error: null
});

export default LearningContext;

export class LearningProvider extends Component {
    state = {
        languageHead: {},
        guessResult: {},
        // showWord: false,
        error: null
    }

    // setShowWord = (showWord) => {
    //     this.setState({showWord})
    // }

    setGeussResult = (guessResult) => {
        // console.log(guessResult)
        this.setState({guessResult})
    }

    setLanguageHead = (languageHead) => {
        this.setState({languageHead})
    }

    setError = (error) => {
        this.setState({error});
    }

    clearError = () => {
        this.setError(null);
    }

    render() {
        const contextValue = {
            languageHead: this.state.languageHead,
            guessResult: this.state.guessResult,
            // showWord: this.state.showWord,
            error: this.state.error,

            setLanguageHead: this.setLanguageHead,
            setGeussResult: this.setGeussResult,
            // setShowWord: this.setShowWord,
            setError: this.setError,
            clearError: this.clearError
        }
        return (
            <LearningContext.Provider value={contextValue}>
                {this.props.children}
            </LearningContext.Provider>
        )
    }
}
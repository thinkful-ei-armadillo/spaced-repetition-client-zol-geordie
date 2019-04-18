import React, {Component} from 'react';

const LearningContext = React.createContext({
    setLanguageHead: () => {},
    setError: () => {},
    clearError: () => {},
    languageHead: {},
    error: null
});

export default LearningContext;

export class LearningProvider extends Component {
    state = {
        languageHead: {},
        
        error: null
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
            error: this.state.error,

            setLanguageHead: this.setLanguageHead,
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
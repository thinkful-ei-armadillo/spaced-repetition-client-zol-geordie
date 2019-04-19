import config from '../config'
import TokenService from './token-service'

const LanguageService = {
    getUserLanguage() {
        return fetch(`${config.API_ENDPOINT}/language`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
            (!res.ok) ?
            res.json().then(err => Promise.reject(err)) :
            res.json()
        )
    },

    getLanguageHead(){
        return fetch(`${config.API_ENDPOINT}/language/head`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
            (!res.ok) ?
            res.json().then(err => Promise.reject(err)) :
            res.json()
        )
    },

    getListGuess(guess){
        return fetch(`${config.API_ENDPOINT}/language/guess`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(guess)
        })
        .then(res =>
            (!res.ok) ?
            res.json().then(err => Promise.reject(err)) :
            res.json()
        )
    }
}

export default LanguageService;
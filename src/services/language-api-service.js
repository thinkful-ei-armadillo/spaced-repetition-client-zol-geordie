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
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
            (!res.ok) ?
            res.json().then(err => Promise.reject(err)) :
            res.json()
        )
    }
}

export default LanguageService;
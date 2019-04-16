// method: 'GET',
//     url: '/api/language',
//     status: 200,
//     response: 'fixture:language'

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
    }
}

export default LanguageService;
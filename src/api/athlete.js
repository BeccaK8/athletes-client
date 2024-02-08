import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllAthletes = () => {
    return axios(`${apiUrl}/athletes`)
}

// READ -> Show

// CREATE -> Add an athlete

// UPDATE -> Update an athlete

// DELETE -> Remove an athlete
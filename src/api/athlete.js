import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllAthletes = () => {
    return axios(`${apiUrl}/athletes`)
}

// READ -> Show
export const getOneAthlete = (id) => {
    return axios(`${apiUrl}/athletes/${id}`)
}

// CREATE -> Add an athlete

// UPDATE -> Update an athlete

// DELETE -> Remove an athlete
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
export const createAthlete = (user, newAthlete) => {
    return axios({
        url: `${apiUrl}/athletes`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { athlete: newAthlete }
    })
}

// UPDATE -> Update an athlete
export const updateAthlete = (user, updatedAthlete) => {
    return axios({
        url: `${apiUrl}/athletes/${updatedAthlete._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { athlete: updatedAthlete }
    })
}

// DELETE -> Remove an athlete
export const removeAthlete = (user, id) => {
    return axios({
        url: `${apiUrl}/athletes/${id}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
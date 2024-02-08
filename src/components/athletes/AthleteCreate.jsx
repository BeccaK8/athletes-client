import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createAthlete } from '../../api/athlete'
import messages from '../shared/AutoDismissAlert/messages'

import AthleteForm from '../shared/AthleteForm'

const AthleteCreate = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()

    const [athlete, setAthlete] = useState({
        name: '',
        sport: '',
        position: '',
        currentTeam: '',
        jerseyNumber: '',
        active: true
    })

    const onChange = (evt) => {
        evt.persist()
        setAthlete( prevAthlete => {
            const updatedName = evt.target.name
            let updatedValue = evt.target.value

            // handle numbers
            if (evt.target.type === 'number') {
                updatedValue = parseInt(evt.target.value)
            }
            // handle checkbox
            if (updatedName === 'active' && evt.target.checked) {
                updatedValue = true
            } else if (updatedName === 'active' && !evt.target.checked) {
                updatedValue = false
            }

            const updatedAthlete = { [updatedName] : updatedValue }

            return {
                ...prevAthlete, ...updatedAthlete
            }
        })
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        createAthlete(user, athlete)
            .then(res => { navigate(`/athletes/${res.data.athlete._id}`) })
            .then(() => {
                msgAlert({
                    heading: 'Awesome!',
                    message: messages.createAthleteSuccess,
                    variant: 'success'
                })
            })
            .catch(err => {
                msgAlert({
                    heading: 'On no!',
                    message: messages.generalError,
                    variant: 'danger'
                })
            })
    }

    return (
        <AthleteForm
            athlete={athlete}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading='Add an Athlete'
        />
    )
}

export default AthleteCreate

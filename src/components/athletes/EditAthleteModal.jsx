// This modal is rendered by the AthleteShow component
// the state that controls this modal (show) will live in the AthleteShow component (the parent of this modal)

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import AthleteForm from '../shared/AthleteForm'
import messages from '../shared/AutoDismissAlert/messages'

const EditAthleteModal = (props) => {

    const { user, show, handleClose, updateAthlete, msgAlert, triggerRefresh } = props

    const [athlete, setAthlete] = useState(props.athlete)

    const onChange = (evt) => {
        evt.persist()
        setAthlete( prevAthlete => {
            const updatedName = evt.target.name
            let updatedValue = evt.target.value

            // handle numbers
            if (evt.target.type === 'number') {
                updatedValue = !isNaN(evt.target.value) ? parseInt(evt.target.value) : ''
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
        updateAthlete(user, athlete)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: messages.updateAthleteSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(err => {
                msgAlert({
                    heading: 'Oh No!',
                    message: messages.generalError,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <AthleteForm 
                    athlete={athlete}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Athlete"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditAthleteModal
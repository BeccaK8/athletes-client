import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getAllAthletes } from '../../api/athlete'
import LoadingScreen from '../shared/LoadingScreen'
import messages from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const AthleteIndex = (props) => {

    const [athletes, setAthletes] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    useEffect(() => {
        getAllAthletes()
            .then(res => setAthletes(res.data.athletes))
            .catch(error => {
                msgAlert({
                    heading: 'Oh no!',
                    message: messages.generalError,
                    variant: 'danger'
                })
                setError(true)
            }) 
    }, [])

    if (error) {
        return <LoadingScreen />
    } 

    if (!athletes) {
        return <LoadingScreen />
    } else if (athletes.length === 0) {
        return <p>No athletes have been loaded yet. Go ahead and add some!</p>
    } else {
        const athleteCards = athletes.map(ath => (
            <Card key={ ath._id } style={{ width: '30%', margin: 5 }} >
                <Card.Header>{ ath.fullTitle }</Card.Header>
                <Card.Body>
                    { ath.status }
                </Card.Body>
            </Card>
        ))
        return (
            <div className="container-md" style={cardContainerLayout} >
                { athleteCards }
            </div>
        )
    }

}

export default AthleteIndex
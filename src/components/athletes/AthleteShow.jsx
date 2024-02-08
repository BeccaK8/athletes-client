// AthleteShow is our detail page - the show page for a single athlete
// Route -> athletes/<:id>

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Container, Button } from 'react-bootstrap'

import { getOneAthlete } from '../../api/athlete'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingScreen'
import SportIcon from '../shared/SportIcon'

const AthleteShow = (props) => {
    const { athleteId } = useParams()
    const { user, msgAlert } = props

    const [athlete, setAthlete] = useState(null)

    // this is a boolean that we can switch between to trigger a page rerender
    const [updated, setUpdated] = useState(false)

    // this gives us a function we can use to navigate via react-router
    const navigate = useNavigate()

    useEffect(() => {
        getOneAthlete(athleteId)
            .then(res => setAthlete(res.data.athlete))
            .catch(err => {
                msgAlert({
                    heading: 'Oh no!',
                    message: messages.generalError,
                    variant: 'danger'
                })
            })
    }, [updated])

    // if we don't have a pet, show LoadingScreen
    if (!athlete) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container className="m-4">
                <Card key={athlete._id}>
                    <Card.Header className='bg-info bg-opacity-25'>
                        { athlete.fullTitle }  <SportIcon sport={ athlete.sport } />
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>Position: { athlete.position }</small><br />
                            <small>Jersey Number: { athlete.jerseyNumber }</small><br />
                            {
                                athlete.active
                                ?
                                <small>Current Team: { athlete.currentTeam }</small>
                                :
                                <small>No longer playing</small>
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {
                            athlete.owner && user && athlete.owner._id === user._id
                            ?
                            <>
                                <Button
                                    className="m-2"
                                    variant="warning"
                                >
                                    Edit Athlete
                                </Button>
                                <Button 
                                    className="m-2"
                                    variant="danger"
                                >
                                    Remove Athlete
                                </Button>
                            </>
                            :
                            null
                        }
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

export default AthleteShow
// This form will be used by both AthleteCreate and AthleteUpdate
import { Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AthleteForm = (props) => {

    const { athlete, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center mt-3">
            <h3>{ heading }</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        placeholder="What is the athlete's name?"
                        id="name"
                        name="name"
                        value={ athlete.name }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Sport:</Form.Label>
                    <Form.Control 
                        placeholder="What sport do/did they play?"
                        id="sport"
                        name="sport"
                        value={ athlete.sport }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Position:</Form.Label>
                    <Form.Control 
                        placeholder="What is their position?"
                        id="position"
                        name="position"
                        value={ athlete.position }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Current Team:</Form.Label>
                    <Form.Control 
                        placeholder="Who is their current team, if still playing?"
                        id="currentTeam"
                        name="currentTeam"
                        value={ athlete.currentTeam }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Jersey Number:</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="What's their jersey number?"
                        id="jerseyNumber"
                        name="jerseyNumber"
                        value={ athlete.jerseyNumber }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Check 
                        label="Are they still playing?"
                        name="active"
                        defaultChecked={ athlete.active }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
                <Link to="/" className="btn btn-secondary">
                    Cancel
                </Link>
            </Form>
        </Container>
    )
}

export default AthleteForm
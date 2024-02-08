import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseball, faBasketball, faSoccerBall, faFootball, faHockeyPuck, faGolfBall } from '@fortawesome/free-solid-svg-icons'

const SportIcon = (props) => {
    const { sport } = props
    if (sport.toLowerCase() === 'baseball') {
        return <FontAwesomeIcon icon={faBaseball} />
    } else if (sport.toLowerCase() === 'basketball') {
        return <FontAwesomeIcon icon={faBasketball} />
    } else if (sport.toLowerCase() === 'soccer') {
        return <FontAwesomeIcon icon={faSoccerBall} />
    } else if (sport.toLowerCase() === 'football') {
        return <FontAwesomeIcon icon={faFootball} />
    } else if (sport.toLowerCase() === 'hockey') {
        return <FontAwesomeIcon icon={faHockeyPuck} />
    } else if (sport.toLowerCase() === 'golf') {
        return <FontAwesomeIcon icon={faGolfBall} />
    } else {
        return <></>
    }
}

export default SportIcon
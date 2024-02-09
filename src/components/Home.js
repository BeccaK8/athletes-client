import AthleteIndex from "./athletes/AthleteIndex"

const Home = (props) => {
	const { msgAlert, user } = props

	return (
		<div className='container-md mt-2'>
			<h2 style={{ textAlign: 'center' }}>Athletes</h2>
			<AthleteIndex msgAlert={msgAlert} />
		</div>
	)
}

export default Home

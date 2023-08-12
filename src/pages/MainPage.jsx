import { useNavigate } from "react-router"
import Button from "../components/Button"

function MainPage() {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/editgame')
	}
	return (
		<div>
			<Button name='Edit Game' onClick={handleClick} />
		</div>
	)
}

export default MainPage
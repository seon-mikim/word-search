import { useNavigate } from "react-router"
import Button from "../components/Button"
import Description from "../components/DescriptionWrap"
import ButtonWrap from "../components/Button/ButtonWrap"

function MainPage() {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/editGame')
	}
	return (
		<div>
			<Description>Word Search Game 설정하러 갈까요? 🤔</Description>
			<ButtonWrap>
				<Button name='Edit Game' onClick={handleClick} />
			</ButtonWrap>
		</div>
	)
}

export default MainPage
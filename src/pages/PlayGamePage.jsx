import { useLocation } from "react-router"

function PlayGamePage() {
	const {data : getSettingData} = useLocation().state
	console.log(getSettingData)
	return (
		<div>
			<div>{getSettingData.title }</div>
			<div>{getSettingData.description }</div>
			<div>{ getSettingData.word}</div>
		</div>
	)
}

export default PlayGamePage
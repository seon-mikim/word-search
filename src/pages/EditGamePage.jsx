import { Form } from "react-router-dom"
import Input from "../components/Input"
import Textarea from "../components/Textarea"
import Wrap from "../components/Button/ButtonWrap"


function EditGamePage() {
	return (
		<Wrap>
			<div>
			EditGamePage
			</div>
			<Form>
				<Input />
				<Textarea/>
				<Input/>
				<Input/>
				<Input/>
				<Input/>
				<Input/>
				<Input/>
				<Input/>
				<Input/>
				<Input/>
			</Form>
		</Wrap>
	)
}

export default EditGamePage
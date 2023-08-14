import { Form } from "react-router-dom"
import Input from "../components/Input"
import Wrap from "../components/Button/ButtonWrap"
import InputWrap from "../components/Input/InputWrap"
import Label from "../components/Label"
import { useState } from "react"
import Button from "../components/Button"
import Textarea from "../components/Textarea"
import initialEdit from "../constants/initialEdit"
import Description from "../components/DescriptionWrap"
import TextareaWrap from "../components/Textarea/TextareaWrap"
import { getDatabase, ref, push } from "firebase/database";

function EditGamePage() {
	const [settingWord, setSettingWord] = useState(initialEdit)
	const handleSubmit = (event) => {
		event.preventDefault()
		writeUserData(settingWord)
	}
	const handleChange = (event) => {
		const { name, value } = event.target
		setSettingWord({...settingWord, [name]:value})
	}

	const writeUserData = (word)=> {
  const db = getDatabase();
  push(ref(db, 'word/' ), {
  word
  });
}


	return (
		<Wrap>
			<Description>
				제목과 설명 그리고 단어 10개를 입력해주세요
			</Description>
			<Form onSubmit={handleSubmit}>
				<div onChange={handleChange }>
				<InputWrap>
					<Label>title</Label>
					<Input  name='title'/>
				</InputWrap>
				<TextareaWrap>
					<Label>description</Label>
					<Textarea name='description'/>
				</TextareaWrap>	
				<InputWrap>
					<Label>firstWord</Label>
					<Input name='firstWord'/>
				</InputWrap>
				<InputWrap>
					<Label>secondWord</Label>
					<Input name='secondWord'/>
				</InputWrap>
				<InputWrap>
					<Label>thirdWord</Label>
					<Input name='thirdWord'/>
				</InputWrap>
					<InputWrap>
					<Label >fourthWord</Label>
				<Input name='fourthWord'/>
				</InputWrap>
				<InputWrap>
					<Label>fifthWord</Label>
					<Input name='fifthWord'/>
				</InputWrap>
				<InputWrap>
					<Label>sixthWord</Label>
					<Input name='sixthWord'/>
				</InputWrap>
				<InputWrap>
					<Label>seventhWord</Label>
					<Input name='seventhWord'/>
				</InputWrap>
				<InputWrap>
					<Label>eighthWord</Label>
					<Input name='eighthWord'/>
				</InputWrap>
				<InputWrap>
					<Label>ninthWord</Label>
				<Input name='ninthWord'/>
				</InputWrap>
				<InputWrap>
					<Label>tenthWord</Label>
					<Input name='tenthWord'/>
				</InputWrap>
				</div>
				<Button name='edit'/>
			</Form>
		</Wrap>
	)
}

export default EditGamePage
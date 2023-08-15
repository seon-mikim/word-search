import { Form, useNavigate } from "react-router-dom"
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
import {database} from '../../firebase'
import { push, ref } from "firebase/database"


function EditGamePage() {
	const [settingWord, setSettingWord] = useState(initialEdit)
	const navigate = useNavigate()
	
	const handleClick = () => {
		navigate('/selectGame')
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		push(ref(database, 'word/'), 
		settingWord	
		)
    
		handleClick()
	}
	const handleChange = (event) => {
		const { name, value } = event.target
		if(value === '') return 
		setSettingWord({...settingWord, [name]:value})
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
					<Input  name='title'placeholder='단어의 카테고리를 제목으로 적어주세요'/>
				</InputWrap>
				<TextareaWrap>
					<Label>description</Label>
					<Textarea name='description' placeholder='설명을 적어주세요'/>
				</TextareaWrap>	
				<InputWrap>
					<Label>word</Label>
					<Input name='word'placeholder='단어 10개를 , 포함해서 적어주세요'/>
				</InputWrap>
				</div>
				<Button name='edit'/>
			</Form>
		</Wrap>
	)
}

export default EditGamePage
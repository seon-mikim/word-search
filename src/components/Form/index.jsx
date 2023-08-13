import * as S from './style'

function Form({children,...props}) {
	return (
		<S.Form {...props}>{ children }</S.Form>
	)
}

export default Form
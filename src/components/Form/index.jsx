function Form({children,...props}) {
	return (
		<form {...props}>{ children }</form>
	)
}

export default Form
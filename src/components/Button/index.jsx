function Button({ name,...props }) {
	return (
		<button {...props}>{name}</button>
	)
}

export default Button
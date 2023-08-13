import * as S from './style'
function Button({ name, ...props }) {
	return (
		<S.Button {...props}>{name}</S.Button>
	)
}

export default Button
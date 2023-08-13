import styled from 'styled-components'

export const Button = styled.button`
	border: 1px solid transparent;
	background-color: ${props => props.theme.palette.skyBlue};
	color: #fff;
	width: 200px;
	height: 50px;
	font-size: 18px;
	border-radius: 4px;
	font-weight: 700;
`
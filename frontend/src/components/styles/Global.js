import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html{
		scroll-behavior: smooth;
	}

	body{
		font-size: 100%;
		font-family: ${({theme}) => theme.font.montserrat}
		width: 400px;
		height: 700px;
		background-color: ${({theme}) => theme.backgroundColor.darkblue};
		color: ${({ theme }) => theme.color.light};
		border: solid;
		border-color: ${({theme}) => theme.backgroundColor.darkblue};
		border-radius: 20px;
		padding: 30px 50px 0px 30px;
	}

	img{
		object-fit: cover;
	}

	li{
		list-style: none;
	}

	a{
		text-decoration: none;
		color: inherit;
	}

	section,
	footer{
		padding: 4.32875rem 5rem 7.16125rem 5rem;
	}
`;

export default GlobalStyle;
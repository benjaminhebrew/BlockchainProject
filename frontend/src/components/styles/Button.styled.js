import styled from "styled-components";

export const StyledButton = styled.div`
	font-size: 1.125rem;
	letter-spacing: 0.1875rem;
	font-weight: 400;
	transition: 0.3s ease;
	text-transform: uppercase;
	padding: 0.8rem 1.5rem;
	background: ${({ theme }) => theme.backgroundColor.blue};
	color: ${({ theme }) => theme.color.light};
	transition: 0.3s ease;
	position: relative;
	overflow: hidden;
	float: right;
	border-radius: 10px;

	&::before,
	&::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	& span {
		display: flex;
		align-items: center;
		gap: 1rem;
		position: relative;
	}

	& > span {
		overflow: hidden;
	}

	& > span > span {
		overflow: hidden;
	}

	&:hover > span > span {
		animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
	}

	@keyframes MoveUpInitial {
	to {
		transform: translate3d(0, -105%, 0);
	}
	}

	@keyframes MoveUpEnd {
	from {
		transform: translate3d(0, 100%, 0);
	}
	to {
		transform: translate3d(0, 0, 0);
	}
	}

	&::before {
		content: "";
		background: ${({ theme }) => theme.backgroundColor.lightblue};
		color: ${({ theme }) => theme.color.light};
		transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
		transform-origin: 100% 50%;
	}

	&:hover::before {
		transform: scale3d(0, 1, 1);
		transform-origin: 0% 50%;
	}
`;

export const StyledConnectButton = styled.div`
	font-size: 1.125rem;
	letter-spacing: 0.1875rem;
	font-weight: 400;
	transition: 0.3s ease;
	text-transform: uppercase;
	padding: 0.8rem 1.5rem;
	background: ${({ theme }) => theme.backgroundColor.lightblue};
	color: ${({ theme }) => theme.color.light};
	transition: 0.3s ease;
	position: relative;
	overflow: hidden;
	float: right;
	border-radius: 10px;

	&::before,
	&::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	& span {
		display: flex;
		align-items: center;
		gap: 1rem;
		position: relative;
	}

	& > span {
		overflow: hidden;
	}

	& > span > span {
		overflow: hidden;
	}

	&:hover > span > span {
		animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
	}

	@keyframes MoveUpInitial {
	to {
		transform: translate3d(0, -105%, 0);
	}
	}

	@keyframes MoveUpEnd {
	from {
		transform: translate3d(0, 100%, 0);
	}
	to {
		transform: translate3d(0, 0, 0);
	}
	}

	&::before {
		content: "";
		background: ${({ theme }) => theme.backgroundColor.blue};
		color: ${({ theme }) => theme.color.dark};
		transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
		transform-origin: 100% 50%;
	}

	&:hover::before {
		transform: scale3d(0, 1, 1);
		transform-origin: 0% 50%;
	}
`;
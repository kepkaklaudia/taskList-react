import styled, { css } from "styled-components";

export const List = styled.ul`
	padding: 15px;
	list-style-type: none;
`;

export const Item = styled.li`
	display: grid;
	grid-template-columns: auto 1fr auto;
	margin: 10px;
	border-bottom: solid 1px hsl(0, 0%, 94%);
	align-items: center;

	${({hidden}) => hidden && css`
		display: none;
	`}
`;

export const Content = styled.span`
  margin: 10px;

	${({done}) => done && css`
		text-decoration: line-through;
	`}
`;

export const Button = styled.button`
	color: hsl(0, 0%, 100%);
	background-color: hsl(348, 83%, 47%);
	width: 30px;
	height: 30px;
	padding: 2px;
	border: none;
	margin: 0;
	transition: 0.5s;

	${({done}) => done && css`
		background-color: hsl(120, 61%, 34%);

			&:hover{
				background-color: hsl(120, 61%, 39%);
 				cursor: pointer;
			}

			&:active{
				 background-color: hsl(120, 61%, 44%);
			}
	`}

	${({remove}) => remove && css`
			&:hover{
				background-color: hsl(348, 83%, 52%);
				cursor: pointer;
			}

			&:active{
				background-color: hsl(348, 83%, 57%);
			}
	`}
`;


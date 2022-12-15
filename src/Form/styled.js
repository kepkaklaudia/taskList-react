import styled from "styled-components";

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 15px;

  @media screen and (max-width: 550px) {
    grid-template-columns: auto;
    grid-gap: 15px;
  }
`;

export const Input = styled.input`
  border: solid 2px hsl(0, 0%, 94%);
  padding: 10px;

  &:focus{
    border: solid 2px hsl(0, 0%, 100%);
    outline: solid 1px hsl(0, 0%, 0%);
  }

  @media screen and (max-width: 550px) {
    &:focus{
      border: solid 2px hsl(0, 0%, 100%);
      outline: solid 1px hsl(22, 100%, 56%);
    }
  }
`;

export const Button = styled.button`
  color: white;
  background-color: hsl(180, 100%, 25%);
  border: none;
  padding: 10px;
  font-weight: 300;
  transition: 0.5s;

  &:hover{
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
    cursor: pointer;
  }

  &:active{
    background-color: hsl(180, 100%, 35%);
  }

  @media screen and (max-width: 550px) {
    &:hover{
      transform: scale(1.05);
    }
  }
`;
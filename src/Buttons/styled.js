import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;

  @media screen and (max-width: 550px) {
    display: grid;
    grid-gap: 15px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: hsl(180, 100%, 25%);
  transition: 0.5s;

  &:hover{
    color: hsl(180, 100%, 30%);
    cursor: pointer;
  }

  &:active{
    color: hsl(180, 100%, 35%);
  }

  &:disabled{
    color: hsla(0, 0%, 49%, 0.389);
  }
`;
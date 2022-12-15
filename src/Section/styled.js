import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: hsl(0, 0%, 100%);
  min-height: 120px;
  box-shadow: 0 0 5px hsl(0, 0%, 94%);
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-bottom: solid 1px hsl(0, 0%, 94%);

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  padding: 20px;
  margin: 0;
`;
import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightgray;
  box-sizing: border-box;
  /* display: grid;
  grid-template-columns: 3fr 4fr;
  align-items: center;
  justify-items: self-start; */
  display: flex;
  align-items: center;
  padding: 15px;

  .header-hogwarts-logo {
    height: 80px;
    width: auto;
  }

  .header-title {
    margin-left: 20px;
    text-align: center;
    font-size: 36px;
    color: black;
    font-weight: bold;
  }
`;

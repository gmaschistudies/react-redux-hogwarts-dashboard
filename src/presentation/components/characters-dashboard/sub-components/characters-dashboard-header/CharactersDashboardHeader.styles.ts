import styled from 'styled-components';

export const StyledCharactersDashboardHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: darkgreen;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  h2,
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 160px;
  box-sizing: border-box;
  background-color: darkorange;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 28px;
    font-weight: bold;
    padding: 4px;
    margin: 4px;
  }
`;

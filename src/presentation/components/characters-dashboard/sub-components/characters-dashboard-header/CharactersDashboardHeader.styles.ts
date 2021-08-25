import styled from 'styled-components';

export const StyledCharactersDashboardHeader = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: self-end;
  justify-items: self-start;
  border-top: 1px dashed white;

  h2,
  h3 {
    font-size: 20px;
    font-weight: bold;
  }

  @media (max-width: 500px) {
    height: 100px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 5px;
  margin: 5px;
  border-top: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 28px;
    font-weight: bold;
    padding: 4px;
    margin: 4px;
  }

  @media (max-width: 500px) {
    height: 160px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }
`;

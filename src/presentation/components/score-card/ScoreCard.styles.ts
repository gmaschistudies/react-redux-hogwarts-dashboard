import styled from 'styled-components';

export const StyledScoreCard = styled.div`
  width: 250px;
  height: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 4px solid black;
  border-radius: 10px;
  margin: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  color: black;

  .score-card-title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }

  .score-card-image {
    height: 70%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 5px;
  }

  .score-card-score {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
`;

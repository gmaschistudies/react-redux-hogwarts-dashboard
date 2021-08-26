import styled from 'styled-components';

export const StyledScoreChanger = styled.div`
  .character-modal-details-input {
    width: 200px;
    height: 36px;
    padding: 5px;
    margin: 10px 5px;
    font-size: 18px;
    box-sizing: border-box;
  }

  .character-modal-details-buttons-container {
    margin-top: 10px;

    .character-modal-details-button {
      width: 80px;
      height: 40px;
      font-size: 18px;
      font-weight: bold;
      padding: 4px;
      margin: 0 10px;
      cursor: pointer;
      border-radius: 5px;
      border: 2px solid gray;
      transition: 1s;
    }

    .gain-button {
      background-color: lightgreen;

      &:hover {
        background-color: green;
      }
    }

    .lose-button {
      background-color: lightcoral;

      &:hover {
        background-color: red;
      }
    }

    .done-button {
      margin-top: 15px;
      background-color: black;
      color: white;

      &:hover {
        background-color: darkgray;
      }
    }

    .character-modal-details-results-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .character-modal-details-results-score {
        font-size: 36px;
        font-weight: bold;
      }
      .positive-result {
        color: green;
      }

      .negative-result {
        color: red;
      }
    }
  }
`;

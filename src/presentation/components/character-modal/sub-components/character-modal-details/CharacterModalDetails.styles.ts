import styled from 'styled-components';

export const StyledCharacterModalDetails = styled.div`
  width: 225px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: black;

  .character-modal-details-house-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    .character-modal-details-image {
      height: 70%;
      max-width: 100%;
      overflow: auto;
    }

    .character-modal-details-house-name {
      font-size: 22px;
      margin-left: 10px;
    }
  }

  .character-modal-details-character-name {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0px;
    line-height: 36px;
  }

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
        font-size: 32px;
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

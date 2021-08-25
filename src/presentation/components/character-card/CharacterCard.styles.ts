import styled from 'styled-components';

export const StyledCharacterCard = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background-color: #333;
  border-top: 2px solid white;
  padding: 5px 15px;
  margin: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  justify-items: self-start;

  .character-card-button {
    justify-self: self-end;
    cursor: pointer;
  }

  .character-card-image {
    height: 35px;
    width: auto;
  }

  @media (max-width: 500px) {
    height: 140px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 2fr;
    justify-items: center;

    .character-card-button {
      justify-self: center;
    }

    .character-card-name {
      width: 100%;
      text-align: center;
    }
  }
`;

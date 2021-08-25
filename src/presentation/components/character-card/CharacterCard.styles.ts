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

  .character-card-img {
    justify-self: self-end;
  }
`;

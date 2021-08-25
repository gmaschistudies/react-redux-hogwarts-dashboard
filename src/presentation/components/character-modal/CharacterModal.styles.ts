import styled from 'styled-components';

export const StyledCharacterModal = styled.div`
  width: 450px;
  height: 450px;
  box-sizing: border-box;
  z-index: 20;
  position: fixed;
  top: calc(50% - 225px);
  left: calc(50% - 225px);
  background-color: rgb(230, 240, 240);
  padding: 10px;
  display: flex;
  align-items: center;

  .character-modal-character-image {
    max-width: 225px;
    height: 90%;
    box-sizing: border-box;
    color: black;
  }
`;

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
`;

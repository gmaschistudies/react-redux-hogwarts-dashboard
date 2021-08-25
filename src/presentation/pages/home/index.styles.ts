import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  border: 2px solid white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMainContentContainer = styled.div`
  min-height: calc(100vh - 100px);
  max-width: 1200px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  border: 4px solid white;
  border-radius: 10px;
  margin: 20px;
`;

export const StyledScoreCardContainer = styled.div`
  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

// export const StyledCharactersCardContainer = styled.div`
//   min-height: 600px;
//   width: 100%;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 10px;
// `;

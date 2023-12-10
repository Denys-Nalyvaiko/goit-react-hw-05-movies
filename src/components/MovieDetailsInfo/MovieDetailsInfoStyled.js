import styled from 'styled-components';

export const MovieDetailsSectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const MovieDetailsImageContainer = styled.div`
  padding: 16px;
  border: 2px solid #fafafa;
  border-radius: 10px;

  -webkit-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
  -moz-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
  box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
`;

export const MovieDetailsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 400px;
  padding: 16px;
  border: 2px solid #fafafa;
  border-radius: 10px;

  -webkit-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
  -moz-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
  box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
`;

export const MovieDetailsTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
  align-self: center;
`;

export const MovieDetailedSubInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MovieDetailsGenresList = styled.ul`
  display: flex;
  gap: 16px;
`;

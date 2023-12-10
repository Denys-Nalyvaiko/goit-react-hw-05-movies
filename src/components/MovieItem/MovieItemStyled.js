import styled from 'styled-components';

export const MovieItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 14px;
  border: 2px solid #fafafa;
  border-radius: 10px;
  max-width: 278px;

  -webkit-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
  -moz-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
  box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
`;

export const MovieTitle = styled.h3`
  margin-top: 16px;
  text-align: center;
`;

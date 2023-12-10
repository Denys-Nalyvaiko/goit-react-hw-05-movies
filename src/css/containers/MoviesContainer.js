import styled from 'styled-components';

export const MoviesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const MoviesForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const MoviesInput = styled.input`
  padding: 8px 12px;
  font-size: 18px;
  color: #fafafa;
  background-color: transparent;
  border: 2px solid #fafafa;
  border-radius: 8px;
  width: 280px;
`;

export const MoviesSubmitButton = styled.button`
  padding: 8px 20px;
  font-size: 18px;
  color: #252525;
  background-color: #fafafa;
  border: 2px solid #252525;
  transition: color 250ms ease-in-out 50ms,
    background-color 250ms ease-in-out 50ms, border-color 250ms ease-in-out 50ms;

  &:hover {
    color: #fafafa;
    background-color: transparent;
    border-color: #fafafa;
  }

  &:focus {
    color: #fafafa;
    background-color: transparent;
    border-color: #fafafa;
  }
`;

import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ReviewsTitle = styled.h3`
  font-size: 20px;
`;

export const ReviewsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const ReviewsItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 12px;
  border: 2px solid #fafafa;
  border-radius: 10px;

  -webkit-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
  -moz-box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 1);
  box-shadow: 3px 7px 18px -4px rgba(250, 250, 250, 0.2);
`;

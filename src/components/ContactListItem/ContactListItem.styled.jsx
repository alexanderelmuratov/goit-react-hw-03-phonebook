import styled from 'styled-components';

export const ContactSetUnit = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactInfo = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const DeleteButton = styled.button`
  width: 80px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #ffffff;
  background-color: gray;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #000000;
    background-color: transparent;
  }
`;

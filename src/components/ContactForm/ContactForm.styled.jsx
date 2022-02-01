import styled from 'styled-components';

export const Form = styled.form`
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 3px dotted #757575;
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const FormButton = styled.button`
  width: 120px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: 16px;
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

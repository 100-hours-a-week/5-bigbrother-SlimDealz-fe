import styled from 'styled-components';

export const CustomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 200px);
  text-align: center;
`;

export const CustomButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

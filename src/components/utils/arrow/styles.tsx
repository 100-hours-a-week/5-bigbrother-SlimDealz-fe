import styled from 'styled-components';

export const ArrowButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 100;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s;
  opacity: 0;
  border-radius: 50%;
  margin-right: 10px;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

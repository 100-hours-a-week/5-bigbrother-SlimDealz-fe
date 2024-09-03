import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - 120px);
`;

export const Section = styled.div`
  padding: 15px;
  width: 100%;
  text-align: center;
  flex-grow: 1;
`;

export const Description = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
  line-height: 30px;
  padding-bottom: 100px;
`;

export const KakaoButton = styled.button`
  background-color: #fee500;
  color: #000000;
  padding: 10px;
  width: 100%;
  border: 2px solid #ffde00;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 8px;
  }

  &:hover {
    background-color: #ffde00;
  }
`;

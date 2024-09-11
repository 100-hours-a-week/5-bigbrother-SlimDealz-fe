import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
  cursor: pointer;
`;

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

export const ArrowIcon = styled.div`
  font-size: 35px;
  color: #808080;
`;

export const LogoutButtonContainer = styled.div`
  padding-top: 10px;
  border-top: 1px solid #e0e0e0;
`;

export const LogoutButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 20px 0;
  color: #808080;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

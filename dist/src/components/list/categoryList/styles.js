import styled from 'styled-components';
export const Container = styled.div `
  display: flex;
  background-color: var(--background-color);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
export const ImageContainer = styled.div `
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background-color: #e6e6e6;
  border-radius: 10px;
`;
export const InfoContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  flex-grow: 1;
`;
export const PriceContainer = styled.div `
  margin-top: 10px;
`;
export const PriceText = styled.div `
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;
export const SmallText = styled.div `
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;
export const BookmarkContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`;
export const RatingWrapper = styled.div `
  display: flex;
  align-items: center;
  flex-grow: 1;
`;
export const BookmarkCountWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const BookmarkCount = styled.div `
  font-size: 16px;
  color: #000;
  text-align: left;
  width: 40px;
  white-space: nowrap;
`;

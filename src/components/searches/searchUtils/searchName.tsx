import { styled } from 'styled-components';

type Props = {
  searchName: string;
};

const SearchName = ({ searchName }: Props) => {
  return (
    <SearchNameContainer>
      <NameTextContainer>{searchName}</NameTextContainer>
    </SearchNameContainer>
  );
};

export default SearchName;

const SearchNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: auto;
`;

const NameTextContainer = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

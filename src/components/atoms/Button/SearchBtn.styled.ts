import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    background: transparent;
    color: inherit;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    cursor: pointer;
    width:100%;
    height:2.5em;

`;

const SearchBtn = styled(Button)`
  background: #7f8ff4;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
  border-radius: 2px;
  padding: 12px 36px;
  margin-left:-5em;
  width:initial;
  height:initial;

  &:hover {
    background: #8a8ff0
  }

  &:active {
    background: #8a8ff0;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
  }
`;

export default SearchBtn;

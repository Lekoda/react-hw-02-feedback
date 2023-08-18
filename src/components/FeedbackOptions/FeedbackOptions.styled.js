import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Button = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-align: center;
  background-color: #ffff;
  color: #537a8f;
  transition: all 300ms;
  font-size: bold;
  :hover,
  :focus {
    background-color: #94969c;
    color: white;
  }
`;

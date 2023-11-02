import styled from "styled-components";


export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
	color: black;
  &:hover {
    background-color: #f0f0f0;
  }
`;
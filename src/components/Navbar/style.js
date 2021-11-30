import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: #5FDD9D;
	height: 85px;
	display: flex;
	justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const Logo = styled.h1`
  color: #fff;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: right;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

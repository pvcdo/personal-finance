import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: #B2FF9E;
	height: 85px;
	display: flex;
	justify-content: space-between;
	/*padding: 0.2rem calc((100vw - 1000px) / 2);*/
	/*justify-content: flex-end;*/
`;

export const Logo = styled.h2`
  color: #fff;
  margin-left: 20px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: right;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
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

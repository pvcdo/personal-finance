import styled from 'styled-components';

export const Nav = styled.nav`
	background: #63D471;
	height: 85px;
	display: flex;
	justify-content: space-between;
	padding: 0.2rem calc((100vw - 1000px) / 2);
	z-index: 12;
	/* Third Nav */
	/* justify-content: flex-start; */
`;

export const ListNav = styled.ul`
	display: flex;
`;

export const ItemListNav = styled.li`
	margin-left: 40px;
`;
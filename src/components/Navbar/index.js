import React from 'react';
import {Nav,NavMenu,NavLink, Logo} from './style';
import {Button} from 'react-bootstrap'

const Navbar = () => {
return (
	<>
	<Nav>
		<Logo>Logo</Logo>
		<NavMenu>
			<NavLink to='/painel' activeStyle>
				Painel
			</NavLink>
			<NavLink to='/novogasto' activeStyle>
				Novo gasto
			</NavLink>
			<NavLink to='/historico' activeStyle>
				Historico
			</NavLink>
			<NavLink to='/' activeStyle>
				<Button variant="outline-light">
					Sair
				</Button>
			</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

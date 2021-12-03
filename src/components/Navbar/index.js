import React from 'react';
import {Nav,NavMenu,NavLink, Logo} from './style';
import {Button} from 'react-bootstrap'

const Navbar = () => {
return (
	<>
	<Nav>
		<Logo>Logo</Logo>
		<NavMenu>
			<NavLink to='/painel'>
				Painel
			</NavLink>
			<NavLink to='/novogasto'>
				Novo gasto
			</NavLink>
			<NavLink to='/historico'>
				Historico
			</NavLink>
			<NavLink to='/'>
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

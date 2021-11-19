import React from 'react';
import {Nav,NavMenu,NavLink} from './style';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
			<NavLink to='/' activeStyle>
				Painel
			</NavLink>
			<NavLink to='/novogasto' activeStyle>
				Novo gasto
			</NavLink>
			<NavLink to='/historico' activeStyle>
				Historico
			</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

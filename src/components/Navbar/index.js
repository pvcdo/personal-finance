import React from 'react';
import {Nav,NavMenu,NavLink, Logo} from './style';

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
				<button>
					Sair
				</button>
			</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

import React from 'react';
import {Nav,ListNav,ItemListNav} from './style';

const Navbar = () => {
return (
	<>
	<Nav>
		<ListNav>
			<ItemListNav>
				Primeiro
			</ItemListNav>
			<ItemListNav>
				Segundo
			</ItemListNav>
			<ItemListNav>
				Terceiro
			</ItemListNav>
		</ListNav>
	</Nav>
	</>
);
};

export default Navbar;

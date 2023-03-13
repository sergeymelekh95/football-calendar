import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface IHeader {}

export const Header: React.FC<IHeader> = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Football calendar
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

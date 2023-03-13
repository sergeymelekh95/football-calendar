import React, { memo } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '../Container';

export const Header: React.FC = memo(() => {
	return (
		<AppBar position='static'>
			<Container>
				<Toolbar style={{ padding: 0 }}>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Football calendar
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
});

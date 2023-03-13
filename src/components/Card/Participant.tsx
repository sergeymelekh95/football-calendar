import { CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface IParticipant {
	logo: string;
	logoId: number;
	name: string;
}

export const Participant: React.FC<IParticipant> = ({ logo, logoId, name }) => {
	return (
		<Box
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				flexDirection: 'column',
				maxWidth: 50,
			}}
		>
			<CardMedia
				sx={{ width: 50, height: 50, marginBottom: 2 }}
				component='img'
				image={`${process.env.REACT_APP_BASE_URL}/img/logos/${logo}-middle.png?logoId=${logoId}`}
				title='green iguana'
			/>
			<Typography sx={{ fontSize: 12 }}>{name}</Typography>
		</Box>
	);
};

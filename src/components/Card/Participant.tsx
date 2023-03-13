import { CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { memo } from 'react';

interface IParticipant {
	logo: string;
	logoId: number;
	name: string;
}

const StyledParticipant = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	width: '75px',
});

export const Participant: React.FC<IParticipant> = memo(
	({ logo, logoId, name }) => {
		return (
			<StyledParticipant>
				<CardMedia
					sx={{ width: 50, height: 50, marginBottom: 2 }}
					component='img'
					image={`${process.env.REACT_APP_BASE_URL}/img/logos/${logo}-middle.png?logoId=${logoId}`}
					title='green iguana'
				/>
				<Typography sx={{ fontSize: 12 }}>{name}</Typography>
			</StyledParticipant>
		);
	}
);

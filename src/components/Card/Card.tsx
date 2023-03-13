import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, styled } from '@mui/system';
import { addZero } from '../../helpers';
import { useDate } from '../../hooks/useDate';
import { Item } from '../../models';
import { Participant } from './Participant';
import { CSSProperties } from '@mui/styled-engine';

interface IMyCard {
	item: Item;
}

const StyledBox = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

const StyledCenteredBox = styled('div')({
	textAlign: 'center',
});

const cardStyles: CSSProperties = {
	padding: 1,
	minHeight: '201px',
	display: 'flex',
	justifyContent: 'space-between',
	flexDirection: 'column',
};

export const MyCard: React.FC<IMyCard> = ({ item }) => {
	const {
		tourNumber,
		teamHome,
		teamAway,
		date: isoDate,
		champ,
		stadium,
		scoreFtHome,
		scoreFtAway,
	} = item;

	const matchDate: Date = new Date(isoDate);

	const { year, month, day, minutes, hours } = useDate(matchDate);

	return (
		<Card sx={cardStyles}>
			<Box sx={{ mb: 1.5 }}>
				<Typography sx={{ fontSize: 12 }} color='text.primary'>
					{`${champ.name}`}
					<ArrowForwardIosIcon sx={{ fontSize: 8, margin: '0 8px' }} />
					{`Номер турнира: ${tourNumber}`}
				</Typography>
			</Box>
			<StyledCenteredBox>
				<Typography sx={{ fontSize: 14 }} color='text.secondary'>
					{addZero(day)}.{addZero(month)}.{year} {addZero(hours)}:
					{addZero(minutes)}
				</Typography>
			</StyledCenteredBox>
			<StyledBox>
				<Participant
					logo={teamHome.logo}
					logoId={teamHome.logoId}
					name={teamHome.name}
				/>
				<StyledCenteredBox>
					<Typography
						sx={{ fontSize: 32 }}
					>{`${scoreFtHome} - ${scoreFtAway}`}</Typography>
					<Typography sx={{ fontSize: 12 }}>Завершен</Typography>
				</StyledCenteredBox>
				<Participant
					logo={teamAway.logo}
					logoId={teamAway.logoId}
					name={teamAway.name}
				/>
			</StyledBox>
			<StyledCenteredBox>
				<Typography
					sx={{ fontSize: 12 }}
					color='text.secondary'
				>{`Название стадиона - ${
					stadium?.name ? stadium.name : 'неизвестно'
				}`}</Typography>
			</StyledCenteredBox>
		</Card>
	);
};

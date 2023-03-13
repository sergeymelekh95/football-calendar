import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import * as React from 'react';
import { addZero } from '../../helpers';
import { useDate } from '../../hooks/useDate';
import { Item } from '../../models';
import { Participant } from './Participant';

interface IMyCard {
	item: Item;
}

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
		<Card sx={{ padding: 1 }}>
			<Box sx={{ marginBottom: 1.5 }}>
				<Typography sx={{ fontSize: 12 }} color='text.primary'>
					{`${champ.name}`}
					<ArrowForwardIosIcon sx={{ fontSize: 8, margin: '0 8px' }} />
					{`Номер турнира: ${tourNumber}`}
				</Typography>
			</Box>
			<Box style={{ textAlign: 'center' }}>
				<Typography sx={{ fontSize: 14 }} color='text.secondary'>
					{addZero(day)}.{addZero(month)}.{year} {addZero(hours)}:
					{addZero(minutes)}
				</Typography>
			</Box>
			<Box
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Participant
					logo={teamHome.logo}
					logoId={teamHome.logoId}
					name={teamHome.name}
				/>
				<Box style={{ textAlign: 'center' }}>
					<Typography
						sx={{ fontSize: 32 }}
					>{`${scoreFtHome} - ${scoreFtAway}`}</Typography>
					<Typography sx={{ fontSize: 12 }}>Завершен</Typography>
				</Box>
				<Participant
					logo={teamAway.logo}
					logoId={teamAway.logoId}
					name={teamAway.name}
				/>
			</Box>
		</Card>
	);
};

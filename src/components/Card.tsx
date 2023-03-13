import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { Item } from '../models';
import { Box } from '@mui/system';
import { addZero } from '../helpers';
import { styled } from '@mui/material/styles';

const ImgStyled = styled(CardMedia)(({ theme }) => ({
	...theme.typography.body2,
	width: 70,
	height: 70,
}));

interface IMyCard {
	item: Item;
}

export const MyCard: React.FC<IMyCard> = ({ item }) => {
	const { tourNumber, teamHome, teamAway, date: isoDate } = item;

	const date = new Date(isoDate);
	const year: number = date.getFullYear();
	const month: number = date.getMonth() + 1;
	const day: number = date.getDay();
	const hours: number = date.getHours();
	const minutes: number = date.getMinutes();

	console.log(date);

	return (
		<Card>
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
				<ImgStyled
					image={`https://footballista.ru/api/img/logos/${teamHome.logo}-middle.png?logoId=${teamHome.logoId}`}
				/>
				<Box style={{ textAlign: 'center' }}>
					<Typography>-</Typography>
				</Box>
				<ImgStyled
					image={`https://footballista.ru/api/img/logos/${teamAway.logo}-middle.png?logoId=${teamAway.logoId}`}
					title='green iguana'
				/>
			</Box>
		</Card>
	);
};

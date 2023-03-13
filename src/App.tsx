import { Grid } from '@mui/material';
import React from 'react';
import { MyCard } from './components/Card';
import { Item } from './models';
import { useGetItemsQuery } from './store/footballCalendar/footballCalendar.api';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// const ItemStyled = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export const App: React.FC = () => {
	const {
		isError: isErrorItems,
		data: items,
		isFetching: isFetchingItems,
	} = useGetItemsQuery();

	console.log(items);

	return (
		<Grid container spacing={4}>
			{!isErrorItems &&
				items?.length &&
				items.map((item: Item) => (
					<Grid key={item._id} item xs={12} sm={6} md={4}>
						<MyCard item={item} />
					</Grid>
				))}
		</Grid>
	);
};

export default App;

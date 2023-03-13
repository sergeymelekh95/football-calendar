import { Container, Grid } from '@mui/material';
import React from 'react';
import { MyCard } from './components/Card/Card';
import { Item } from './models';
import { useGetItemsQuery } from './store/footballCalendar/footballCalendar.api';

export const App: React.FC = () => {
	const {
		isError: isErrorItems,
		data: items,
		isFetching: isFetchingItems,
	} = useGetItemsQuery();

	return (
		<Container>
			<Grid container spacing={4}>
				{!isErrorItems &&
					items?.length &&
					items.map((item: Item) => (
						<Grid key={item._id} item xs={12} sm={6} md={4}>
							<MyCard item={item} />
						</Grid>
					))}
			</Grid>
		</Container>
	);
};

export default App;

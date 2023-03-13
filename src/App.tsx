import { Container, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { MyCard } from './components/Card/Card';
import { Item } from './models';
import {
	useLazyGetItemsQuery,
} from './store/footballCalendar/footballCalendar.api';
import { useActions } from './hooks/useActions';
import { useAppSelector } from './hooks/redux';
import { limitItems } from './constants';

export const App: React.FC = () => {
	const [offset, setOffset] = useState<number>(0);
	const [disabled, setDisabled] = useState(false);
	const { items } = useAppSelector((state) => state.footballCalendar);
	const { setItems } = useActions();

	const [
		fetchItems,
		{ isFetching: isLazyFetchingItems, data, isError: isErrorItems },
	] = useLazyGetItemsQuery();

	const handleClick = () => {
		if (data && items.length < data.total) {
			setOffset(offset + limitItems);
		}
	};

	useEffect(() => {
		if (offset) {
			fetchItems(offset);
		}
	}, [offset]);

	useEffect(() => {
		console.log('render', data);
		if (data) {
			setItems(data.items);
		}
	}, [data]);

	useEffect(() => {
		if (items.length === data?.total) {
			setDisabled(true);
		}
	}, [items]);

	useEffect(() => {
		fetchItems(offset);
	}, []);

	return (
		<Container sx={{ paddingBottom: 4 }}>
			{!isErrorItems && items?.length && (
				<div>
					<Grid container spacing={4}>
						{items.map((item: Item) => (
							<Grid key={item._id} item xs={12} sm={6} md={4}>
								<MyCard item={item} />
							</Grid>
						))}
					</Grid>
					<Box sx={{ textAlign: 'center', marginTop: 4 }}>
						<LoadingButton
							disabled={disabled}
							loading={isLazyFetchingItems}
							onClick={handleClick}
							variant='contained'
						>
							Загрузить еще
						</LoadingButton>
					</Box>
				</div>
			)}
		</Container>
	);
};

export default App;

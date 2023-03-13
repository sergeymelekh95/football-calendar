import React, { useEffect, useState } from 'react';
import { Alert, Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';
import { Card } from './components/Card/Card';
import { useLazyGetItemsQuery } from './store/footballCalendar/footballCalendar.api';
import { useActions } from './hooks/useActions';
import { useAppSelector } from './hooks/redux';
import { limitItems } from './constants';
import { Header } from './components/Header/Header';
import { Container } from './components/Container';
import { Item } from './models';

export const App: React.FC = () => {
	const [offset, setOffset] = useState<number>(0);
	const [disabled, setDisabled] = useState<boolean>(false);
	const { items } = useAppSelector((state) => state.footballCalendar);
	const { setItems } = useActions();

	const [
		fetchItems,
		{ isFetching: isFetchingItems, data, isError: isErrorItems },
	] = useLazyGetItemsQuery();

	const handleClick = (): void => {
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
		<>
			<Header />
			{isFetchingItems && <LinearProgress color='success' />}
			{isErrorItems && (
				<Alert sx={{ mt: 2 }} severity='error'>
					Что-то пошло не так
				</Alert>
			)}
			<Container>
				{!isErrorItems && !!items?.length && (
					<Box sx={{ mb: 4 }}>
						<Grid container spacing={4} sx={{ mt: 2 }}>
							{items.map((item: Item) => (
								<Grid key={item._id} item xs={12} sm={6} md={4}>
									<Card item={item} />
								</Grid>
							))}
						</Grid>
						<Box sx={{ textAlign: 'center', mt: 4 }}>
							<LoadingButton
								disabled={disabled}
								loading={isFetchingItems}
								onClick={handleClick}
								variant='contained'
							>
								Загрузить еще
							</LoadingButton>
						</Box>
					</Box>
				)}
			</Container>
		</>
	);
};

export default App;

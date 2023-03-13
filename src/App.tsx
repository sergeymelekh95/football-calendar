import React, { useEffect, useState } from 'react';
import { Item } from './models';
import { useGetItemsQuery } from './store/footballCalendar/footballCalendar.api';

export const App = () => {
	const {
		isError: isErrorItems,
		data: items,
		isFetching: isFetchingItems,
	} = useGetItemsQuery();

	console.log(items);

	return <div className='App'>Hello calendar</div>;
};

export default App;

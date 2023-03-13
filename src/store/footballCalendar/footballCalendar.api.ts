import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Item, ServerResponseItems } from '../../models';

export const footballCalendarApi = createApi({
	reducerPath: 'footballCalendar/api',
	baseQuery: fetchBaseQuery({
		// https://footballista.ru/api/seasons/5099/calendar_paginated?limit=10&offset=0
		baseUrl: process.env.REACT_APP_BASE_URL,
	}),
	endpoints: (build) => ({
		getItems: build.query<Item[], void>({
			query: () => ({
				url: 'seasons/5099/calendar_paginated',
			}),
			transformResponse: (response: ServerResponseItems) => response.items,
		}),
	}),
});

export const { useGetItemsQuery } = footballCalendarApi;

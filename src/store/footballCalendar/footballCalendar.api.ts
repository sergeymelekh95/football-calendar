import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ServerResponseItems } from '../../models';

export const footballCalendarApi = createApi({
	reducerPath: 'footballCalendar/api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BASE_URL,
	}),
	endpoints: (build) => ({
		getItems: build.query<ServerResponseItems, number>({
			query: (offset: number) => ({
				url: 'seasons/5099/calendar_paginated',
				params: {
					limit: process.env.REACT_APP_LIMIT,
					offset,
				},
			}),
		}),
	}),
});

export const { useLazyGetItemsQuery } = footballCalendarApi;

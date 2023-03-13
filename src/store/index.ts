import { configureStore } from '@reduxjs/toolkit';
import { footballCalendarApi } from './footballCalendar/footballCalendar.api';
import { footballCalendarReducer } from './footballCalendar/footballCalendar.slice';

export const store = configureStore({
	reducer: {
		[footballCalendarApi.reducerPath]: footballCalendarApi.reducer,
		footballCalendar: footballCalendarReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(footballCalendarApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

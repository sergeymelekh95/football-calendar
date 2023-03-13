import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../models';

interface footballCalendarState {
	items: Item[];
}

const initialState: footballCalendarState = {
	items: [],
};

export const footballCalendarSlice = createSlice({
	name: 'footballCalendar',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<Item[]>) {
			state.items = [...state.items, ...action.payload];
		},
	},
});

export const footballCalendarActions = footballCalendarSlice.actions;
export const footballCalendarReducer = footballCalendarSlice.reducer;

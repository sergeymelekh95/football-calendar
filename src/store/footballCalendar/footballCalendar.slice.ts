import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../models';

interface footballCalendarState {
	// items: Item | [];
}

const initialState: footballCalendarState = {
	// items: [],
};

export const footballCalendarSlice = createSlice({
	name: 'footballCalendar',
	initialState,
	reducers: {
		// setFromState(state, action: PayloadAction<FieldData[]>) {
		// 	state.formState = action.payload;
		// },
	},
});

export const footballCalendarActions = footballCalendarSlice.actions;
export const footballCalendarReducer = footballCalendarSlice.reducer;

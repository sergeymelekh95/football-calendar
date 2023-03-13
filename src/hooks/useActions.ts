import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { footballCalendarActions } from '../store/footballCalendar/footballCalendar.slice';

const actions = {
	...footballCalendarActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};

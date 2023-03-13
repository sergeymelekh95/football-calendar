import React from 'react';
import { Container as MuiContainer } from '@mui/material';

interface IContainer {
	children: JSX.Element | boolean;
}

export const Container: React.FC<IContainer> = ({ children }) => {
	return <MuiContainer sx={{ paddingBottom: 4 }}>{children}</MuiContainer>;
};

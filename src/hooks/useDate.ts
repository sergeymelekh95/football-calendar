export const useDate = (date: Date) => {
	const year: number = date.getFullYear();
	const month: number = date.getMonth() + 1;
	const day: number = date.getDate();
	const hours: number = date.getHours();
	const minutes: number = date.getMinutes();

	return { year, month, day, hours, minutes };
};

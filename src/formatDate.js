export const format = () => {
	let date = new Date()
	const replaces = {
		yyyy: date.getFullYear(),
		mm: ('0' + (date.getMonth() + 1)).slice(-2),
		dd: ('0' + date.getDate()).slice(-2),
		hh: ('0' + date.getHours()).slice(-2),
		MM: ('0' + date.getMinutes()).slice(-2),
		ss: ('0' + date.getSeconds()).slice(-2)
	};
	return `${replaces.dd}.${replaces.mm}.${replaces.yyyy} ${replaces.hh}:${replaces.MM}:${replaces.ss}`;
};
import axios from "axios";

export function submitNewTicket(
	title,
	desc,
	created,
	deadline,
	type,
	productTitle
) {
	const parsedDeadlineDate = parseDeadlineDate(deadline);
	const isDateValid = dateValidation(parsedDeadlineDate);
	if (!isDateValid) {
		throw "Date is past ...";
	} else {
		console.log("Hello");
	}
}

function parseDeadlineDate(deadline) {
	//2024-01-28
	const splitDate = deadline.split("-");
	return {
		year: splitDate[0],
		month: splitDate[1],
		day: splitDate[2],
	};
}

function dateValidation(parsedDeadlineDate) {
	const date = new Date();

	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();

	const deadlineYear = parsedDeadlineDate.year;
	const deadlineMonth = parsedDeadlineDate.month;
	const deadlineDay = parsedDeadlineDate.day;

	if (deadlineYear > year) return true;
	else if (deadlineYear == year) {
		if (deadlineMonth > month) return true;
		else if (deadlineMonth == month) {
			return (deadlineDay >= day)
		} else return true;
	} else return false;
}

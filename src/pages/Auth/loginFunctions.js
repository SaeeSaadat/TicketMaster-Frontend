export function CheckEmptyInputs(username, password) {
	if (!username) {
		return "please enter your username ...";
	} else if (!password) {
		return "please enter your password ...";
	}
	return "";
}
export function StoreCurrentUserData(id, username, type, storeState) {
	storeState.personType = type;
	storeState.personId = id;
	storeState.personUsername = username;
}
export function HandleLoginError(error) {
	return "Something Went Wrong ...";
}

export function StoreCurrentUserData(id, username, type, storeState) {
	storeState.personType = type;
	storeState.personId = id;
	storeState.personUsername = username;
}
export function HandleLoginError(error) {
	return "Something Went Wrong ...";
}

export function StoreCurrentUserData(userId, username, role, store) {
	store.commit("setRole", role);
	store.commit("setUserId", userId);
	store.commit("setUsername", username);
}
export function HandleLoginError(error) {
	return "Something Went Wrong ...";
}

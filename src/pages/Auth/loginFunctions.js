export function SaveCurrentUserDataInLocalStorage(userId, username, role, productId) {
	localStorage.setItem("role", role);
	localStorage.setItem("userId", userId);
	localStorage.setItem("username", username);
	localStorage.setItem("productId", productId);
}
export function HandleLoginError(error) {
	return "Something Went Wrong ...";
}

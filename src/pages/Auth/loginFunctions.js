export function SaveCurrentUserDataInLocalStorage(userId, username, role, productId) {
	localstorage.setItem("setRole", role);
	localstorage.setItem("setUserId", userId);
	localstorage.setItem("setUsername", username);
	localstorage.setItem("setProductId", productId);
}
export function HandleLoginError(error) {
	return "Something Went Wrong ...";
}

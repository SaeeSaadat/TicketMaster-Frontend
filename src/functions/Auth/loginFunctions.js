import axios from "axios";

function HandleLogin(username, password, loading) {
	loading = true;
	axios
		.post("/auth/login", {
			username,
			password,
		})
		.then((res) => {
			SaveCurrentUserDataInLocalStorage(
				res.data.userId,
				res.data.username,
				res.data.role,
				res.data.productId
			);
		})
		.catch(() => {
			throw "Something Went Wrong ...";
		});
}

function SaveCurrentUserDataInLocalStorage(userId, username, role, productId) {
	localStorage.setItem("role", role);
	localStorage.setItem("userId", userId);
	localStorage.setItem("username", username);
	localStorage.setItem("productId", productId);
}

module.exports = HandleLogin;

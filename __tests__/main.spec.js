const { default: axios } = require("axios");
test("test Login", async () => {
	await axios
		.post("/auth/login", {
			username: "test",
			password: "test",
		})
		.catch((e) => {
			console.log(e);
		});
});
test("test Logout", () => {
	axios.get("/auth/logout").catch((e) => {
		console.log(e);
	});
});
test("test Signup", async () => {
	await axios
		.post("/auth/login", {
			username: "test",
			password: "test",
			repassword: "test",
		})
		.catch((e) => {
			console.log(e);
		});
});

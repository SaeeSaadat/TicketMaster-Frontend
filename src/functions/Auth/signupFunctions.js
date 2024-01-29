import axios from "axios";

export default function HandleSignup(username, password, repassword, loading) {
	loading = true;
	validatePassword(password, repassword);
	axios
		.post("/auth/register", {
			username,
			password,
		})
		.catch(() => {
			throw "Something went wrong!";
		});
}

function validatePassword(password, repassword) {
	const regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
	if (!regex.test(password)) throw "please choose a stronger password!";
	if (password !== repassword) throw "confirmation password does not match!";
}

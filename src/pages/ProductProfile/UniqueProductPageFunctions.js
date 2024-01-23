export function SaveThisProductDataInLocalStorage(title, description, picture) {
	localStorage.setItem("thisProductTitle", title);
	localStorage.setItem("thisProductDescription", description);
	localStorage.setItem("thisProductPicture", picture);
}
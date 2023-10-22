export default function getFavorites() {
	let favorites = JSON.parse(localStorage.getItem("favorites"))
	if (!favorites) favorites = []
	return favorites
}

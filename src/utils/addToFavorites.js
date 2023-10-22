export default function addToFavorites(id) {
	let favorites = JSON.parse(localStorage.getItem("favorites"))
	if (!favorites) {
		favorites = []
	}
	if (favorites.includes(id)) return
	favorites.push(id)
	localStorage.setItem("favorites", JSON.stringify(favorites))
}

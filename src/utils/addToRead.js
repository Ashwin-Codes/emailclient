export default function addToRead(id) {
	let read = JSON.parse(localStorage.getItem("read"))
	if (!read) {
		read = []
	}
	if (read.includes(id)) return
	read.push(id)
	localStorage.setItem("read", JSON.stringify(read))
}

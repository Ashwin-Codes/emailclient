export default function getReadMails() {
	let read = JSON.parse(localStorage.getItem("read"))
	if (!read) read = []
	return read
}

export default function getFormatedDate(timestamp) {
	const date = new Date(timestamp)
	const dd = date.getDate()
	const mm = date.getMonth() + 1
	const yyyy = date.getFullYear()
	const hrs = date.getHours() % 12 || 12
	const mins = date.getMinutes()
	const dayTime = date.getHours() < 12 ? "am" : "pm"

	const formatedDate = `${dd}/${mm}/${yyyy} ${hrs}:${mins} ${dayTime}`
	return formatedDate
}

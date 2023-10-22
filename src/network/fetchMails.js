export default async function fetchMails(page) {
	if (typeof page !== "number") throw new Error("page must be a number")
	const res = await fetch(`https://flipkart-email-mock.now.sh/?page=${page}`)
	return await res.json()
}

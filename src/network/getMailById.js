export default async function getMailById(id) {
	const res = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
	return await res.json()
}

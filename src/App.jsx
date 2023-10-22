import "./App.css"
import { useEffect } from "react"
import fetchMails from "./network/fetchMails"
import { useState } from "react"
import { useRef } from "react"
import Loader from "./components/Loader/Loader"

export default function App() {
	const [mails, setMails] = useState(null)
	const [page, setPage] = useState(1)
	const totalPages = useRef(1)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		async function getMails() {
			const mails = await fetchMails(page)
			setMails(mails)
			// Calculate total number of pages
			totalPages.current = Math.ceil(mails.total / mails.list.length)
			// Set loading to false
			setIsLoading(false)
		}
		getMails()
	}, [page])

	if (isLoading || !mails) {
		return (
			<div className="loading-wrapper">
				<Loader />
			</div>
		)
	}

	return <div>mails</div>
}

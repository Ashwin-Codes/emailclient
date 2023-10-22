import "./App.css"
import { useEffect } from "react"
import fetchMails from "./network/fetchMails"
import { useState } from "react"
import { useRef } from "react"
import Loader from "./components/Loader/Loader"
import Mails from "./components/Mails/Mails"
import getFavorites from "./utils/getFavorites"
import getReadMails from "./utils/getReadMails"

const filters = {
	nofilter: "nofilter",
	read: "read",
	unread: "unread",
	favorites: "favorites",
}

export default function App() {
	const [mails, setMails] = useState(null)
	const [page, setPage] = useState(1)
	const totalPages = useRef(1)
	const [isLoading, setIsLoading] = useState(false)
	const [filteredMail, setFilterdMail] = useState([])
	const [filterBy, setFilterBy] = useState(filters.nofilter)

	useEffect(() => {
		setIsLoading(true)
		async function getMails() {
			const mails = await fetchMails(page)
			setMails(mails)
			setFilterdMail(mails)

			// Calculate total number of pages
			totalPages.current = Math.ceil(mails.total / mails.list.length)
			// Set loading to false
			setIsLoading(false)
		}
		getMails()
	}, [page])

	useEffect(() => {
		// Filter by favorites
		if (filterBy === filters.favorites) {
			const favorites = getFavorites()
			const filteredMails = mails.list.filter((mail) => {
				if (favorites.includes(mail.id)) return mail
			})
			setFilterdMail({ ...mails, list: filteredMails })
		}

		// Filter by read
		if (filterBy === filters.read) {
			const read = getReadMails()
			const filteredMails = mails.list.filter((mail) => {
				if (read.includes(mail.id)) return mail
			})
			setFilterdMail({ ...mails, list: filteredMails })
		}

		// Filter by unread
		if (filterBy === filters.unread) {
			const read = getReadMails()
			const filteredMails = mails.list.filter((mail) => {
				if (!read.includes(mail.id)) return mail
			})
			setFilterdMail({ ...mails, list: filteredMails })
		}
	}, [filterBy, mails])

	if (isLoading || !mails) {
		return (
			<div className="loading-wrapper">
				<Loader />
			</div>
		)
	}

	return (
		<div className="">
			<div className="filters">
				Filter By:
				<button
					className={filterBy === filters.unread ? "active" : ""}
					onClick={() => {
						setFilterBy(filters.unread)
					}}>
					Unread
				</button>
				<button
					className={filterBy === filters.read ? "active" : ""}
					onClick={() => {
						setFilterBy(filters.read)
					}}>
					Read
				</button>
				<button
					className={filterBy === filters.favorites ? "active" : ""}
					onClick={() => {
						setFilterBy(filters.favorites)
					}}>
					Favorites
				</button>
			</div>
			<div className="pagination-btn">
				<button>Next Page</button>
				<button>Prev Page</button>
			</div>

			<Mails mails={filteredMail.list} />
		</div>
	)
}

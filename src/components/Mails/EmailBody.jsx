import "./emailBody.css"
import { useEffect, useState } from "react"
import Loader from "../Loader/Loader"
import getMailById from "../../network/getMailById"

export default function EmailBody({ id, from, subject, time }) {
	const [email, setEmail] = useState(null)

	useEffect(() => {
		async function getEmail() {
			console.log(id)
			const body = await getMailById(id)
			console.log(body)
			setEmail(body)
		}
		getEmail()
	}, [id])

	if (!email) {
		return (
			<div>
				<Loader />
			</div>
		)
	}

	return (
		<div className="email-body">
			<div className="avatar">{from.name[0]}</div>
			<div className="email-content">
				<div className="heading">
					<h1>{subject}</h1>
					<button>Mark as favorite</button>
				</div>
				<p className="time">{time}</p>
				<p className="content-body">{email.body}</p>
			</div>
		</div>
	)
}

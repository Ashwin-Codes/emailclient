import "./mails.css"
import { useState } from "react"
import SingleMail from "./SingleMail"

export default function Mails({ mails }) {
	const [openMail, setOpenMail] = useState(null)

	function mailClickHandler(mailId) {
		setOpenMail(mailId)
	}

	return (
		<ul className="mails">
			{mails.map((mail) => {
				return <SingleMail key={mail.id} mail={mail} onClick={mailClickHandler} />
			})}
		</ul>
	)
}

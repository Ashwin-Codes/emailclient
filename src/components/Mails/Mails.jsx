import "./mails.css"
import { useState } from "react"
import SingleMail from "./SingleMail"
import EmailBody from "./EmailBody"

export default function Mails({ mails }) {
	const [openMail, setOpenMail] = useState(null)

	function mailClickHandler({ id, from, subject, time }) {
		setOpenMail({ id, from, subject, time })
	}

	return (
		<div className="mails-dashboard">
			<ul className="mails">
				{mails.map((mail) => {
					return <SingleMail key={mail.id} mail={mail} onClick={mailClickHandler} />
				})}
			</ul>
			{openMail != null && (
				<EmailBody id={openMail.id} from={openMail.from} subject={openMail.subject} time={openMail.time} />
			)}
		</div>
	)
}

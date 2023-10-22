import "./singleMail.css"
import getFormatedDate from "../../utils/getFormatedDate"

export default function SingleMail({ mail, onClick }) {
	return (
		<li
			className="single-mail"
			onClick={() => {
				onClick(mail.id)
			}}>
			<div className="avatar">{mail.from.name[0]}</div>
			<div className="mail-info">
				<p>
					From:
					<span className="from">
						{mail.from.name} {`<${mail.from.email}>`}
					</span>
				</p>
				<p>
					Subject:<span className="subject">{mail.subject}</span>
				</p>
				<p>{mail.short_description}</p>
				<p>{getFormatedDate(mail.date)}</p>
			</div>
		</li>
	)
}

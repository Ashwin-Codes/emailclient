import getFormatedDate from "../../utils/getFormatedDate"

export default function SingleMail({ mail }) {
	return (
		<li>
			<p>
				From:
				<span>
					{mail.from.name} {`<${mail.from.email}>`}
				</span>
			</p>
			<p>Subject:{mail.subject}</p>
			<p>{mail.short_description}</p>
			<p>{getFormatedDate(mail.date)}</p>
		</li>
	)
}

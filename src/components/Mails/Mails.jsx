import SingleMail from "./SingleMail"

export default function Mails({ mails }) {
	return (
		<ul>
			{mails.map((mail) => {
				return <SingleMail key={mail.id} mail={mail} />
			})}
		</ul>
	)
}

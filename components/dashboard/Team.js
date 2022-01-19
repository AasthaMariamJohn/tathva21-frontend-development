import style from './db.module.css'
import TeamMember from './TeamMember'

export default function Team({ teamMembers }) {
	return (
		<div className={style.team}>
			<p className={style.header}>
				<span>TEAM</span>
				<span>ID-090392</span>
			</p>
			<div className={style.members}>
				{teamMembers.map((member) => (
					<TeamMember key={member.id} name={member.name} id={member.tathvaId} />
				))}
			</div>

			<p className={style.addmember}>ADD TEAM MEMBER</p>
		</div>
	)
}

import style from './db.module.css'
import Section2 from './section2'
import EventComponent from './EventComponent'
import Team from './Team'
import getRegisteredEventInfo from '@/lib/events/getRegisterEventInfo'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUserContext } from '@/context/userContext'
import getEventWithName from '@/lib/events/getEvent'
import Loader from '../common/loader'

export default function Dashboard() {
	const { user, userEvents } = useUserContext()
	const router = useRouter()
	const { eventName } = router.query
	const [Event, setEvent] = useState(null)
	const [userEventId, setUserEventId] = useState(null)
	const [userEventDetails, setUserEventDetails] = useState(null)
	const [isRegistered, setIsRegistered] = useState(false)

	useEffect(() => {
		if (eventName) {
			getEventWithName(eventName, setEvent)
		}
	}, [eventName])

	useEffect(() => {
		if (Event && userEvents) {
			for (var i = 0; i < userEvents.length; i++) {
				if (userEvents[i].eventId == Event.id) {
					setUserEventId(userEvents[i].userEventId)
					setIsRegistered(true)
				}
			}
		}
	}, [Event, userEvents])
	useEffect(() => {
		if (isRegistered && Event && userEventId) {
			getRegisteredEventInfo(userEventId, user.jwt, setEvent, setUserEventDetails)
			setEvent(null)
		}
	}, [isRegistered])
	return (
		<div className={style.main}>
			{Event && userEventDetails && isRegistered ? (
				<div className={style.grid}>
					<div className={style.section1}>
						<EventComponent event={Event} />
						<Team teamMembers={userEventDetails.teamMembers} />
					</div>
					<div className={style['section2-wrapper']}>
						<Section2 refId={userEventId} jwt={user.jwt} />
					</div>
				</div>
			) : (
				<Loader />
			)}
		</div>
	)
}

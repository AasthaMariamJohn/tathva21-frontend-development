import Overlay from '@/components/common/overlay'
import Dashboard from '@/components/dashboard/Dashboard'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Index() {
	const router=useRouter()
	const { eventName,refresh } = router.query
	useEffect(()=>{
		if(refresh=="True")
			router.push(`/dashboard/events/${eventName}`)
	},[refresh])
	return (
		<div>
			<ToastContainer />
			<Overlay>
				<Dashboard />
			</Overlay>
		</div>
	)
}

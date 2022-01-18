
import DonateBtn from '@/components/common/donateBtn'
import Head from 'next/head'

import BasicUsage from '@/components/common/eventModal'
import { useEffect } from 'react/cjs/react.development'
import { Login } from '@/lib/user/login'
import { Router, useRouter } from 'next/router'
export default function Home() {
  
  const {user}=useUserContext()
  const router=useRouter()
  useEffect(()=>{
    if(user && user.tathvaId && !user.name)
      Login(router)
  },[user])
  return (
    <div >
       <Head>
    <title>Tathva 21</title>
  </Head>
      <DonateBtn/>
      <BasicUsage/>
    </div>
  )
}


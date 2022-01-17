
import DonateBtn from '@/components/common/donateBtn'
import Head from 'next/head'

import BasicUsage from '@/components/common/eventModal'
export default function Home() {
  
 
  // const {user}=useUserContext()
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


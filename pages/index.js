import LoginBtn from '@/components/home/loginBtn'
import LogoutBtn from '@/components/home/logoutBtn'
import { useUserContext } from '@/context/userContext'
import Head from 'next/head'
import Link from 'next/link'
export default function Home() {

  const {user}=useUserContext()
  return (
    <div >
      Home
      <LoginBtn></LoginBtn>
      <LogoutBtn/>
      <Link href="/profile" passHref><button>Profile</button></Link>
    </div>
  )
}

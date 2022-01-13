import LoginBtn from '@/components/home/loginBtn'
import LogoutBtn from '@/components/home/logoutBtn'
import { useUserContext } from '@/context/userContext'
import Link from 'next/link'
export default function Home() {

  const {user}=useUserContext()
  return (
    <div >
      {/* Home
      <LoginBtn></LoginBtn>
      <LogoutBtn/>
      <Link href="/profile" passHref><button>Profile</button></Link>
      <br/>
      <Link href='/events' passHref><button>Events</button></Link>
      <br/>
      <Link href='/lectures' passHref><button>Lectures</button></Link>
      <br/>
      <Link href='/workshops' passHref><button>Workshops</button></Link>
       */}
    </div>
  )
}

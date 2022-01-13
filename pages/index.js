<<<<<<< HEAD
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'

=======
import LoginBtn from '@/components/home/loginBtn'
import LogoutBtn from '@/components/home/logoutBtn'
import { useUserContext } from '@/context/userContext'
import Link from 'next/link'
>>>>>>> master
export default function Home() {

  const {user}=useUserContext()
  return (
    <div >
<<<<<<< HEAD
    <Navbar/>
=======
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
>>>>>>> master
    </div>
  )
}

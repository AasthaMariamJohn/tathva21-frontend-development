import LoginBtn from '@/components/home/loginBtn'
import LogoutBtn from '@/components/home/logoutBtn'
import { useUserContext } from '@/context/userContext'
import Model3D from '../components/3DModel/main'
import Link from 'next/link'
export default function Home() {

  const {user}=useUserContext()
  return (
    <div >
      <Model3D/>
    </div>
  )
}


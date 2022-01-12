import nav from 'assets/images/nav.svg'
import navbg from 'assets/images/nav-bg.svg'

export default function Nav() {
    return (
          <div>
           <div className="navbar-container">
           <h1>Home</h1>
               <img src={nav} alt="" />
               <img src={navbg} alt="" />
           </div> 
          </div>
    )
}

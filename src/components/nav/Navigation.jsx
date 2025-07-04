import './Navigation.css'
import logo from '../../assets/logo.png'

const Navigation = () => {
  return (
    <nav className="container">
        <div>
            <img src={logo} alt="logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navigation
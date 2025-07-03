import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="container">
        <div>
            <img src="/images/logo.png" alt="logo" />
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
import './App.css'
import ContactForm from './components/Form/ContactForm'
import Header from './components/ContactHeader/Header'
import Navigation from './components/nav/Navigation'

function App() {
  return (
    <>
    <Navigation />
   <main className='main_container'>
    <Header />
    <ContactForm />
    </main> 
  </>
  )
}

export default App

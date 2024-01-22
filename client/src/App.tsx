import './App.css'
import NavBar from './components/navbar'
import Resume from './pages/Resume'
import me from '../assets/me.jpg'

function App () {
  return (
    // <div className='bg-custom1 mb-4 bg-[url('/noise-light.png')]'>
    // <div className="bg-custom1 mb-4 bg-fixed bg-center" style={{ backgroundImage: "url('/noise-light.png')" }}>
    <div className="bg-blue-700 mb-4 bg-fixed bg-center"
        style={{
          backgroundImage: "url('/noise-light.png'), linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01))"
        }}>
      <NavBar />
      <Resume />
    </div>
  )
}

export default App

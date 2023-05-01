import './App.css';
import Bio from './components/Bio';
import BodyNav from './components/BodyNav';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='bg-custom1 mb-4'>
      <NavBar />
      <Bio />
      <BodyNav />
    </div>
  );
}

export default App;

import './App.css';
import Bio from './components/bio';
import BodyNav from './components/bodynav';
import NavBar from './components/navbar';

function App() {
  return (
    <div className='bg-custom1'>
      <NavBar />
      <Bio />
      <BodyNav />
    </div>
  );
}

export default App;

import './App.css';
import './Nav.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';



const App = () => {
  const restart = "Restart";

  return (
    <div className="App">
      <Welcome />
      <Navbar test={restart}/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Publicroute from './Routes/publicroute';
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import particles from './Utils/Particles';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import { useLocation } from 'react-router-dom';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
}, []);

  const location = useLocation()

 



  return (
    <div className="App">

      {location.pathname==="/" ? <Particles id='particles' options={particles} init={particlesInit}/> : ""}
      
      
      <header className="App-header">
        <Navigation/>
        <Publicroute/>

        </header>
        
      
    </div>
  );
}

export default App;

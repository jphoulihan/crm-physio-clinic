import './App.css';
import Clients from './components/Clients';
import Physios from './components/Physios';
import Sessions from './components/Sessions';

function App() {
  return (
    <div className="App">
      <div className="row m-5">
      <h1 className="p-2">Physiotherapy Clinic </h1>
        <Clients/>
        <Physios/> 
        <Sessions/>
      </div>
    </div>
  );
}

export default App;

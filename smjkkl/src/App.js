import './App.css';
import Logbook from './components/logboek';
import SideBar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideBar />
        <Logbook />
      </header>
    </div>
  );
}

export default App;

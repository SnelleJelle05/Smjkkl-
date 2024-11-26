import logo from './logo.svg';
import './App.css';
import SideBar from '../src/components/SideBar.js';
import FilesContainer from '../src/components/FilesContainer.js';
import UploadButton from '../src/components/UploadButton.js';


function App() {
  return (
    <div className="App">
      <SideBar />
      <FilesContainer />
      <UploadButton />
    </div>
  );
}

export default App;

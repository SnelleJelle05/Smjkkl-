import './App.css';
import FilesIndex from "./Files/FilesIndex";
import ProjectAanmaken from "./Projecten/ProjectAanmaken";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* Example of including a link tag for an external resource */}
            <BrowserRouter>
                <Routes>
                    <Route path="/files" element={<FilesIndex />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

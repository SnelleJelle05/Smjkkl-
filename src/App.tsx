import './App.css';
import ProjectenIndex from "./Projecten/ProjectenIndex";
import ProjectAanmaken from "./Projecten/ProjectAanmaken";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* Example of including a link tag for an external resource */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProjectenIndex />}>
                    </Route>
                    <Route path="/AanmaakFormulier" element={<ProjectAanmaken />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

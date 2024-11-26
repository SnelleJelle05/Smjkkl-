import './App.css';
import StudentenIndex from "./Projecten/ProjectenIndex";
import ProjectAanmaken from "./Projecten/ProjectAanmaken";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* Example of including a link tag for an external resource */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StudentenIndex />}>
                    </Route>
                    <Route path="/aanmaak" element={<ProjectAanmaken />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

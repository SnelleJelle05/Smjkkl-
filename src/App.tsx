import './App.css';
import AdminIndex from "./Admin/AdminIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* Example of including a link tag for an external resource */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AdminIndex />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

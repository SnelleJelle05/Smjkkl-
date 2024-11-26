import { AdminIndex } from "./Admin/AdminIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AdminIndex />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
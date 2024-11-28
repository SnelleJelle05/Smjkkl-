import AdminIndex  from "./Admin/AdminIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentInformation from "./Admin/StudentInformation";

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AdminIndex />}></Route>
                    <Route path="/student-information" element={<StudentInformation/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
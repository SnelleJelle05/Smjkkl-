import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Assets/Css/StudentInformation.css"; // Import the CSS file

// Define type for student data
interface Student {
    Student: string;
    Uren: string;
    BPV: string;
    BeginDatum: string;
    status: string;
}

const StudentInformation: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // krijgt student data van location state
    const student = location.state as Student;

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Updated Student Information:", student);
        alert("Student information updated!");
        navigate(-1); // navigeer back
    };

    return (
        <div className="student-information-container">
            <h1 className="student-information-title">Student Information</h1>
            <form onSubmit={handleSubmit} className="student-information-form">
                {/* data */}
                <div className="form-group">
                    <label htmlFor="studentEmail" className="form-label">
                        Student Email:
                    </label>
                    <input
                        type="email"
                        id="studentEmail"
                        defaultValue={student?.Student} // set de data van de student zelfde is waar voor de rest
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="uren" className="form-label">
                        Uren:
                    </label>
                    <input
                        type="number"
                        id="uren"
                        defaultValue={student?.Uren}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bpv" className="form-label">
                        BPV:
                    </label>
                    <input
                        type="text"
                        id="bpv"
                        defaultValue={student?.BPV}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="beginDatum" className="form-label">
                        Begin Datum:
                    </label>
                    <input
                        type="date"
                        id="beginDatum"
                        defaultValue={student?.BeginDatum.split('/').reverse().join('-')} // Convert dd/mm/yyyy to yyyy-mm-dd
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status" className="form-label">
                        Status:
                    </label>
                    <select
                        id="status"
                        defaultValue={student?.status}
                        className="form-input"
                        required
                    >
                        <option value="Actief">Actief</option>
                        <option value="Gearchiveerd">Gearchiveerd</option>
                    </select>
                </div>
                <button type="submit" className="form-button">
                    Bewaar Aanpassingen
                </button>
            </form>
        </div>
    );
};

export default StudentInformation;

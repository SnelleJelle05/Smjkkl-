import React from "react";
import {useNavigate} from "react-router-dom"; // Updated navigation
import "../Assets/Css/StudentsTable.css";

// Define type for student data
interface Student {
    Student: string;
    Uren: string;
    BPV: string;
    BeginDatum: string;
    status: string;
}

const StudentsTable: React.FC = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = React.useState("alle");

    const studentData: Student[] = [
        {Student: "Jelle@emailadress.nl", Uren: "142", BPV: "1", BeginDatum: "14/1/2024", status: "Actief"},
        {Student: "Student2@email.com", Uren: "120", BPV: "2", BeginDatum: "20/1/2024", status: "Gearchiveerd"},
        {Student: "Student3@email.com", Uren: "101", BPV: "1", BeginDatum: "12/11/2024", status: "Gearchiveerd"},
        {Student: "Student4@email.com", Uren: "431", BPV: "1", BeginDatum: "26/2/2024", status: "Actief"},
        {Student: "Student5@email.com", Uren: "703", BPV: "2", BeginDatum: "10/10/2022", status: "Gearchiveerd"},
        {Student: "Student5@email.com", Uren: "703", BPV: "2", BeginDatum: "10/10/2022", status: "Gearchiveerd"},
        {Student: "Student5@email.com", Uren: "703", BPV: "2", BeginDatum: "10/10/2022", status: "Gearchiveerd"},
        {Student: "Student5@email.com", Uren: "703", BPV: "2", BeginDatum: "10/10/2022", status: "Gearchiveerd"},
        {Student: "Student5@email.com", Uren: "703", BPV: "2", BeginDatum: "10/10/2022", status: "Gearchiveerd"},
        {Student: "Student5@email.com", Uren: "703", BPV: "2", BeginDatum: "10/10/2022", status: "Gearchiveerd"},
        {Student: "Student5@email.com", Uren: "703", BPV: "2", BeginDatum: "10/10/2022", status: "Gearchiveerd"},
        {Student: "Student5@email.com", Uren: "703", BPV: "2", BeginDatum: "10/10/2022", status: "Gearchiveerd"},
        {Student: "Student5@email.com", Uren: "703", BPV: "2", BeginDatum: "10/10/2022", status: "Gearchiveerd"},
    ];

    const handleRowClick = (student: Student) => {
        navigate("/student-information", {state: student}); // Use navigate with state
    };

    return (
        <div>
            <div className="filter-buttons">
                <button
                    onClick={() => setFilter("alle")}
                    className={filter === "alle" ? "selected" : ""}
                >
                    Alle
                </button>
                <button
                    onClick={() => setFilter("actief")}
                    className={filter === "actief" ? "selected" : ""}
                >
                    Actief
                </button>
                <button
                    onClick={() => setFilter("gearchiveerd")}
                    className={filter === "gearchiveerd" ? "selected" : ""}
                >
                    Gearchiveerd
                </button>
            </div>

            <div className="TableHeaderAdmin">
                <div className="TableHeaderItem"><p>Student</p></div>
                <div className="TableHeaderItem"><p>Uren</p></div>
                <div className="TableHeaderItem"><p>BPV</p></div>
                <div className="TableHeaderItem"><p>Begin Datum</p></div>
                <div className="TableHeaderItem"><p>Status</p></div>
            </div>

            <hr className="lineTable"/>

            <div className="TableDataAdmin">
                {studentData
                    .filter(student => filter === "alle" || student.status.toLowerCase() === filter).map((student, index) => (
                        <div className="TableDataItem" key={index} onClick={() => handleRowClick(student)}>
                            <p className="TableDataP">{student.Student}</p>
                            <p className="TableDataP">{student.Uren}</p>
                            <p className="TableDataP">{student.BPV}</p>
                            <p className="TableDataP">{student.BeginDatum}</p>
                            <p className="TableDataP">{student.status}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default StudentsTable;

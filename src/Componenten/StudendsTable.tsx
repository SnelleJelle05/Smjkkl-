import React from "react";
import {useNavigate} from "react-router-dom"; // Updated navigation
import "../Assets/Css/StudentsTable.css";
import dataStudent from "../Assets/MockData/Students.json"

// defineer the props van de data
interface Student {
    Student: string;
    Uren: number;
    BPV: number;
    BeginDatum: string;
    Status: string;
}

const StudentsTable: React.FC = () => {
    const navigate = useNavigate();
    //init filter voor "alle"
    const [filter, setFilter] = React.useState("alle");

    // krijgt de data van de json
    const studentData: Student[] = dataStudent;

    // handled klik, navigeert naar de student informatie pagina
    const handleRowClick = (student: Student) => {
        navigate("/student-information", {state: student}); // Use navigate with state
    };

    return (
        <div>
            {/*filter knoppen */}
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

            {/*tabel met alle studenten*/}
            <div className="TableHeaderAdmin">
                <div className="TableHeaderItem"><p>Student</p></div>
                <div className="TableHeaderItem"><p>Uren</p></div>
                <div className="TableHeaderItem"><p>BPV</p></div>
                <div className="TableHeaderItem"><p>Begin Datum</p></div>
                <div className="TableHeaderItem"><p>Status</p></div>
            </div>

            <hr className="lineTable"/>

            <div className="TableDataAdmin">
                {/*filter, filtert op welke knop gedrukt is. alle / acrhief / actief*/}
                {studentData
                    .filter(student => filter === "alle" || student.Status.toLowerCase() === filter).map((student, index) => (
                        <div className="TableDataItem" key={index} onClick={() => handleRowClick(student)}>
                            <p className="TableDataP">{student.Student}</p>
                            <p className="TableDataP">{student.Uren}</p>
                            <p className="TableDataP">{student.BPV}</p>
                            <p className="TableDataP">{student.BeginDatum}</p>
                            <p className="TableDataP">{student.Status}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default StudentsTable;

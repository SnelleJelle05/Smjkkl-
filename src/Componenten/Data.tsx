import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import "../Assets/Css/Data.css";

interface BasicComponentProps {
    Title: string;
}

interface Project {
    Naam: string;
    Uren: string;
    Status: string;
    Start: string;
}

const Data: React.FC<BasicComponentProps> = ({ Title }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchCSVData = async () => {
        try {
            const response = await fetch("/Assets/CSV/projecten.csv");
            const csvData = await response.text();

            const parsed = Papa.parse<Project>(csvData, {
                header: true,
                skipEmptyLines: true,
            });
            setProjects(parsed.data);
        } catch (error) {
            console.error("Error fetching or parsing CSV:", error);
        }
    };

    useEffect(() => {
        fetchCSVData();
    }, []);

    return (
        <div className="StudentDataContainer">
            <div className="header">
                <h1 className="h1Data">{Title}</h1>
            </div>
            <div className="divData columnHeader">
                <div>Naam</div>
                <div>Uren</div>
                <div>Status</div>
                <div>Start</div>
            </div>
            <hr className="line" />
            <div className="scrollableContainer">
            {projects.map((project, index) => (
                <div key={index} className="divData">
                    <div className="column">{project.Naam}</div>
                    <div className="column">{project.Uren}</div>
                    <div className={`column ${project.Status === "Klaar" ? "klaar" : project.Status === "Bezig" ? "bezig" : ""}`}> {project.Status} </div>
                    <div className="column">{project.Start}</div>
                </div>
            ))}
            
            <a href={"/aanmaak"} className="createButton">Aanmaken</a>
            </div>
        </div>
    );
};

export default Data;

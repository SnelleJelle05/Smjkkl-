import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import "../Assets/Css/Data.css";

interface BasicComponentProps {
    Title: string;
}

interface Bestand {
    fileName: string;
    fileSize: string;
    Status: string;
    lastChanged: string;
    Omschrijving?: string;
}

const Data: React.FC<BasicComponentProps> = ({ Title }) => {
    const [projects, setProjects] = useState<Bestand[]>([]);
    const [selectedProject, setSelectedProject] = useState<Bestand | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    // Fetch data from CSV
    const fetchCSVData = async () => {
        try {
            const response = await fetch("/Assets/CSV/bestanden.csv");
            const csvData = await response.text();

            const parsed = Papa.parse<Bestand>(csvData, {
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

    const handleRowClick = (project: Bestand) => {
        setSelectedProject(project);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedProject(null);
    };

    const uploadFiles = () => {
        document.getElementById('file')?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newFile: Bestand = {
                fileName: file.name,
                fileSize: formatFileSize(file.size),
                Status: "Nieuw",
                lastChanged: new Date().toLocaleString("nl-NL"),
            };

            setProjects([...projects, newFile]);
            event.target.value = "";
        }
    };

    const formatFileSize = (size: number): string => {
        if (size < 1024) return `${size} bytes`;
        if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    };

    const handleDelete = (fileName: string) => {
        // Filter out the project with the given fileName
        const updatedProjects = projects.filter(project => project.fileName !== fileName);
        setProjects(updatedProjects);

        // Simulate CSV update (server update would be needed for real persistence)
        console.log(`Deleted: ${fileName}`);
    };

    return (
        <div className="StudentDataContainer">
            <div className="header">
                <h1 className="h1Data">{Title}</h1>
            </div>
            <div className="divData columnHeader">
                <div>Naam</div>
                <div>Grootte</div>
                <div>Laatst gewijzigd</div>
                <div>Acties</div>
            </div>
            <hr className="line" />
            <div className="scrollableContainer">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="divData clickableRow"
                    >
                        <div className="column" onClick={() => handleRowClick(project)}>
                            {project.fileName}
                        </div>
                        <div className="column">{project.fileSize}</div>
                        <div className="column">{project.lastChanged}</div>
                        <div className="column actions">
                            <a className="actionButton">
                                <img width="30" src="/Assets/PNG/downloads.png" />
                            </a>
                            <a 
                                className="actionButton" 
                                onClick={() => handleDelete(project.fileName)}
                            >
                                <img width="30" src="/Assets/PNG/delete.png" />
                            </a>
                        </div>
                    </div>
                ))}
                <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileChange} />
                <a onClick={() => uploadFiles()} className="createButton">Upload</a>
            </div>

            {showPopup && selectedProject && (
                <div className="popupOverlay" onClick={handleClosePopup}>
                    <div className="popupContent" onClick={(e) => e.stopPropagation()}>
                        <h2>Bestand Details</h2>
                        <p><strong>Bestandsnaam:&nbsp;</strong> {selectedProject.fileName}</p>
                        <p><strong>Bestandsgrootte:&nbsp;</strong>{selectedProject.fileSize}</p>
                        <p><strong>Laatst gewijzigd:&nbsp;</strong> {selectedProject.lastChanged}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Data;

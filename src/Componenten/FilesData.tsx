import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import "../Assets/Css/Data.css";

interface BasicComponentProps {
    Title: string;
}

interface Bestand {
    fileId: string;
    fileName: string;
    fileSize: string;
    Status: string;
    lastChanged: string;
    Omschrijving?: string;
}

const Data: React.FC<BasicComponentProps> = ({ Title }) => {
    const [files, setFiles] = useState<Bestand[]>([]);
    const [selectedFile, setSelectedFile] = useState<Bestand | null>(null);
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
            setFiles(parsed.data);
        } catch (error) {
            console.error("Error fetching or parsing CSV:", error);
        }
    };

    useEffect(() => {
        fetchCSVData();
    }, []);

    const handleRowClick = (file: Bestand) => {
        setSelectedFile(file);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedFile(null);
    };

    const uploadFiles = () => {
        document.getElementById('file')?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            let newFileId = '1';
            if(files.length > 0) {
                newFileId = (Number(files[files.length - 1].fileId) + 1).toString()
            }
            const newFile: Bestand = {
                fileId: newFileId,
                fileName: file.name,
                fileSize: formatFileSize(file.size),
                Status: "Nieuw",
                lastChanged: new Date().toLocaleString("nl-NL"),
            };

            setFiles([...files, newFile]);
            event.target.value = "";
        }
    };

    const formatFileSize = (size: number): string => {
        if (size < 1024) return `${size} bytes`;
        if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    };

    const handleDelete = (fileId: string) => {
        // Filter out the file with the given fileName
        const updatedfiles = files.filter(file => file.fileId !== fileId);
        setFiles(updatedfiles);
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
            <div className="scrollableContainerFiles">
                {files.map((file, index) => (
                    <div 
                        key={index} 
                        className="divData clickableRow"
                    >
                        <div className="column" onClick={() => handleRowClick(file)}>
                            {file.fileName}
                        </div>
                        <div className="column">{file.fileSize}</div>
                        <div className="column">{file.lastChanged}</div>
                        <div className="column actions">
                            <a className="actionButton">
                                <img width="30" src="/Assets/PNG/downloads.png" />
                            </a>
                            <a 
                                className="actionButton" 
                                onClick={() => handleDelete(file.fileId)}
                            >
                                <img width="30" src="/Assets/PNG/delete.png" />
                            </a>
                        </div>
                    </div>
                ))}
                <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileChange} />
                <a onClick={() => uploadFiles()} className="createButton">Upload</a>
            </div>

            {showPopup && selectedFile && (
                <div className="popupOverlay" onClick={handleClosePopup}>
                    <div className="popupContent" onClick={(e) => e.stopPropagation()}>
                        <h2>Bestand Details</h2>
                        <p><strong>Bestandsnaam:&nbsp;</strong> {selectedFile.fileName}</p>
                        <p><strong>Bestandsgrootte:&nbsp;</strong>{selectedFile.fileSize}</p>
                        <p><strong>Laatst gewijzigd:&nbsp;</strong> {selectedFile.lastChanged}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Data;

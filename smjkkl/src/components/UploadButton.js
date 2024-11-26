import '../App.css';
import React, { useState } from 'react';


const UploadButton = () => {
    const file = useState<File | null>(null);
    const setFile = useState<File | null>(null);
  
    const handleFileChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setFile(e.target.files[0]);
      }
    };
  
    const handleUpload = async () => {
      // We will fill this out later
    };

    const startUpload = () => {
        document.getElementById('fileInput').click()
    };
  
    return (
      <>
        <div className="uploadContainer">
        <button className={"uploadButton"} onClick={startUpload}><span className="uploadButtonText">Uploaden</span></button>
          <input id="fileInput" type="file" className="uploadButtonFile" onChange={handleFileChange} />
        </div>
      </>
    );
  };
  
  export default UploadButton;

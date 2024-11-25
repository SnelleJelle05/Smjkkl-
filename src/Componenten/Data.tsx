import React from 'react';
import "../Assets/Css/Data.css";

interface BasicComponentProps {
    Students: string;
}

const Data: React.FC<BasicComponentProps> = ({ Students }) => {
    return (
        <div className="StudentDataContainer">
            <p>{Students}</p>
        </div>
    );
};

export default Data;
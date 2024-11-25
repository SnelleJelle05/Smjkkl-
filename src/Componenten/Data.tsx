import React from 'react';
import "../Assets/Css/Data.css";

interface BasicComponentProps {
    Title: string;
}

const Data: React.FC<BasicComponentProps> = ({ Title }) => {
    return (
        <div className="StudentDataContainer">
            <div className={"header"}>
                <h1 className={"h1Data"}>{Title}</h1>
            </div>

        </div>
    );
};

export default Data;
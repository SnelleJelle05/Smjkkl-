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
            <div className="divData">
                <div className="columnHeader">Project naam</div>
                <div className="columnHeader">Uren</div>
                <div className="columnHeader">Status</div>
                <div className="columnHeader">Gestart op</div>
            </div>
            <hr className={'line'}/>
        </div>
    );
};

export default Data;
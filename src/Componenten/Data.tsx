import React from 'react';
import "../Assets/Css/Data.css";

interface BasicComponentProps {
    Title: string;
    Data? : any;
}

const Data: React.FC<BasicComponentProps> = ({ Title , Data}) => {
    return (
        <div className="StudentDataContainer">
            <div className={"header"}>
                <h1 className={"h1Data"}>{Title}</h1>
            </div>
            {Data}
        </div>
    );
};

export default Data;
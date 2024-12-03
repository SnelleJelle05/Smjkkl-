import React from 'react';
import "../Assets/Css/Dataarchief.css";

interface BasicComponentProps {
    Title: string;
}
function Archiefbutton() {
    window.print()
}
const Data: React.FC<BasicComponentProps> = ({ Title }) => {
    return (
        <div className="StudentDataContainer">
            <div className={"header"}>
                <h1 className={"h1Data"}>{Title}</h1>
            </div>
            <div className='studenten'>
                <div className='student'>
                    <h2>Student 1</h2>
                    <div className='info'>
                        <p>Studentnummer: 123456</p>
                        <p>E-mail: student@example.com</p>
                        <button onClick={Archiefbutton}>archief</button>
                        <button>edit</button>
                    </div>
                </div>
                <div className='student'>
                    <h2>Student 2</h2>
                    <div className='info'>
                        <p>Studentnummer: 654321</p>
                        <p>E-mail: student2@example.com</p>
                        <button onClick={Archiefbutton}>archief</button>
                        <button>edit</button>
                    </div>
                </div>
                <div className='student'>
                    <h2>Student 3</h2>
                    <div className='info'>
                        <p>Studentnummer: 789012</p>
                        <p>E-mail: student3@example.com</p>
                        <button onClick={Archiefbutton}>archief</button>
                        <button>edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Data;

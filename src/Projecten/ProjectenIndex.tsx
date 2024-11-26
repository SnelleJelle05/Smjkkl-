import "../Assets/Css/Student.css";
import SideBar from "../Componenten/SideBar";
import Data from "../Componenten/Data";

function StudentenIndex() {
    return (

        <div className="container">
            <SideBar
                title="BPV hulp tool"
                pageNames={["Projecten", "Bestanden", "Logboek", "Uitloggen"]}
                pageLinks={["#", "#", "#", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]}
            />

            <Data Title="Mijn projecten"/>
        </div>
    );
}

export default StudentenIndex;
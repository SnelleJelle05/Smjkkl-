import "../Assets/Css/Student.css";
import SideBar from "../Componenten/SideBar";
import MijnProjecten from "../Componenten/MijnProjecten";

function ProjectenIndex() {
    return (

        <div className="container">
            <SideBar
                title="BPV hulp tool"
                pageNames={["Projecten", "Bestanden", "Logboek", "Uitloggen"]}
                pageLinks={["#", "#", "#", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]}
            />

            <MijnProjecten Title="Mijn projecten"/>
        </div>
    );
}

export default ProjectenIndex;
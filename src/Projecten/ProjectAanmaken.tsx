import "../Assets/Css/Student.css";
import SideBar from "../Componenten/SideBar";
import AanmakenFormulier from "../Componenten/AanmaakFormulier";

function ProjectAanmaken() {
    return (
        <div className="container">
                <SideBar
                title="BPV hulp tool"
                pageNames={["Projecten", "Bestanden", "Logboek", "Uitloggen"]}
                pageLinks={["#", "#", "#", "#"]}
                selectedPage={0}
            />
            <AanmakenFormulier Title="Maak een project aan" />
        </div>
    );
}

export default ProjectAanmaken;
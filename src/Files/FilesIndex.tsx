import "../Assets/Css/Student.css";
import { SideBar } from "../Componenten/SideBar";
import Data from "../Componenten/FilesData";

function FilesIndex() {
    return (

        <div className="container">
            <SideBar
                title="BPV hulp tool"
                pageNames={["Projecten", "Bestanden", "Logboek", "Uitloggen"]}
                pageLinks={["projecten", "files", "#", "#"]}
                selectedPage={1}
            />

            <Data Title="Mijn bestanden"/>
        </div>
    );
}

export default FilesIndex;
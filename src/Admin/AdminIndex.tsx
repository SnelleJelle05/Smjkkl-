import "../Assets/Css/admin.css";
import SideBar from "../Componenten/SideBar";
import Data from "../Componenten/Data";

function AdminIndex() {
    return (

        <div className="container">
            <SideBar
                title="Admin Page"
                pageNames={["Studenten", "Archief", "uitloggen"]}
                pageLinks={["#", "#", "#"]}
            />

            <Data Title="Alle Actieve Studenten"/>
        </div>
    );
}

export default AdminIndex;
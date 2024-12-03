import "../Assets/Css/Student.css";
import { useState } from "react";
import { SideBar } from "../Componenten/SideBar";
import AanmakenFormulier from "../Componenten/AanmaakFormulier";

function ProjectAanmaken() {
    const [selectedPage, setSelectedPage] = useState(0);

    const handlePageChange = (pageIndex: number) => {
        setSelectedPage(pageIndex);
    };

    return (
        <div className="container">
            <SideBar
                title="BPV hulp tool"
                pageNames={["Projecten", "Bestanden", "Logboek", "Uitloggen"]}
                pageLinks={["/", "#", "#", "#"]}
                selectedPage={selectedPage}
                onPageChange={handlePageChange}
            />
            <AanmakenFormulier Title="Maak een project aan" />
        </div>
    );
}

export default ProjectAanmaken;
import React, { useState } from "react";
import "../Assets/Css/Student.css";
import { SideBar } from "../Componenten/SideBar";
import MijnProjecten from "../Componenten/MijnProjecten";

function ProjectenIndex() {
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

            <MijnProjecten Title="Mijn projecten" />
        </div>
    );
}

export default ProjectenIndex;
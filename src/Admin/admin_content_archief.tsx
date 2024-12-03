import React, { useState } from "react";
import "../Assets/Css/admin.css";
import { SideBar } from "../Componenten/SideBar";
import Data from "../Componenten/Dataarchief";

export const Archief = () => {
    const [selectedPage, setSelectedPage] = useState(0);

    const handlePageChange = (pageIndex: number) => {
        setSelectedPage(pageIndex);
    };

    return (
        <div className="container">
            <SideBar
                title="Docent {naam}"
                pageNames={["Studenten", "Archief", "uitloggen"]}
                pageLinks={["#", "/Archief", "/login"]}
                selectedPage={selectedPage}
                onPageChange={handlePageChange}
            />

            <Data Title="Alle Actieve Studenten" />
        </div>
    );
}

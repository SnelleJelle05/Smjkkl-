import React, { useState } from "react";
import "../Assets/Css/admin.css";
import { SideBar } from "../Componenten/SideBar";
import Data from "../Componenten/Data";

export const AdminIndex = () => {
    const [selectedPage, setSelectedPage] = useState(0);

    const handlePageChange = (pageIndex: number) => {
        setSelectedPage(pageIndex);
    };

    return (
        <div className="container">
            <SideBar
                title="Admin Page"
                pageNames={["Studenten", "Archief", "uitloggen"]}
                pageLinks={["#", "#", "#"]}
                selectedPage={selectedPage}
                onPageChange={handlePageChange}
            />

            <Data Title="Alle Actieve Studenten" />
        </div>
    );
}

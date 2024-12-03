import React, { useState } from "react";
import "../Assets/Css/admin.css";
import { SideBar } from "../Componenten/SideBar";
import Data from "../Componenten/Dataarchief";
interface Student {
    id: number;
    naam: string;
    uren: number;
    datum: Date;
}
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
                pageLinks={["#", "#", "/login"]}
                selectedPage={selectedPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
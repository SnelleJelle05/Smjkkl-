import { useState } from "react";
import "../Assets/Css/admin.css";
import { SideBar } from "../Componenten/SideBar";
import Data from "../Componenten/Data";
import StudentsTable from "../Componenten/StudendsTable";

const AdminIndex = () => {
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

                <Data
                    Title="Alle Actieve Studenten"
                    Data={<StudentsTable />}
                />
        </div>
    );
}

export default AdminIndex;
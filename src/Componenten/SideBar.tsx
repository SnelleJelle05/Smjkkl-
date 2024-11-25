import React from 'react';
import "../Assets/Css/SideBarCss.css";

interface BasicComponentProps {
    // Define your props here
    title: string;
    pageNames: string[];
    pageLinks: string[];

}


const SideBar: React.FC<BasicComponentProps> = ({title, pageNames, pageLinks}) => {
    return (
        <>

            <div className={"containerSideBar"}>

                <h1 className="h1sidebar">{title}</h1>

                <hr className={'line'}/>


                <a href={pageLinks[0]} className={'items'}>
                    <p>{pageNames[0]}</p>
                </a>


                <a href={pageLinks[1]} className={'items'}>
                    <p>{pageNames[1]}</p>
                </a>

                <a href={pageLinks[2]} className={'items'}>
                    <p>{pageNames[2]}</p>
                </a>

            </div>

        </>
    );
};

export default SideBar;

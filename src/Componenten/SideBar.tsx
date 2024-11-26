import * as React from 'react';
import "../Assets/Css/SideBarCss.css";

interface BasicComponentProps {
    title: string;
    pageNames: string[];
    pageLinks: string[];
    selectedPage: number; 
    onPageChange?: (pageIndex: number) => void; 
}

export const SideBar = (props: BasicComponentProps) => {
    return (
        <div className={"containerSideBar"}>
            <h1 className="h1sidebar">{props.title}</h1>
            <hr className={'line'}/>

            {props.pageNames.map((pageName, index) => (
                <a 
                    key={index} 
                    href={props.pageLinks[index]} 
                    className={`items ${props.selectedPage === index ? 'selected' : ''}`}
                    onClick={(e) => {
                        e.preventDefault(); 
                        if (props.onPageChange) {
                            props.onPageChange(index);
                        }
                    }}
                >
                    <p className={`${props.selectedPage === index ? 'selected' : ''}`}>{pageName}</p>
                </a>
            ))}
        </div>
    );
};
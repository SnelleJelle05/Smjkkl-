import React from 'react';
import "../Assets/Css/SideBarCss.css";

interface BasicComponentProps {
  title: string;
  pageNames: string[];
  pageLinks: string[];
  selectedPage: number;
}

const SideBar: React.FC<BasicComponentProps> = ({ title, pageNames, pageLinks, selectedPage }) => {
  return (
    <div className="containerSideBar">
      <h1 className="h1sidebar">{title}</h1>
      <hr className="line" />

      {pageNames.map((name, index) => (
        <a
          key={index}
          href={pageLinks[index]}
          className={index === selectedPage ? 'selectedItem' : 'items'}
        >
          <p className={index === selectedPage ? 'selectedText' : ''}>{name}</p>
        </a>
      ))}
    </div>
  );
};

export default SideBar;

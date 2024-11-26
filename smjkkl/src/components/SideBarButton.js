import '../App.css';


function SideBarButton({displayText,active}) {
  return (
    <button className={"sideBarButton " + (active ? 'sideBarButtonActive' : '')}>
      <span className="sideBarButtonText">{displayText}</span>
    </button>
  );
}

export default SideBarButton;

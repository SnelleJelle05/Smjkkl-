import '../App.css';
import SideBarButton from './SideBarButton';


function SideBar() {
  return (
    <div className="sideBar">
      <h4 className="sideBarTitle">BPV Stage hulptool</h4>
      <SideBarButton displayText={'Projecten'}/>
      <SideBarButton displayText={'Bestanden'} active={true}/>
      <SideBarButton displayText={'Logboek'}/>
      <SideBarButton displayText={'Uitloggen'}/>
    </div>
  );
}

export default SideBar;

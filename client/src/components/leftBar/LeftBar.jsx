import {
  Collections,
  Diversity2,
  Forum,
  Group,
  Newspaper,
  SportsEsports,
  Store,
  VideoLibrary,
} from "@mui/icons-material";
import "./leftBar.scss";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <Diversity2 />
            <span>Friends</span>
          </div>
          <div className="item">
            <Group />
            <span>Groups</span>
          </div>
          <div className="item">
            <Store />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <VideoLibrary />
            <span>Watch</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span style={{fontSize:"20px", color: "rgba(255, 153, 153, 0.851)",
        textShadow: "0 0 10px #ff0040, 0 0 20px #ff0040, 0 0 30px #ff0040"}}>Your shortcuts</span>
          <div className="item">
            <Newspaper />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsports />
            <span>Gaming</span>
          </div>
          <div className="item">
            <Collections />
            <span>Gallery</span>
          </div>
          <div className="item">
            <Forum />
            <span>Messages</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LeftBar;

import Tweet from "../Tweet/Tweet";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="newsWrapper">
          <span className="blockTitle">Chatter on the Den</span>
          <div className="tweetHolder">
            <Tweet
              accountHolder={"AccountHolder#1"}
              holderEmail={"tweeter@gmail.com"}
              tweetText={"ouebowirvnwouvwfivnpwrfovwfpivwnvporfmvpomwrvo[mwrvpm"}
              tweetTag={"Test"}
            />
            <Tweet
              accountHolder={"AccountHolder#1"}
              holderEmail={"tweeter@gmail.com"}
              tweetText={"ouebowirvnwouvwfivnpwrfovwfpivwnvporfmvpomwrvo[mwrvpm"}
              tweetTag={"Test"}
            />
          </div>
        </div>
        <div className="onlineFriends">
          <span className="blockTitle">Online Friends</span>
          <div className="friendInfo">
            <img src="/assets/unknown.jpg" alt="" />
            <span>Jane Doe</span>
          </div>
          <div className="friendInfo">
            <img src="/assets/unknown.jpg" alt="" />
            <span>Jane Doe</span>
          </div>
          <div className="friendInfo">
            <img src="/assets/unknown.jpg" alt="" />
            <span>Jane Doe</span>
          </div>
          <div className="friendInfo">
            <img src="/assets/unknown.jpg" alt="" />
            <span>Jane Doe</span>
          </div>
          <div className="friendInfo">
            <img src="/assets/unknown.jpg" alt="" />
            <span>Jane Doe</span>
          </div>
        </div>
        <div className="friendReqs">
          <span className="blockTitle">Friend Requests</span>
          <div className="reqCard">
            <div className="friendInfo">
              <img src="/assets/unknown.jpg" alt="" />
              <span>Den Member#1</span>
            </div>
            <div className="buttons">
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
          <div className="reqCard">
            <div className="friendInfo">
              <img src="/assets/unknown.jpg" alt="" />
              <span>Den Member#1</span>
            </div>
            <div className="buttons">
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
          <div className="reqCard">
            <div className="friendInfo">
              <img src="/assets/unknown.jpg" alt="" />
              <span>Den Member#1</span>
            </div>
            <div className="buttons">
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

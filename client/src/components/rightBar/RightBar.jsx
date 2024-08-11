import { useQuery } from "react-query";
import Tweet from "../Tweet/Tweet";
import "./rightBar.scss";
import { useContext, useState, useEffect } from "react";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const RightBar = () => {
  const { user: currentUser } = useContext(AuthContext);

  const [followType, setFollowType] = useState("following");
  const [user, setUser] = useState(currentUser);

  const path = useLocation().pathname;
  const pathUser = path.split("/")[1]?.substring(1);

  useEffect(() => {
    if (path === "profile" && pathUser) {
      setUser(pathUser);
    } else {
      setUser(currentUser);
    }
  }, [path, pathUser, currentUser]);

  const { isLoading, error, data } = useQuery(
    ["relationships", user, followType],
    async () => {
      try {
        const res = await makeRequest.get(
          `/relationships/${user}?followType=${followType}`
        );
        console.log(
          "relationships query result returned from useQuery: " + res.data
        );
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );

  console.log("relationship data: " + data);

  /* does not need a catch part because query only executes when data is available */
  const {
    data: relatedUsers,
    isLoading: relatedUsersLoading,
    error: relatedUsersError,
  } = useQuery(
    ["relatedUsers", data],
    async () => {
      if (!data || data.length === 0) {
        throw new Error(
          "No relationship data available to fetch related users."
        );
      }

      try {
        const usersData = await Promise.all(
          data?.map(async (relation) => {
            const res = await makeRequest.get(`/users/find/${relation[0]}`);
            console.log("user data: ", res.data);
            return res.data;
          })
        );
        return usersData;
      } catch (error) {
        console.error("Error fetching related users:", error);
        throw error;
      }
    },
    {
      enabled: !!data, // Only fetch when `data` is available
    }
  );

  return (
    <div className="rightBar">
      <div className="container">
        <div className="newsWrapper">
          <span className="blockTitle">Chatter on the Den</span>
          <div className="tweetHolder">
            <Tweet
              accountHolder={"AccountHolder#1"}
              holderEmail={"CDUser@emai.com"}
              tweetText={"Sample Tweet"}
              tweetTag={"Test"}
            />
            <Tweet
              accountHolder={"AccountHolder#2"}
              holderEmail={"CDUser2@emai.com"}
              tweetText={"Random political opinion by a 9-5 employee"}
              tweetTag={"Test"}
            />
          </div>
        </div>
        <div className="onlineFriends">
          <span className="blockTitle">Followed Friends</span>
          <div>
            {relatedUsersLoading ? (
              <div>Loading...</div>
            ) : (
              relatedUsers?.map((follower) => (
                <div className="friendInfo" key={follower.id}>
                  <img
                    src={
                      follower.profilePic
                        ? follower.profilePic
                        : "/assets/unknown.jpg"
                    }
                    alt=""
                  />
                  <span>{follower.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="friendReqs">
          <span className="blockTitle">Follow Requests</span>
          <div className="reqCard">
            <div className="friendInfo">
              <img src="/assets/unknown.jpg" alt="" />
              <span>Den Member#1</span>
            </div>
            <button>Follow back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

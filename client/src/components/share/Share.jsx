import { useContext, useState } from "react";
import "./share.scss";
import { AuthContext } from "../../context/AuthContext";
import { Image, Person, Place } from "@mui/icons-material";
import { useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";

const Share = () => {
  const [file, setFile] = useState(null);
  const [des, setDes] = useState("");

  const { user: currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        //dont get why the [] surrounding posts
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ des });
  };

  return (
    <div className="share">
      <div className="container">
        <div className="mainContent">
          <div className="postContent">
            <img src={currentUser.profilePic} alt="" />
            <input
              type="text"
              className="postText"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDes(e.target.value)}
            />
          </div>
          <div className="glassHolder">
            <img src="/assets/glass.gif" alt="" />
          </div>
        </div>
        <div className="bottomBar">
          <div className="attachments">
            <div className="item">
              <label htmlFor="file"></label>
              <Image />
              <span>Add Image</span>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="item">
              <Place />
              <span>Add Location</span>
            </div>
            <div className="item">
              <Person />
              <span>Tag a friend</span>
            </div>
            <button onClick={handleClick}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

import { useContext, useState } from "react";
import "./share.scss";
import { AuthContext } from "../../context/AuthContext";
import { Cancel, Image, Person, Place } from "@mui/icons-material";
import { useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import { uploadImage } from "../../uploadImage";

const Share = () => {
  const [file, setFile] = useState(null);
  const [des, setDes] = useState("");

  const { user: currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  /*   try {
    const imgURL = await uploadImage(file, `post images/${user.username}`); // Get the image download URL
    const newPost = {
      userId: user._id,
      description: desc.current.value,
      img: imgURL, // Set the download URL in the newPost object
    };

    await axios.post("http://localhost:8080/posts", newPost);
    alert("Post uploaded successfully");
    window.location.reload();
  } catch (error) {
    console.log(error);
    alert("Error uploading post");
  } */

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const imgURL = await uploadImage(file, `post images/${currentUser.name}`); // Get the image download URL
      mutation.mutate({ des, img: imgURL });
      alert("Post uploaded successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Error uploading post");
    }
  };

  return (
    <div className="share">
      <div className="container">
        <div className="mainContent">
          <div className="postContent">
            <img src={currentUser.profilePic} alt="" />
            <textarea
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
        {file && (
          <>
            <Cancel onClick={() => setFile(null)} />
            <div className="shareImgPreviewContainer">
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="imgPreview"
              ></img>
            </div>
          </>
        )}
        <hr />
        <div className="bottomBar">
          <div className="attachments">
            <div className="item">
              <label htmlFor="file" style={{ cursor: "pointer" }}>
                <Image />
                <span>Add Image</span>
                <input
                  type="file"
                  id="file"
                  accept=".png, .jpg, .jpeg, .gif, .webp"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
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

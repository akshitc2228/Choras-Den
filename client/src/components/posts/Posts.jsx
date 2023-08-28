import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );

  return (
    <div className="posts">
      {error ? (
        <span style={{ color: "white" }}>
          Something went wrong. Please try again in a while
        </span>
      ) : isLoading ? (
        <span style={{ color: "white" }}>Loading...</span>
      ) : (
        data.map((post) => <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;

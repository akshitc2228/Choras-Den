import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  const posts = [
    {
      id: 2,
      userId: 2,
      name: "Jane Doe",
      profilePic: "/assets/jane-doe.jpg",
      img: "/assets/sample_post_img.webp",
      desc: "this is a random post by Jane Doe",
    },
    {
      id: 3,
      userId: 2,
      name: "Jane Doe",
      profilePic: "/assets/jane-doe.jpg",
      img: "/assets/sample_post_img.webp",
      desc: "this is another random post by Jane Doe",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;

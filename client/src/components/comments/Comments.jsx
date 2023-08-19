import "./comments.scss";

const Comments = () => {
  //TEMP
  const comments = [
    {
      id: 1,
      desc: "⏁⊑⟒ ⌿⌰⟒⏃⌇⏃⋏⏁ ⊑⍜⎍⍀⌇ ⎎⌰⊬ ⏚⊬ ⋔⎍☊⊑ ⏁⍜⍜ ⌇⍜⍜⋏",
      name: "Mighty Jabba",
      userId: 3,
      profilePic: "/assets/mightyJabba.jpeg",
    },
    {
      id: 2,
      desc: "Shepard someone leaked stuff from our Ilos mission report",
      name: "Garrus Vakarian",
      userId: 4,
      profilePic: "/assets/garrus.jpg",
    },
    {
      id: 3,
      desc: "Damn it Wong!",
      name: "Commander Shepard",
      userId: 5,
      profilePic: "/assets/shepard.jpeg",
    },
  ];

  return (
    <div className="comments">
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">moments ago...</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;

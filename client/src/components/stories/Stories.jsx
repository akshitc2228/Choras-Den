import { useContext } from "react"
import "./stories.scss"
import { AuthContext } from "../../context/AuthContext"

const Stories = () => {

const {user: currUser} = useContext(AuthContext);

//ADDING TEMPORARY DUMY DATA:
const stories = [
    {
        id:1,
        name:"John Doe",
        img:"/assets/random_story_img.jpeg"
    },
    {
        id:1,
        name:"John Doe",
        img:"/assets/random_story_img.jpeg"
    },
    {
        id:1,
        name:"John Doe",
        img:"/assets/random_story_img.jpeg"
    },
    {
        id:1,
        name:"John Doe",
        img:"/assets/random_story_img.jpeg"
    },
]

  return (
    <div className="stories">
      <div className="story">
        <img src={currUser.profilePic} alt="" />
        <span>{currUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories

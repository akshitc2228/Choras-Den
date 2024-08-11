import { error } from "console";
import { makeRequest } from "./client/src/axios";

const [ followType, setFollowType ] = useState(" ");

const {error, data} = useQuery(["relationships"], (followType) => {
    makeRequest.get("/userId/relationships").then((relationshipData) => {
        return relationshipData.data;
    }).catch(error);
});

<button onClick={fetchRelationShips(setFollowType("following"))}>Show followed users</button>;
<button onClick={fetchRelationShips(setFollowType("followers"))}>Show followers</button>;

fetchRelationsips = (followType) => {
    //I'm probably going in circles now;
}




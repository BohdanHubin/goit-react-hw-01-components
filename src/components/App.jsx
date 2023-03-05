import Profile from "./Profile/Profile";
import user from "../user.json"

export const App = () => {
  return (
    <Profile
      key="1"
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

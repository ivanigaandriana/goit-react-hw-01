import userData from "../userdata.json";
import Profile  from "./components/Profile/Profile/Profile";
import friends from "../friends.json";
import FriendsList from "./components/Profile/FriendsList/FriendsList";
import transactions from "../transaction.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";



const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;

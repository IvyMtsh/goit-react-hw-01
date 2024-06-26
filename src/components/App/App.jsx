import "./App.css";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "/src/userData.json";
import friends from "/src/friends.json";
import transactions from "/src/transactions.json";

const App = () => {
  return (
    <>
      <div className="container">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        ></Profile>
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;

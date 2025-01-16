import React from "react";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <div className="App">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

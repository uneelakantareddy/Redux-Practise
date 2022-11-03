import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
import React from "react";

function App() {
  const isauthorised = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  return (
    <React.Fragment>
      <Header />
      {!isauthorised && <Auth />}
      {isauthorised && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;

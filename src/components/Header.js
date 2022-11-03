import "./Header.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../store";

const Header = () => {
  const isauthorised = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
    console.log("logout executed");
  };
  console.log("is authorised", isauthorised);
  return (
    <header className="header">
      <h1>Redux</h1>
      {isauthorised && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

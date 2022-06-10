import logo from "../../assets/argentBankLogo.png";
import userIcon from "../../assets/icon-user.png";
import logoutIcon from "../../assets/icon-logout.png";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/slices/loginSlice";

/**
 * Header function
 * @returns the header component
 */
const Header = () => {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
  const firstName = useAppSelector((state) => state.user.firstName);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  /**
   * Click Handler contains tasks to perform after a click event
   */
  const clickHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header>
      <nav
        className="flex items-center justify-between px-5
      py-1 "
      >
        <Link className="flex items-center" to="/">
          <img
            className="w-full max-w-[200px]"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="flex items-center">
          <Link to="/user" className="flex">
            <img src={userIcon} alt="User Icon" className="h-6 w-6" />
            {isLoggedIn ? <div className="mr-6">{firstName}</div> : ""}
          </Link>
          <div className="mr-2 flex flex-wrap items-center font-bold hover:underline">
            {isLoggedIn ? (
              <div className="flex items-center" onClick={clickHandler}>
                <img src={logoutIcon} alt="Log Out Icon" className=" h-6 w-6" />
                Sign out
              </div>
            ) : (
              <Link to="/login">
                {" "}
                <div>Sign In</div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

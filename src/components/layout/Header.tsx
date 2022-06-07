import logo from "../../assets/argentBankLogo.png";
import userIcon from "../../assets/icon-user.png";
import logoutIcon from "../../assets/icon-logout.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const isUserPage = pathname === "/user";

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
          <img src={userIcon} alt="User Icon" className="h-6 w-6" />
          {isUserPage ? <div className="mr-4">Tony</div> : ""}
          <Link
            className="mr-2 flex flex-wrap items-center font-bold hover:underline"
            to="/login"
          >
            {isUserPage ? (
              <div className="flex items-center">
                <img src={logoutIcon} alt="Log Out Icon" className=" h-6 w-6" />
                Sign out
              </div>
            ) : (
              "Sign In"
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

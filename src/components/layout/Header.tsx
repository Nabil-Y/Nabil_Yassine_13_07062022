import logo from "../../assets/argentBankLogo.png";
import userIcon from "../../assets/icon-user.png";
import { Link } from "react-router-dom";

const Header = () => {
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
        <>
          <Link
            className="mr-2 flex flex-wrap items-center font-bold hover:underline"
            to="/login"
          >
            <img src={userIcon} alt="User Icon" className="h-8 w-8" />
            Sign In
          </Link>
        </>
      </nav>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Dashboard</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link to={"/new"} className="mr-5 hover:text-gray-900">
            New
          </Link>
          <Link to={"/login"} className="mr-5 hover:text-gray-900">
            Login
          </Link>
          <Link to={"/register"} className="mr-5 hover:text-gray-900">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

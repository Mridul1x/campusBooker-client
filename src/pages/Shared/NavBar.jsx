import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUniversity, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { loading, user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logout()
      .then((user) => {
        if (!user) {
          toast.success("Successfully logged out.");
        }
        navigate(location.pathname, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
    fetch(
      `https://campus-booker-server.vercel.app/colleges?search=${encodeURIComponent(
        searchTerm
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Search Results:", data);
        setSearchResults(data);
        navigate("/colleges", { state: { searchResults: data } });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="/mycolleges">My Colleges</Link>
      </li>
    </>
  );

  return (
    <nav className="navbar h-16 bg-base-100/80 fixed top-0 left-0 z-[100] shadow-xl border-b border-white/30 backdrop-blur-2xl">
      <nav className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost font-bold normal-case text-xl">
          Campus Booker
        </Link>
      </nav>

      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        <div className="bg-slate-400 py-2 px-3 rounded-2xl flex items-center justify-center">
          <FaUniversity className="text-slate-300 w-5 h-5 mb-1"></FaUniversity>
          <input
            type="text"
            placeholder="Search for a college name"
            className="rounded-xl ps-2 pe-6 outline-none bg-transparent text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key == "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="btn-sm btn glass  text-white "
          >
            <FaSearch></FaSearch>
          </button>
        </div>
      </nav>

      <nav className="navbar-end gap-3 items-center">
        {loading ? (
          <span className="loading loading-dots loading-md me-2"></span>
        ) : user ? (
          <>
            <div
              className="tooltip tooltip-left tooltip-accent h-12 w-12 group"
              data-tip={user.displayName}
            >
              <Link to="/profile">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  width={50}
                  height={50}
                  className="w-full h-full object-cover rounded-full"
                />
              </Link>
            </div>
            <button onClick={handleLogOut} className="btn btn-error ">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-accent">
            Login
          </Link>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;

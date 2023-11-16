import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(true);
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
        <Link to="/my colleges">My Colleges</Link>
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
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Campus Booker
        </Link>
      </nav>

      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </nav>

      <nav className="navbar-end gap-3 items-center">
        {user && (
          <div
            className="tooltip tooltip-left tooltip-accent h-12 w-12 group"
            data-tip={user.name}
          >
            <Link to="/profile">
              <img
                src={user.image}
                alt={user.name}
                width={50}
                height={50}
                priority
                className="w-full h-full object-cover rounded-full"
              />
            </Link>
          </div>
        )}

        {user && (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}

        {!user && <button className="btn btn-primary">Logout</button>}
      </nav>
    </nav>
  );
};

export default Navbar;

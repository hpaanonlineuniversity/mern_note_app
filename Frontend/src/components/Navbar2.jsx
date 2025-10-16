import { Link } from 'react-router';
import { HomeIcon, PlusIcon, LogIn, User, Notebook } from 'lucide-react';

const Navbar2 = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl gap-2">
          <Notebook className="size-6 text-primary" />
          NotesApp
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <Link to="/" className="flex items-center gap-2">
              <HomeIcon className="size-4" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className="flex items-center gap-2">
              <PlusIcon className="size-4" />
              Create Note
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <Link to="/login" className="btn btn-ghost gap-2">
          <LogIn className="size-4" />
          Login
        </Link>
        <Link to="/register" className="btn btn-primary gap-2">
          <User className="size-4" />
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;
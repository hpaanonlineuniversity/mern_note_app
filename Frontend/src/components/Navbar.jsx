import { Link } from 'react-router';
import { HomeIcon, PlusIcon, Notebook } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <Link to="/">
          <Notebook className="size-9" />
        </Link>
        <Link to="/">
          <h1 className='text-2xl font-bold'>Notes App</h1>
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

    </div>
  );
};

export default Navbar;
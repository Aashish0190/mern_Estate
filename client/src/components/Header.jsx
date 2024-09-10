import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-500 via-blue-700 to-blue-900 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4 flex-wrap">
        <h1 className="font-bold text-3xl flex flex-wrap items-center">
          <Link to="/" className="flex items-center">
            <span className="text-white">Real</span>
            <span className="text-indigo-300 ml-2">Estate</span>
          </Link>
        </h1>

        <form className="bg-gray-800 p-2 rounded-full flex items-center shadow-inner w-full max-w-md mt-4 sm:mt-0 sm:max-w-xs lg:max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full text-gray-300 px-3"
          />
          <FaSearch className="text-indigo-400 ml-2 hover:text-indigo-500 transition duration-300" />
        </form>

        <ul className="flex gap-6 mt-4 sm:mt-0 items-center">
          <li className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
            <Link to="/sign-in">Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

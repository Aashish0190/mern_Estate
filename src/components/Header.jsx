import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-400 to-blue-300 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <h1 className="font-bold text-2xl flex flex-wrap">
          <Link to="/" className="flex items-center">
            <span className="text-white">Real</span>
            <span className="text-gray-900 ml-1">Estate</span>
          </Link>
        </h1>
        
        <form className="bg-white p-2 rounded-full flex items-center shadow-md">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent focus:outline-none w-32 sm:w-64 text-gray-700 px-2" 
          />
          <FaSearch className="text-teal-500 ml-2 hover:text-blue-500 transition duration-300"/>
        </form>

        <ul className="flex gap-6">
          <li className="text-white hover:text-gray-900 font-medium transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-900 font-medium transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white hover:text-gray-900 font-medium transition duration-300">
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

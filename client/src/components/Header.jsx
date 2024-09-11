import { FaSearch } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export default function Header() {
  const { currentuser } = useSelector(state => state.user); 
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-gradient-to-r from-teal-500 via-blue-700 to-blue-900 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4 flex-wrap">
        <h1 className="font-bold text-3xl flex flex-wrap items-center">
          <Link to="/" className="flex items-center">
            <span className="text-white">Real</span>
            <span className="text-indigo-300 ml-2">Estate</span>
          </Link>
        </h1>

        <form onSubmit={handleSubmit}
        className="bg-gray-800 p-2 rounded-full flex items-center shadow-inner w-full max-w-md mt-4 sm:mt-0 sm:max-w-xs lg:max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full text-gray-300 px-3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button><FaSearch className="text-indigo-400 ml-2 hover:text-indigo-500 transition duration-300" /></button>
        </form>

        <ul className="flex gap-6 mt-4 sm:mt-0 items-center">
          <Link to="/">
            <li className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300">
              About
            </li>
          </Link>

          {/* Conditional rendering for Profile or Sign-in */}
          <Link to={currentuser ? '/profile' : '/sign-in'}>
            {currentuser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentuser.avatar}  // Make sure avatar exists in user object
                alt="profile"
              />
            ) : (
              <li className="text-gray-200 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

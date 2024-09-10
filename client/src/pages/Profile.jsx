import { useSelector } from 'react-redux';

export default function Profile() {
  const { currentuser } = useSelector((state) => state.user); // Correct capitalization here

  // Add a check if currentUser exists before rendering the form
  if (!currentuser) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        {/* Add a fallback for avatar in case it's undefined */}
        <img
          src={currentuser.avatar || 'default-avatar-url.jpg'} // Use a default avatar if currentuser.avatar is missing
          alt="profile"
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        <input
          type='text'
          placeholder='username'
          id='username'
          className='border p-3 rounded-lg'
          defaultValue={currentuser.name} // Populate with currentUser data
        />
        <input
          type='text'
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
          defaultValue={currentuser.email} // Populate with currentUser data
        />
        <input
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>
          Update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
}

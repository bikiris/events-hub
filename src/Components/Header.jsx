import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-blue-200 w-full'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='h-8 text-red-500'>Events Hub</span>
          </Link>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <Link
            to='/events'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            All Events
          </Link>

          <Link
            to='/create'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Create Event
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-[#1D3557] w-full'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='h-8 text-[#E63946]'>Events Hub</span>
          </Link>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <Link
            to='/events'
            className='text-sm font-semibold leading-6 text-white-900'
          >
            All Events
          </Link>

          <Link
            to='/create'
            className='text-sm font-semibold leading-6 text-white-900'
          >
            Create Event
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

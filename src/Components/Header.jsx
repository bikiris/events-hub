import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-200 w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="h-8 text-red-500">EVENT TITLE</span>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/events" className="text-sm font-semibold leading-6 text-gray-900">
                        All Events
                    </Link>

                    <Link to="/create" className="text-sm font-semibold leading-6 text-gray-900">
                        Create Event
                    </Link>

                    <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Marketplace
                    </Link>
                    
                    <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Company
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;

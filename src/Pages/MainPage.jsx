import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div className='w-full relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 flex items-center lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 flex flex-col items-start gap-8'>
            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Meet new people sharing your interests
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <Link
              to={`/events`}
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded flex items-center'
              role='button'
            >
              View All Events
              <svg
                className='h-5 w-5 ml-2'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 12H20M20 12L16 8M20 12L16 16'
                  stroke='#000000'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>

          <div className='mx-auto max-w-2xl lg:mx-0'>
            <img
              src='https://cdn.pixabay.com/photo/2018/03/21/06/30/community-3245739_960_720.png'
              alt='People meeting'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;

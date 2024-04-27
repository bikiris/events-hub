import { useNavigate } from 'react-router-dom';

const EventForm = ({ id, handleSubmit, event }) => {
  const navigate = useNavigate();
  
  return (
    <form onSubmit={handleSubmit} className="max-w-7xl min-w-5xl">
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-6'>
              <label
                htmlFor='eventName'
                className='block text-sm font-medium leading-6'
              >
                Event Name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='eventName'
                  id='eventName'
                  autoComplete='eventName'
                  defaultValue={event?.name}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='eventDescription'
                className='block text-sm font-medium leading-6'
              >
                Event Description
              </label>
              <div className='mt-2'>
                <textarea
                  id='eventDescription'
                  name='eventDescription'
                  rows={3}
                  className='block w-full rounded-md border-0 py-1.5 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={event?.description}
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='eventDate'
                className='block text-sm font-medium leading-6'
              >
                Event Date
              </label>
              <div className='mt-2'>
                <input
                  type='date'
                  name='eventDate'
                  id='eventDate'
                  autoComplete='eventDate'
                  defaultValue={event?.date}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='eventTime'
                className='block text-sm font-medium leading-6'
              >
                Event Time
              </label>
              <div className='mt-2'>
                <input
                  type='time'
                  name='eventTime'
                  id='eventTime'
                  autoComplete='eventTime'
                  defaultValue={event?.time}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6'
              >
                Email
              </label>
              <div className='mt-2'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6'
              >
                Password
              </label>
              <div className='mt-2'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  autoComplete='current-password'
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-6'>
              <h2 className='mt-10 text-base font-semibold leading-7'>
                Event Location
              </h2>
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='street-address'
                className='block text-sm font-medium leading-6'
              >
                Street address
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='street-address'
                  id='street-address'
                  autoComplete='street-address'
                  defaultValue={event?.street}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='city'
                className='block text-sm font-medium leading-6'
              >
                City
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  autoComplete='address-level2'
                  defaultValue={event?.city}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='region'
                className='block text-sm font-medium leading-6'
              >
                State / Province
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='region'
                  id='region'
                  autoComplete='address-level1'
                  defaultValue={event?.state}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium leading-6'
              >
                ZIP / Postal code
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='postal-code'
                  id='postal-code'
                  autoComplete='postal-code'
                  defaultValue={event?.zip}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button type='button' className='rounded-md bg-[#E63946] px-3 py-2 text-sm font-semibold text-white hover:bg-[#d62936] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2' onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EventForm;
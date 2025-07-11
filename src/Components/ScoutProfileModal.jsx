import React from "react";

const ScoutProfileModal = ({ scout, onClose }) => {
  if (!scout) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg'>
        {/* Header */}
        <div className='flex items-center gap-4 mb-4'>
          <img
            src='https://via.placeholder.com/80'
            alt='Scout Profile'
            className='w-20 h-20 rounded-full object-cover'
          />
          <div>
            <h2 className='text-xl font-semibold'>{scout.name}</h2>
            <span className='text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full'>
              Pending Approval
            </span>
          </div>
        </div>

        {/* Info */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4'>
          <p>
            <strong>Email:</strong> {scout.email}
          </p>
          <p>
            <strong>Organisation:</strong> Youth Development, Midfielders
          </p>
          <p>
            <strong>Phone:</strong> {scout.phone}
          </p>
          <p>
            <strong>Country:</strong> United Kingdom
          </p>
          <p>
            <strong>Region:</strong> Manchester
          </p>
        </div>

        {/* Bio */}
        <div className='mb-4'>
          <p className='text-sm font-medium mb-1'>Purpose of Use / Bio</p>
          <div className='bg-gray-50 p-3 rounded-lg text-sm text-gray-700'>
            I've been working in football scouting for 8 years, specializing in
            identifying young talent with a focus on technical midfielders. My
            background as a former academy player gives me unique insights into
            player development pathways. <br />
            <br />
            Previously worked with Manchester City's youth development program
            for 3 years, followed by 5 years as an independent scout covering
            matches across Europe. I have a strong network of contacts in Spain,
            Portugal and the UK. <br />
            <br />I hold a UEFA B coaching license and have completed the FA’s
            Talent Identification program.
          </div>
        </div>

        {/* Document Section */}
        <div className='mb-6'>
          <p className='text-sm font-medium mb-2'>Credentials & Documents</p>
          <div className='border rounded-lg p-3 flex justify-between items-center'>
            <div>
              <p className='text-sm font-semibold'>Identity Proof</p>
              <p className='text-xs text-gray-500'>
                PDF Document • Uploaded on Apr 20, 2025
              </p>
            </div>
            <a href='#' className='text-purple-700 text-xl'>
              &#8595;
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex justify-end gap-3'>
          <button
            onClick={onClose}
            className='bg-gray-200 px-4 py-2 rounded-md text-sm font-medium'
          >
            Close
          </button>
          <button className='bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm font-medium'>
            Reject Application
          </button>
          <button className='bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium'>
            Approve Scout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoutProfileModal;

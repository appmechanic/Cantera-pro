import React from "react";
import { FaTimes, FaEdit, FaEye } from "react-icons/fa";

const ExternalPlayerProfile = ({ player, onClose }) => {
  const dummyMatchData = [
    {
      date: "Apr 22, 2025",
      competition: "U18 Premier League",
      opponent: "Liverpool U18",
      goals: 1,
      assists: 2,
      finalScore: "3-1 (Win)",
    },
    {
      date: "Apr 15, 2025",
      competition: "FA Youth Cup",
      opponent: "Chelsea U18",
      goals: 0,
      assists: 1,
      finalScore: "2-2 (Draw)",
    },
    {
      date: "Apr 8, 2025",
      competition: "U18 Premier League",
      opponent: "Arsenal U18",
      goals: 2,
      assists: 0,
      finalScore: "4-0 (Win)",
    },
  ];

  if (!player) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center'>
      <div className='bg-white w-[90%] max-w-6xl rounded-lg shadow-xl p-6 overflow-y-auto max-h-[95vh] relative'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl'
        >
          <FaTimes />
        </button>

        <div className='mb-4'>
          <h2 className='text-xl font-semibold text-gray-800'>
            External Player Profile
          </h2>
          <p className='text-sm text-gray-500'>
            View and manage player information
          </p>
        </div>

        {/* Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          {/* Personal Info */}
          <div className='bg-gray-50 rounded-lg p-4 border'>
            <h4 className='font-semibold text-sm mb-2 text-gray-700'>
              Personal Information
            </h4>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Full Name:</strong> Alexander Robertson
              </p>
              <p>
                <strong>Email ID:</strong> alex.robertson@gmail.com
              </p>
              <p>
                <strong>Country:</strong> England
              </p>
              <p>
                <strong>State:</strong> Manchester
              </p>
              <p>
                <strong>Age / Birth Year:</strong> 17 years / 2008
              </p>
              <p>
                <strong>Category / Position:</strong> U-19 / Central Midfielder
              </p>
              <p>
                <strong>Coach:</strong> Alex Mill
              </p>
              <p>
                <strong>Current Club:</strong> Manchester City Academy
              </p>
            </div>
          </div>

          {/* Subscription Info */}
          <div className='bg-gray-50 rounded-lg p-4 border md:col-span-1'>
            <h4 className='font-semibold text-sm mb-2 text-gray-700'>
              Subscription Details
            </h4>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Status:</strong>{" "}
                <span className='bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium'>
                  Subscribed
                </span>
              </p>
              <p>
                <strong>Subscription Type:</strong> Yearly
              </p>
              <p>
                <strong>Start Date:</strong> January 15, 2025
              </p>
              <p>
                <strong>End Date:</strong> January 15, 2026
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <div className='flex justify-end items-start md:col-span-1'>
            <button className='bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md text-sm'>
              <FaEdit className='inline-block mr-2' />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tabs Placeholder */}
        <div className='mb-4 border-b'>
          <ul className='flex gap-4 text-sm font-medium text-purple-700'>
            <li className='border-b-2 border-purple-700 pb-1'>Match History</li>
            <li className='text-gray-500'>Videos</li>
            <li className='text-gray-500'>Wellness Activity</li>
          </ul>
        </div>

        {/* Match History Table */}
        <div className='overflow-x-auto'>
          <table className='w-full text-sm text-left border'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-3 py-2 font-medium'>Date</th>
                <th className='px-3 py-2 font-medium'>Competition</th>
                <th className='px-3 py-2 font-medium'>Opponent</th>
                <th className='px-3 py-2 font-medium'>Goals</th>
                <th className='px-3 py-2 font-medium'>Assists</th>
                <th className='px-3 py-2 font-medium'>Final Score</th>
                <th className='px-3 py-2 font-medium'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyMatchData.map((match, i) => (
                <tr key={i} className='border-t'>
                  <td className='px-3 py-2'>{match.date}</td>
                  <td className='px-3 py-2'>{match.competition}</td>
                  <td className='px-3 py-2'>{match.opponent}</td>
                  <td className='px-3 py-2'>{match.goals}</td>
                  <td className='px-3 py-2'>{match.assists}</td>
                  <td className='px-3 py-2'>{match.finalScore}</td>
                  <td className='px-3 py-2 text-purple-700 cursor-pointer'>
                    <FaEye />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExternalPlayerProfile;

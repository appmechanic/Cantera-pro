import React from "react";
import { FaTimes, FaEdit, FaEye } from "react-icons/fa";

const ExternalProfessional = ({ professional, onClose }) => {
  const dummyHistory = [
    {
      date: "June 12, 2025",
      action: "Document Verified",
      performedBy: "Admin",
    },
    {
      date: "June 10, 2025",
      action: "Initial Submission",
      performedBy: "Professional",
    },
  ];

  if (!professional) return null;

  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center'>
      <div className='bg-white w-[90%] max-w-5xl rounded-xl shadow-lg p-6 overflow-y-auto max-h-[95vh] relative'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl'
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className='mb-4'>
          <h2 className='text-xl font-semibold text-gray-800'>
            External Professional Profile
          </h2>
          <p className='text-sm text-gray-500'>
            View and manage professional details
          </p>
        </div>

        {/* Profile Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          {/* Personal Info */}
          <div className='bg-gray-50 p-4 border rounded'>
            <h4 className='text-sm font-semibold text-gray-700 mb-2'>
              Personal Information
            </h4>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Name:</strong> {professional.name}
              </p>
              <p>
                <strong>Email:</strong> {professional.email}
              </p>
              <p>
                <strong>Phone:</strong> {professional.phone}
              </p>
              <p>
                <strong>Country:</strong> {professional.country || "N/A"}
              </p>
            </div>
          </div>

          {/* Professional Info */}
          <div className='bg-gray-50 p-4 border rounded'>
            <h4 className='text-sm font-semibold text-gray-700 mb-2'>
              Professional Details
            </h4>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Category:</strong> {professional.category}
              </p>
              <p>
                <strong>Verification:</strong>{" "}
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    professional.verification === "Approved"
                      ? "bg-green-100 text-green-700"
                      : professional.verification === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {professional.verification}
                </span>
              </p>
              <p>
                <strong>Stripe Status:</strong>{" "}
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    professional.stripe === "Connected"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {professional.stripe}
                </span>
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <div className='flex justify-end items-start'>
            <button className='bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md text-sm'>
              <FaEdit className='inline-block mr-2' />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className='mb-4 border-b'>
          <ul className='flex gap-6 text-sm font-medium text-purple-700'>
            <li className='border-b-2 border-purple-700 pb-1'>History</li>
            <li className='text-gray-400'>Documents</li>
            <li className='text-gray-400'>Stripe Activity</li>
          </ul>
        </div>

        {/* History Table */}
        <div className='overflow-x-auto'>
          <table className='w-full text-sm text-left border'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-3 py-2 font-medium'>Date</th>
                <th className='px-3 py-2 font-medium'>Action</th>
                <th className='px-3 py-2 font-medium'>Performed By</th>
                <th className='px-3 py-2 font-medium'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyHistory.map((entry, i) => (
                <tr key={i} className='border-t'>
                  <td className='px-3 py-2'>{entry.date}</td>
                  <td className='px-3 py-2'>{entry.action}</td>
                  <td className='px-3 py-2'>{entry.performedBy}</td>
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

export default ExternalProfessional;

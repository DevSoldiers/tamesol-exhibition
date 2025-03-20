'use client';

import BuyTickets from '@/_components/my-tickets/BuyTickets';
import MyTickets from '@/_components/my-tickets/myTickets';
import React, { useState } from 'react';

export default function MiniTicketPage({ cbeToken, phone }: { cbeToken: string; phone: string }) {
  const [showTicketList, setShowTicketList] = useState(false);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      {/* Image Section */}
      <div className="mt-4 w-full m-auto flex justify-center mt-7">
        <img src="CBE_LOGO_TRANSPARENT.png" alt="" className="w-48" />
      </div>

      <div className="flex justify-center mb-4 mt-5">
        <div className="flex items-center bg-gray-200 rounded-full p-1">
          <button
            onClick={() => setShowTicketList(false)}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ease-in-out ${
              !showTicketList
                ? 'bg-BroadcastChannel text-white'
                : 'bg-transparent text-gray-700 hover:bg-gray-300'
            }`}
          >
            Buy Ticket
          </button>
          <button
            onClick={() => setShowTicketList(true)}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ease-in-out ${
              showTicketList
                ? 'bg-BroadcastChannel text-white'
                : 'bg-transparent text-gray-700 hover:bg-gray-300'
            }`}
          >
            My Tickets
          </button>
        </div>
      </div>

      {!showTicketList ? (
        <BuyTickets cbeToken={cbeToken} phone={phone} />
      ) : (
        <MyTickets cbeToken={cbeToken} />
      )}
      <MobileModal cbeToken={cbeToken} phone={phone} />
    </div>
  );
}

const MobileModal = ({ cbeToken, phone }: { cbeToken: string; phone: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal Container */}
      <div className="bg-white rounded-lg w-10/12 max-w-xs p-6 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl"
        >
          ×
        </button>
        {/* Modal Content */}
        <div className="mt-4 text-center">
          <p className="text-gray-800 text-lg font-semibold mb-4">Token Successfully Received!</p>
          <ul className="space-y-3">
            <li className="bg-gray-100 p-3 rounded-lg flex flex-col items-start">
              <span className="block text-sm font-medium text-gray-500">Token</span>
              <span className="block text-gray-800 font-mono break-all">{cbeToken}</span>
            </li>
            <li className="bg-gray-100 p-3 rounded-lg flex flex-col items-start">
              <span className="block text-sm font-medium text-gray-500">Phone</span>
              <span className="block text-gray-800">{phone}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

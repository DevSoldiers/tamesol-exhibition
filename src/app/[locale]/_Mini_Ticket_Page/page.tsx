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

      {!showTicketList ? <BuyTickets cbeToken={cbeToken} phone={phone} /> : <MyTickets />}
    </div>
  );
}

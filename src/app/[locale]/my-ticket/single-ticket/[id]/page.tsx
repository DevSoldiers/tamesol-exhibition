'use client';

import { useQRCode } from 'next-qrcode';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyTickets() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ticketData, setTicketData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { Canvas } = useQRCode();

  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const params = useParams<{ id: string }>();
  const { id } = params;

  useEffect(() => {
    async function fetchTickets() {
      try {
        const response = await fetch(`${baseURL}/ticket/ticketByPaymentHistory/${id}`);
        const data = await response.json();

        if (data.status === 'SUCCESS' && data.data?.tickets?.length > 0) {
          setTicketData(data.data.tickets);
        } else {
          setTicketData([]);
        }
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setTicketData([]);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchTickets();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Tickets</h1>

      {loading ? (
        <p className="text-gray-500">Loading tickets...</p>
      ) : ticketData && ticketData.length > 0 ? (
        <div className="w-full max-w-2xl space-y-4">
          {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          ticketData?.map((ticket: any) => (
            <div
              key={ticket._id}
              className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-4"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-md">
                <Canvas
                  text={ticket._id}
                  options={{
                    errorCorrectionLevel: 'M',
                    margin: 2,
                    scale: 4,
                    width: 100,
                    color: { dark: '#000', light: '#FFFFFF' },
                  }}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-700">{ticket.event.title}</h2>
                <p className="text-gray-500 text-sm">
                  Lottery Number: <span className="font-medium">{ticket.lotteryNumber}</span>
                </p>
                <p className="text-gray-500 text-sm">
                  Price: <span className="font-medium">${ticket.event.price}</span>
                </p>
                <p
                  className={`text-sm font-medium ${ticket.paymentHistory.status === 'success' ? 'text-green-600' : 'text-red-600'}`}
                >
                  Payment: {ticket.paymentHistory.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No Ticket Found</p>
      )}
    </div>
  );
}

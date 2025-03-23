'use client';

// import QRDownloadable from '@/_components/QRDownload';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export default function MyTickets() {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [ticketData, setTicketData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   const baseURL = process.env.NEXT_PUBLIC_API_URL;
//   const params = useParams<{ id: string }>();
//   const { id } = params;

//   useEffect(() => {
//     async function fetchTickets() {
//       try {
//         const response = await fetch(`${baseURL}/ticket/ticketByPaymentHistory/${id}`);
//         const data = await response.json();

//         if (data.status === 'SUCCESS' && data.data?.tickets?.length > 0) {
//           setTicketData(data.data.tickets);
//         } else {
//           setTicketData([]);
//         }
//       } catch (error) {
//         console.error('Error fetching tickets:', error);
//         setTicketData([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (id) fetchTickets();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">My Tickets</h1>

//       {loading ? (
//         <p className="text-gray-500">Loading tickets...</p>
//       ) : ticketData && ticketData.length > 0 ? (
//         <div className="w-full max-w-2xl space-y-4">
//           {// eslint-disable-next-line @typescript-eslint/no-explicit-any
//           ticketData?.map((ticket: any) => (
//             <div
//               key={ticket._id}
//               className="relative bg-white shadow-lg p-6 rounded-xl flex items-center space-x-6 w-full"
//             >
//               <QRDownloadable id={ticket._id} />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-600">No Ticket Found</p>
//       )}
//     </div>
//   );
// }
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQRCode } from 'next-qrcode';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyTickets() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ticketData, setTicketData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const params = useParams<{ id: string }>();
  const { id } = params;
  const { Canvas } = useQRCode();

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
        <div className="w-full max-w-2xl space-y-4 relative">
          {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          ticketData?.map((ticket: any) => (
            <div
              key={ticket._id}
              className="relative bg-white shadow-lg h-48 md:h-60 rounded-xl flex items-center space-x-6 w-full"
            >
              <Image src={'/TICKETS@4x.png'} alt="" fill />
              <div className="absolute z-40 right-0 top-2">
                <Canvas text={id || 'https://example.com'} options={{ width: 130, margin: 2 }} />
              </div>
              {/* <QRDownloadable id={ticket._id} /> */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No Ticket Found</p>
      )}
    </div>
  );
}

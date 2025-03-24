import { TTicketList, TTicketListResponse } from '@/_types/payment.interface';
import api from '@/lib/services.api';
import { useQRCode } from 'next-qrcode';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MyTickets({ cbeToken }: { cbeToken: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [tickets, setTickets] = useState<TTicketList>();
  const { Canvas } = useQRCode();

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    const fetchData = async () => {
      try {
        if (isMounted) {
          const res: TTicketListResponse = await api.post('/ticket/myTicketsInMiniApp', {
            token: cbeToken,
          });

          setTickets(res?.data?.data?.tickets);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setLoading(false);
          console.error('Error fetching tickets:', error);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {/* <Canvas
        text={`ticketId`}
        options={{
          errorCorrectionLevel: 'M',
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: '#35353a',
            light: '#F3F4F6',
          },
        }}
      /> */}
      <div className="w-full max-w-2xl space-y-4 relative">
        {loading ? (
          <h1>...loading</h1>
        ) : tickets && tickets?.length > 0 ? (
          tickets?.map((ticket) => (
            <div
              key={ticket._id}
              className="relative bg-white shadow-lg h-48 md:h-60 rounded-xl flex items-center space-x-6 w-full"
            >
              <Image src={'/TICKETS@4x.png'} alt="" fill />
              <div className="absolute z-40 right-0 top-2">
                <Canvas
                  text={`https://www.addisnegerexpo.com/${ticket._id}` || 'https://example.com'}
                  options={{ width: 130, margin: 2 }}
                />
              </div>
              {/* <QRDownloadable id={ticket._id} /> */}
            </div>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </>
  );
}

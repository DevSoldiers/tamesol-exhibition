import { TTicketList, TTicketListResponse } from '@/_types/payment.interface';
import api from '@/lib/services.api';
import { useQRCode } from 'next-qrcode';
import { useEffect, useState } from 'react';

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
      <Canvas
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
      />
      {loading ? (
        <h1>...loading</h1>
      ) : tickets && tickets?.length > 0 ? (
        tickets?.map((ticket) => <h1 key={ticket.user._id}>{ticket.user.phoneNumber}</h1>)
      ) : (
        <h1>No data found</h1>
      )}
    </>
  );
}

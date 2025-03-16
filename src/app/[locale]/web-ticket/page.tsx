import WebTicketPage from '@/_components/TicketPage/webTicket';
import { NextPage } from 'next';

interface WebTicketProps {
  searchParams: {
    ticket?: string;
  };
}

const WebTicket: NextPage<WebTicketProps> = ({ searchParams }) => {
  const { ticket } = searchParams ?? {};
  return (
    <div className="bg-orange-300 -mt-[95px]">
      <WebTicketPage isTsomFest={ticket === 'የፆም ፌስት'} />
    </div>
  );
};

export default WebTicket;
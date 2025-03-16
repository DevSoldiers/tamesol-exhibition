import WebTicketPage from '@/_components/TicketPage/webTicket';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WebTicket({ searchParams }: { searchParams: any }) {
  const ticket = searchParams.ticket ?? '';

  return (
    <div className="bg-orange-300 -mt-[95px]">
      <WebTicketPage isTsomFest={ticket === 'የፆም ፌስት'} />
    </div>
  );
}

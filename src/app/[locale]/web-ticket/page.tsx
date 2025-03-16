import WebTicketPage from '@/_components/TicketPage/webTicket';

export default async function WebTicket({ searchParams }: { searchParams: { ticket: string } }) {
  const param = await searchParams;
  const { ticket } = param ?? {};
  return (
    <div className="bg-orange-300 -mt-[95px]">
      <WebTicketPage isTsomFest={ticket == 'የፆም ፌስት'} />
    </div>
  );
}

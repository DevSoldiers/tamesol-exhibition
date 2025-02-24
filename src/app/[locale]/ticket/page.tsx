import Container from '@/_components/Container';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Ticket() {
  const t = useTranslations();
  const ticket_content = t.raw('ticket_page');

  return (
    <Container className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-background p-8 mt-0 md:-mt-24">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src="/gift-image.png"
          alt="Gift Box"
          width={400}
          height={400}
          className="rounded-lg shadow-2xl"
        />
      </div>

      <div className="w-full md:w-1/2 bg-card p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-foreground mb-6">
          {ticket_content.title}
          <br />
          <span className="text-2xl text-secondarybrand">{ticket_content.subtitle}</span>
        </h1>

        <h2 className="text-2xl font-bold text-center text-foreground mb-6">
          {ticket_content.form.form_title}
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-foreground mb-2 font-medium">
              {ticket_content.form.input_your_name}
            </label>
            <input
              type="text"
              placeholder={ticket_content.form.input_your_name}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondarybrand"
            />
          </div>

          <div>
            <label className="block text-foreground mb-2 font-medium">
              {ticket_content.form.how_many_tickets}
            </label>
            <input
              type="number"
              defaultValue="1"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondarybrand"
            />
          </div>

          <div>
            <label className="block text-foreground mb-2 font-medium">
              {ticket_content.form.your_phone_number}
            </label>
            <input
              type="text"
              placeholder="+251 912345678"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondarybrand"
            />
          </div>

          <button className="w-full bg-BroadcastChannel text-white py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg">
            {ticket_content.form.send_ticket}
          </button>
        </form>
      </div>
    </Container>
  );
}

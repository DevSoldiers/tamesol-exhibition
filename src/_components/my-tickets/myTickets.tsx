import { useQRCode } from 'next-qrcode';

export default function MyTickets() {
  const { Canvas } = useQRCode();

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
    </>
  );
}

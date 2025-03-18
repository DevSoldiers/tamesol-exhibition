import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useQRCode } from 'next-qrcode';

export default function QRDownloadable({ id }: { id: string }) {
  const { Canvas } = useQRCode();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Function to handle QR code download
  const handleDownloadQRCode = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.href = canvasRef.current.toDataURL('image/png');
      link.download = `qrcode-${id}.png`;
      link.click(); // Trigger the download
    }
  };

  // Use useEffect to access the canvas element after it's rendered
  useEffect(() => {
    const canvasElement = document.querySelector(`#qrcode-${id} canvas`) as HTMLCanvasElement;
    if (canvasElement) {
      canvasRef.current = canvasElement; // Assign the canvas element to the ref
    }
  }, [id]);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/CBE_Birr.webp"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full blur-sm" // Add blur effect to the background
        quality={100}
      />

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Ticket</h2>
        <div id={`qrcode-${id}`} className="border-2 border-gray-200 rounded-lg p-4">
          <Canvas text={id || 'https://example.com'} options={{ width: 150, margin: 2 }} />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDownloadQRCode();
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
        >
          Download the Ticket
        </button>
      </div>
    </div>
  );
}
